import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import CartItem from '../../models/cart-item';

const initialState = {
    items: {},
    totalAmount: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let updatedOrNewCartItem;

            if(state.items[addedProduct.id]){
                // alredy have the item in the cart - just changing the quantity
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );     
            } else {
                // adding the new item
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
            }
            return {
                ...state,
                items: { ...state.items, [addedProduct.id]: updatedOrNewCartItem },
                totalAmount: state.totalAmount + prodPrice
            };
        case REMOVE_FROM_CART:
            // pid is provided on the action => productId
            const selectedCartItem = state.items[action.pid];
            const currentQty = state.items[action.pid].quantity;

            let updatedCartItems;
            if(currentQty > 1){
                // need to reduce
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1, 
                    selectedCartItem.productPrice, 
                    selectedCartItem.productTitle, 
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                // set it equal to a copy of the existing items but replace the action.pid with the updated value
                // of quantity and sum
                updatedCartItems = { ...state.items, [action.pid]: updatedCartItem }
            } else {
                // need to erase
                // should return a new items object without the deleted item
                updatedCartItems = { ...state.items };
                // delete the action.pid
                delete updatedCartItems[action.pid]
            }
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: state.totalAmount - selectedCartItem.productPrice
            }
        }
    return state;
};