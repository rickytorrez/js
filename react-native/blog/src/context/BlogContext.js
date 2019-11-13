import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [
                ...state, { 
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title,
                    content: action.payload.content
                    }
                ];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload );
        default:
            return state;
    }
};


// crud dispatch functions
const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content }});
        callback();
    };
};

const deleteBlogPost = (dispatch) => {
    // receives the id argument
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { 
        addBlogPost, 
        deleteBlogPost },
    [{ 
        id: 1,
        title: 'A mere test', 
        content: 'Simple content' }]);