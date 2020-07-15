import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { CardDoWithdrawal } from "../sections/components/CardDoWithdrawal";
import { connect } from "react-redux";
import { changeInvestment } from "../sections/storage/actions/actionsProfile";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class MyInvestments extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  backView = () => {
    this.props.navigation.goBack();
  };

  doWithdrawals = (id, active, balance, id_user) => {
    Alert.alert(
      "",
      "Confirmo realizar este retiro",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            this.props.changeInvestment(id, active, balance, id_user),
        },
      ],
      { cancelable: true }
    );
  };

  render() {
    console.log(this.props.profile);
    // console.log(this.props.profile.data._id);

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={false} action={this.backView} />

          <View>
            <Text style={styles.textQuestion}>
              Selecciona la inversión a retirar
            </Text>
          </View>

          <FlatList
            data={this.props.profile.data.investments}
            renderItem={({ item }) => (
              <CardDoWithdrawal
                date={item.createdAt}
                amount={item.amount}
                numberDays={item.numberDays}
                profitability={item.profitability}
                balance={item.balance}
                active={item.active}
                action={() => {
                  this.doWithdrawals(
                    item._id,
                    !item.active,
                    item.balance,
                    this.props.profile.data._id
                  );
                }}
              />
            )}
            keyExtractor={(item) => item._id}
          />

          <View></View>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textQuestion: {
    fontSize: 20,
    color: "#00000094",
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    paddingBottom: 10,
    paddingTop: 20,
  },
});

function mapStateToProps(state) {
  return {
    profile: state.profileReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeInvestment: (id, active, balance, id_user) =>
      dispatch(changeInvestment(id, active, balance, id_user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyInvestments);
