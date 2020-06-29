import React from "react";
import AppNavigation from "./app/navigation/AppNavigation";
import MotorCicle from "./app/views/MyWithdrawal";
import { Provider as StorageProvider } from "react-redux";
import store from "./app/sections/storage/storage";

export default class App extends React.Component {
  render() {
    return (
      <StorageProvider store={store}>
        <AppNavigation />
        {/* // <MotorCicle /> */}
      </StorageProvider>
    );
  }
}
