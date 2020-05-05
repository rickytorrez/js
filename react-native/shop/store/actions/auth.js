export const SIGNUP = 'SIGNUP';

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
            console.log(response);
        }

        const responseData = await response.json();
        console.log(responseData);

        // action sent to our app after the action is dispatched to the server 
        dispatch({ type: SIGNUP })
    };
};