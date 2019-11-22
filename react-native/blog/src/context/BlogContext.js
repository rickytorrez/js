import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost
            });
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload );
        default:
            return state;
    }
};


// crud dispatch functions
const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        // response.data === [ {}, {}, {} ]
        dispatch({ type: 'get_blogposts', payload: response.data });
    };
};



const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        const response = await jsonServer.post('/blogposts', { title, content });
        if(callback){
            callback();
        }

    };
};

const deleteBlogPost = (dispatch) => {
    // receives the id argument to be deleted
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id });
    };
};

const editBlogPost = (dispatch) => {
    // receives the title and content to be edited - callback to pop us back
    return async (id, title, content, callback) => {

        await jsonServer.put(`/blogposts/${id}`, {title, content })

        dispatch({ 
            type: 'edit_blogpost', 
            payload: { id, title, content }
        });
        if(callback){
            callback();
        }
    };
};

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { 
        getBlogPosts,
        addBlogPost, 
        deleteBlogPost,
        editBlogPost },
    []);