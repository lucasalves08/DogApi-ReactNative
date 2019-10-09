import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Main from './pages/main'
import Home from './pages/home'
import RandomImageList from './pages/randomImageList'
import AllList from './pages/allList'

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
        }, 
        AllList: { 
            screen: AllList, 
            navigationOptions: { 
                headerTitle: "All Breeds"
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
