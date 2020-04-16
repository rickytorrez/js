export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const deleteProduct = productId => {
    return { type: DELETE_PRODUCT, pid: productId }
};

export const createProduct = (title, description, imageUrl, price) => {
    return async dispatch => {
        // redux thunk allows you to send any async code before the action is dispatched
        const response = await fetch('https://rn-complete-guide-16929.firebaseio.com/products.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                imageUrl,
                price
            })
        });

        // unpack response to get the data
        const responseData = await response.json();
        console.log(responseData);
        
        dispatch ({ 
            type: CREATE_PRODUCT, 
            productData: {
                id: responseData,
                title,
                description,
                imageUrl,
                price
            }
        });
    }
};

export const updateProduct = (id, title, description, imageUrl) => {
    return { 
        type: UPDATE_PRODUCT, 
        pid: id,
        productData: {
            title,
            description,
            imageUrl
        }
    };
};