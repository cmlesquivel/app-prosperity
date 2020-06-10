import { createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import SplashScreen from '../views/Splash'
import HomeScreen from '../views/Home'
import RegisterScreen from '../views/Register'
import SelectProfileScreen from '../views/SelectProfile'
import InvestorScreen from '../views/Investor'
import WorkedScreen from '../views/worked'
import MotorcicleScreen from '../views/SelectMotorcicle'

const AppNavigation = createStackNavigator ({
    Splash:{
        screen: SplashScreen,
        navigationOptions :{
            headerShown:false
        }
    },
    Home:{
        screen: HomeScreen,
        navigationOptions :{
            headerShown:false
        }
    },
    Register:{
        screen: RegisterScreen,
        navigationOptions :{
            headerShown:false
        }
    },
    SelectProfile:{
        screen: SelectProfileScreen,
        navigationOptions :{
            headerShown:false
        }
    },
    Investor:{
        screen: InvestorScreen,
        navigationOptions :{
            headerShown:false
        }
    },
    Worked:{
        screen: WorkedScreen,
        navigationOptions :{
            headerShown:false
        }
    },
    SelectMotorcicle:{
        screen: MotorcicleScreen,
        navigationOptions :{
            headerShown:false
        }
    }
})

export default createAppContainer(AppNavigation)