import Order from "../../models/order";

export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS';

export const setOrders = () => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;

        try{
            // redux thunk allows you to send any async code before the action is dispatched
            const response = await fetch(
                `https://rn-complete-guide-16929.firebaseio.com/orders/${userId}.json`
            );

            // if response is in the 200 status code range
            if(!response.ok){
                throw new Error('Something went wrong');
            }

            // unpack response to get the data
            const responseData = await response.json();

            // array to be populated from server/db data
            const loadedOrders = []
            for(const key in responseData){                
                loadedOrders.push(
                    new Order(
                        key,
                        responseData[key].cartItems,
                        responseData[key].totalAmount,
                        // we create a new date since we need a date object not a date string
                        new Date(responseData[key].date)
                    )
                );
            }
            dispatch({
                type: SET_ORDERS,
                orders: loadedOrders
            });
        } catch(err){
            throw err;
        };
    };
};

export const addOrder = (cartItems, totalAmount) => {
    return async (dispatch, getState) => {

        const date = new Date();
        const token = getState().auth.token;
        const userId = getState().auth.userId;
        const response = await fetch(`https://rn-complete-guide-16929.firebaseio.com/orders/${userId}.json?auth=${token}`, 
            {
                method: 'POST',
                headers: 
                    {
                        'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    cartItems,
                    totalAmount,
                    date: date.toISOString()
            })
        });

        if(!response.ok){
            throw new Error('Something went wrong!');
        }

        const responseData = await response.json();
        console.log(responseData);

        dispatch ({ 
            type: ADD_ORDER, 
            orderData: { 
                id: responseData.name,
                items: cartItems, 
                amount: totalAmount,
                date: date
            } 
        });
    }
};

