import React from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { CardInvestment } from "../sections/components/CardInvestment";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

export default class MyInvestments extends React.Component {
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

  calcularRentabilidad = () => {
    let miFechaActual = new Date();
    let day_as_milliseconds = 86400000;

    const formatterPeso = new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });

    for (let i = 0; i < this.state.investor.length; i++) {
      this.state.investor[i]["balanceTotal"] = 0;
      for (let j = 0; j < this.state.investor[i]["investments"].length; j++) {
        let miFechaPasada = new Date(
          this.state.investor[i]["investments"][j]["date"]
        );

        let diff_in_millisenconds = miFechaActual - miFechaPasada;
        let diff_in_days = diff_in_millisenconds / day_as_milliseconds;
        let periodos = Math.trunc(
          diff_in_days / this.state.investor[i]["investments"][j]["numberDays"]
        );

        this.state.investor[i]["investments"][j]["balance"] =
          this.state.investor[i]["investments"][j]["amount"] *
          Math.pow(
            this.state.investor[i]["investments"][j]["profitability"],
            periodos
          );

        this.state.investor[i]["balanceTotal"] += this.state.investor[i][
          "investments"
        ][j]["balance"];

        // amountPesos

        this.state.investor[i]["investments"][j][
          "amountPesos"
        ] = formatterPeso.format(
          this.state.investor[i]["investments"][j]["amount"]
        );

        this.state.investor[i]["investments"][j][
          "balancePesos"
        ] = formatterPeso.format(
          this.state.investor[i]["investments"][j]["balance"]
        );
      }
      this.state.investor[i]["balanceTotalPesos"] = formatterPeso.format(
        this.state.investor[i]["balanceTotal"]
      );
    }
  };

  // saludo = () => {
  //   this.props.navigation.navigate("SelectProfile");
  // };

  backView = () => {
    this.props.navigation.goBack();
  };

  render() {
    this.calcularRentabilidad();

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={false} action={this.backView} />
          <View>
            <Text style={styles.textQuestion}>Mis Inversiones Activas</Text>
          </View>

          <FlatList
            data={this.state.investor[0].investments}
            renderItem={({ item }) => (
              <CardInvestment
                date={item.date}
                amount={item.amount}
                numberDays={item.numberDays}
                profitability={item.profitability}
                balance={item.balance}
                balancePesos={item.balancePesos}
                amountPesos={item.amountPesos}
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
