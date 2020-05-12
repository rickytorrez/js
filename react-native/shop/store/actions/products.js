import Product from '../../models/product';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        // get userId
        const userId = getState().auth.userId;
        // if everything suceeds 
        try{
            // redux thunk allows you to send any async code before the action is dispatched
            const response = await fetch(
                'https://rn-complete-guide-16929.firebaseio.com/products.json'
            );

            // if response is in the 200 status code range
            if(!response.ok){
                throw new Error('Something went wrong');
            }

            // unpack response to get the data
            const responseData = await response.json();
            // console.log(responseData);  
            
            // array to be populated from server/db data
            const loadedProducts = [];
            for(const key in responseData){
                // console.log('key in response data for ', responseData[key].title, 'id: ', key);
                
                loadedProducts.push(
                    new Product(
                        key,
                        responseData[key].ownerId,
                        responseData[key].title,
                        responseData[key].imageUrl,
                        responseData[key].description,
                        responseData[key].price,
                    )
                );
            }
            dispatch({ 
                type: SET_PRODUCTS, 
                products: loadedProducts, 
                userProducts: loadedProducts.filter(prod => prod.ownerId === userId) })
        }
        // potential error handler
        catch(err){
            // send to custom analytics server
        throw err
        }
    };
};

export const deleteProduct = productId => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;    
        const response = await fetch(
            `https://rn-complete-guide-16929.firebaseio.com/products/${productId}.json?auth=${token}`, 
            {
                method: 'DELETE',
            }
        );

        if(!response.ok){
            throw new Error('Something went wrong!');
        }

        dispatch ({ type: DELETE_PRODUCT, pid: productId })
    }
};

export const createProduct = (title, description, imageUrl, price) => {
    return async (dispatch, getState) => {
        // redux thunk allows you to send any async code before the action is dispatched
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        const response = await fetch(
            `https://rn-complete-guide-16929.firebaseio.com/products.json?auth=${token}`, 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    description,
                    imageUrl,
                    price,
                    ownerId: userId
                })
            }
        );

        // unpack response to get the data
        const responseData = await response.json();
        console.log(responseData);
        
        dispatch ({ 
            type: CREATE_PRODUCT, 
            productData: {
                id: responseData.name,
                title,
                description,
                imageUrl,
                price,
                ownerId: userId
            }
        });
    }
};

export const updateProduct = (id, title, description, imageUrl) => {
    return async (dispatch, getState) => {
        const token = getState().auth.token;
        const response = await fetch(
            `https://rn-complete-guide-16929.firebaseio.com/products/${id}.json?auth=${token}`, 
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                // no need to pass price since we're not getting it
                body: JSON.stringify({
                    title,
                    description,
                    imageUrl
                })
            }
        );

        if(!response.ok){
            throw new Error('Something went wrong!');
        }

        dispatch ({ 
            type: UPDATE_PRODUCT, 
            pid: id,
            productData: {
                title,
                description,
                imageUrl
            }
        });
    }
};