import { AsyncStorage } from 'react-native';

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (userId, token, expiryTime) => {
    return dispatch => {
        dispatch(setLogoutTimer(expiryTime));
        dispatch( { 
            type: AUTHENTICATE,
            userId: userId,
            token: token    
        });
    }; 
};

export const signup = (email, password) => {
    return async dispatch => {
        // request that creates a new user
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDgyur9cfJWr3odhqmtMxZpf45EA1D3xDY',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }    
        );
        
        if(!response.ok){
            const errorResponseData = await response.json();
            const errorId = errorResponseData.error.message;
            let message = 'Something went wrong!'
            if(errorId === 'EMAIL_EXISTS') {
                message = 'This email exists already';
            } else if (errorId === 'WEAK_PASSWORD') {
                message = 'Password should be at least 6 characters long';
            } else if (errorId === 'INVALID_EMAIL') {
                message = 'Please provide a valid email format';
            }
            throw new Error(message);
        };

        const responseData = await response.json();
        console.log(responseData);

        // action sent to our app after the action is dispatched to the server 
        // make sure we carry the token and userId for the reducer
        dispatch(
            authenticate(
                responseData.localId, 
                responseData.idToken,
                parseInt(responseData.expiresIn) * 1000
            )
        );
        // gets the expiration time and converts it to a number and then miliseconds
        const expirationDate = new Date
            (new Date().getTime() + parseInt(responseData.expiresIn) * 1000
        );
        saveDataToStorage(responseData.idToken, responseData.localId, expirationDate);
    };
};

export const login = (email, password) => {
    return async dispatch => {
        // request that creates a new user
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDgyur9cfJWr3odhqmtMxZpf45EA1D3xDY',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }    
        );
        
        if(!response.ok){
            const errorResponseData = await response.json();
            const errorId = errorResponseData.error.message;
            let message = 'Something went wrong!'
            if(errorId === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!';
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'This password is not valid!';
            }
            throw new Error(message);
        };

        const responseData = await response.json();
        console.log(responseData);

        // action sent to our app after the action is dispatched to the server 
        // make sure we carry the token and userId for the reducer
        dispatch(
            authenticate(
                responseData.localId, 
                responseData.idToken,
                parseInt(responseData.expiresIn) * 1000
            )
        );
        // gets the expiration time and converts it to a number and then miliseconds
        const expirationDate = new Date
            (new Date().getTime() + parseInt(responseData.expiresIn) * 1000
        );
        saveDataToStorage(responseData.idToken, responseData.localId, expirationDate);
    };
};

export const logout = () => {
    clearLogoutTimer();
    AsyncStorage.removeItem('userData');
    return { type: LOGOUT }
};

const clearLogoutTimer = () => {
    if(timer){
        clearTimeout(timer);
    };
};

const setLogoutTimer = (expirationTime) => {
    // uses redux thunk where the inner function gets dispatched as an argument => logout
    return dispatch => {
        // this function executes once the token expires
        timer = setTimeout( () => {
            // once the async task finishes ( token expires ), we dispatch logout
            dispatch(logout()); 
        // timer expires after this time
        }, expirationTime)
    };   
};

const saveDataToStorage = (token, userId, expirationDate) => {
    AsyncStorage.setItem(
        'userData', 
        JSON.stringify({
            token: token,
            userId: userId,
            expirationDate: expirationDate.toISOString()
        })
    );
};