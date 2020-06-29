import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { CardWithdrawal } from "../sections/components/CardWithdrawal";
import { connect } from "react-redux";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class MyWithdrawals extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    // const investor = require("../../assets/jsonFile/storage.json").investor;
    // this.setState({ investor });
  }

  backView = () => {
    this.props.navigation.goBack();
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={false} action={this.backView} />
          <View>
            <Text style={styles.textQuestion}>Mis Retiros</Text>
          </View>

          <FlatList
            data={this.props.profile.removeMoney}
            renderItem={({ item }) => (
              <CardWithdrawal
                dateStart={item.dateStart}
                dateEnd={item.dateEnd}
                amount={item.amount}
                numberDays={item.numberDays}
                profitability={item.profitability}
                balance={item.balance}
              />
            )}
            keyExtractor={(item) => item.id}
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
    profile: state,
  };
}

export default connect(mapStateToProps)(MyWithdrawals);
