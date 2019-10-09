import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Main from './pages/main'
import Home from './pages/home'
import RandomImageList from './pages/randomImageList'

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
                headerTitle: 'Home',
            }
        }, 
        RandomImageList: { 
            screen: RandomImageList, 
            navigationOptions: { 
                headerTitle: 'Random Image',
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
