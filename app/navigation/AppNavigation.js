import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SplashScreen from "../views/Splash";
import HomeScreen from "../views/Home";
import RegisterScreen from "../views/Register";
import SelectProfileScreen from "../views/SelectProfile";
import InvestorScreen from "../views/Investor";
import WorkedScreen from "../views/worked";
import MotorcicleScreen from "../views/SelectMotorcicle";
import LoginScreen from "../views/Login";

const AppNavigation = createStackNavigator(
  {
    SelectProfile: {
      screen: SelectProfileScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Investor: {
      screen: InvestorScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Worked: {
      screen: WorkedScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    SelectMotorcicle: {
      screen: MotorcicleScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "SelectProfile",
  }
);

const LoginNavigation = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      auth: LoginNavigation,
      app: AppNavigation,
      splash: {
        screen: SplashScreen,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      initialRouteName: "splash",
    }
  )
);

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Select Motorcicle" component={SelectMotorcicle} />
//     </Drawer.Navigator>
//   );
// }

// export default createAppContainer(MyDrawer);
