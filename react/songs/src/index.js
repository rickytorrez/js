import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

// create an instance of the provider
// wrap the app by the provider
// pass the provider a single prop of store, createStore and pass in the application reducers
ReactDOM.render(
    <Provider store={ createStore(reducers) } >
        <App />
    </Provider>,
    document.querySelector('#root')
);