// state is initialized as an empty array since it will return a list of blogs
// switch case is used instead of if/else statements - default is our safe catch
export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};