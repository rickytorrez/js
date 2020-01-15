import React from 'react';
import { View } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from './screens/AppSwitchNavigator/WelcomeScreen';

const App = () => <AppContainer />

const AppSwitchNavigator = createSwitchNavigator({
  Welcome
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;