import React, { useReducer } from 'react';

export default (reducer, actions, initialState) => {
    
    // context object
    const Context = React.createContext();

    // provider function
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
    };

    // return JSX
    return <Context.Provider value={{ state }}>
        { children }
    </Context.Provider>

    return { Context, Provider };
};