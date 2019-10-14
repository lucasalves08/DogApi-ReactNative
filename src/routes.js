import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from './pages/main';
import Home from './pages/home';
import RandomImageList from './pages/randomImageList';
import AllList from './pages/allList';
import ByBreed from './pages/byBreed';
import SubBreed from './pages/subBreed'


export const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
      },
    },
    RandomImageList: {
      screen: RandomImageList,
      navigationOptions: {
        headerTitle: 'Random Image',
      },
    },
    AllList: {
      screen: AllList,
      navigationOptions: {
        headerTitle: 'All Breeds',
      },
    },
    ByBreed: {
      screen: ByBreed,
      navigationOptions: {
        headerTitle: 'By Breed',
      },
    },
    SubBreed: { 
      screen: SubBreed, 
      navigationOptions: { 
        headerTitle: 'By Sub-Breed'
      }
    }
  },
  {
    defaultNavigationOptions: {
      headerTransparent: false,
      headerBackTitle: null,
      headerTintColor: 'black',
    },
  },
  {
    initialRouteName: 'Main',
  },
);
export const Container = createAppContainer(AppNavigator);
