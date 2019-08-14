// import the react and reactdom libraries
import React from 'react';
import ReactDom from 'react-dom';

// create a react component
const App = () => {

    const buttonText = { text: 'Click Me' };
    const style = { backgroundColor: 'blue', color: 'white' };
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                { labelText }
            </label>
            <input id="name" type="text"/>
            <button style={ style }>
                { buttonText.text }
            </button>
        </div>
    );
};

// take the react component and show it on the screen, link it to the id of root in the public/index.html file
ReactDom.render(
    <App />,
    document.querySelector('#root')
);