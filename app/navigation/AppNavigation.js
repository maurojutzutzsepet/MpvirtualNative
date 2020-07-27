import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import SplashScreen from "@screens/SplashScreen"
import LoginScreen from "@screens/LoginScreen"
import PrincipalScreen from "@screens/PrincipalScreen"
import RecuperarPasswordScreen from "@screens/RecuperarPasswordScreen"
import RegistroScreen from '@screens/RegistroScreen'
import FiscaliasScreen from "@screens/FiscaliasScreen"
import RenasScreen from "@screens/RenasScreen"

const AppNavigation = createStackNavigator({
   
    Splash:{
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Principal: {
        screen: PrincipalScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
     
    Renas:{
        screen: RenasScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    RecuperarPassword: {
        screen: RecuperarPasswordScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Registro: {
        screen: RegistroScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Fiscalias:{
        screen: FiscaliasScreen,
        navigationOptions: {
            headerShown: false,
        }
    },   
})

export default createAppContainer(AppNavigation)