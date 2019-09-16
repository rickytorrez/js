// users reducer
export default (state= [], action) => {
    switch(action.type){
        case 'FETCH_USER':
            // a new record that we want to add to our state
            return [...state, action.payload]
        default:
            return state;
    }
}