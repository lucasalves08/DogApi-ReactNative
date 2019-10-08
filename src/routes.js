import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Main from './pages/main'
import Home from './pages/home'


export const AppNavigator = createStackNavigator (
    { 
        Main: {
            screen: Main, 
            navigationOptions: { 
                header: null,
            }
        },
        Home: Home, 

    }, 
    {
        defaultNavigationOptions: { 
            headerTransparent: true, 
            headerBackTitle: null, 
            headerTintColor: 'black',
        }
    },
    {
        initialRouteName: 'Main',
    },
)
export const Container = createAppContainer (
    AppNavigator
)
