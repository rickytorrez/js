import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/Index';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  // takes in optional title for the screens
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return( 
    <BlogProvider>
      <App />
    </BlogProvider>
  )
};