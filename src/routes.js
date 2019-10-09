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
        Home: { 
            screen: Home,
            navigationOptions: { 
                headerTitle: 'Home'
            }
        } 

    }, 
    {
        defaultNavigationOptions: { 
            headerTransparent: false, 
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
