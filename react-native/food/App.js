import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './scr/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
}, {
  initialRouteName: 'Search', // logger route on admin
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);