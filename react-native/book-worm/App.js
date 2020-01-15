import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen'

const navigator = createStackNavigator ({
  WelcomeScreen
});

const App = createAppContainer(navigator);


export default App;