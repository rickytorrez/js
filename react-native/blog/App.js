import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import IndexScreen from './src/screens/Index';

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  // takes in optional title for the screens
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});

export default createAppContainer(navigator);