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
import WithdrawalScreen from "../views/MyWithdrawal";
import InvestmentsScreen from "../views/Myinvestments";
import ProfileScreen from "../views/Profile";
import AddInvesmentScreen from "../views/AddInvesment";
import DoWithdrawalScreen from "../views/DoWithdrawal";
import PaymentCreditScreen from "../views/PaymentCredit";

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
    Withdrawal: {
      screen: WithdrawalScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Investments: {
      screen: InvestmentsScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    DoWithdrawal: {
      screen: DoWithdrawalScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    AddInvesment: {
      screen: AddInvesmentScreen,
      navigationOptions: {
        headerShown: false,
      },
    },

    PaymentCredit: {
      screen: PaymentCreditScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: "SelectProfile",
    // initialRouteName: "Worked",
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
      // auth: PaymentCreditScreen,
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
