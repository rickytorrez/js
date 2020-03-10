import React from 'react';

// redux set up
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
 
// this data is used when useRedecuer is called on components
const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={ store }>
      <ShopNavigator />
    </Provider>
  );
}

