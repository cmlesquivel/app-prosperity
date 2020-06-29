import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { CardInvestment } from "../sections/components/CardInvestment";
import { connect } from "react-redux";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class MyInvestments extends React.Component {
  state = {
    fontsLoaded: false,
    investor: [],
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    const investor = require("../../assets/jsonFile/storage.json").investor;
    this.setState({ investor });
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
            <Text style={styles.textQuestion}>Mis Inversiones Activas</Text>
          </View>

          <FlatList
            data={this.props.profile.investments}
            renderItem={({ item }) => (
              <CardInvestment
                date={item.date}
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

export default connect(mapStateToProps)(MyInvestments);
