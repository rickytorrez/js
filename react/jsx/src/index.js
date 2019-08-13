// import the react and reactdom libraries
import React from 'react';
import ReactDom from 'react-dom';

// create a react component
const App = () => {
    return <div>Hi There!</div>;
};

// take the react component and show it on the screen, link it to the id of root in the public/index.html file
ReactDom.render(
    <App />,
    document.querySelector('#root')
);