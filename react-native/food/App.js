import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './scr/screens/SearchScreen';
import ResultsShowScreen from './scr/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  Result: ResultsShowScreen
}, {
  initialRouteName: 'Search', // logger route on admin
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);