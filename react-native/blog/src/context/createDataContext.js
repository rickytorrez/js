import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    
    // context object
    const Context = React.createContext();

    // provider function
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
    
    // actions === { addBlogPost: (dispatch) => { return () => {} } }
    const boundActions = {};
    for (let key in actions){
        // key ==== 'add_blogpost'
        boundActions[key] = actions[key](dispatch);
    }

    // return JSX
    return <Context.Provider value={{ state, ...boundActions }}>
        { children }
    </Context.Provider>
    
    };

    return { Context, Provider };
};