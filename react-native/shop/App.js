import React, { useState } from 'react';

// redux set up
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'

// font set up
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
 
// this data is used when useRedecuer is called on components
const rootReducer = combineReducers({
  products: productsReducer
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

if (!fontLoaded){
  return (
    <AppLoading 
      startAsync={ fetchFonts } 
      onFinish={ () => {
        setFontLoaded(true)
      }}
    />
  );
}

  return (
    <Provider store={ store }>
      <ShopNavigator />
    </Provider>
  );
}

