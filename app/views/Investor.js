import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { ButtonRounded } from "../sections/components/ButtonRounded";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

export default class Home extends React.Component {
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

  saludo = () => {
    this.props.navigation.navigate("SelectProfile");
  };

  goWithdrawal = () => {
    this.props.navigation.navigate("Withdrawal");
  };

  goInvestments = () => {
    this.props.navigation.navigate("Investments");
  };

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

  backView = () => {
    this.props.navigation.goBack();
  };

  outsession = () => {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 300);
  };

  render() {
    this.calcularRentabilidad();

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader
            iconMenu={false}
            action={this.backView}
            outsession={this.outsession}
          />

          <View style={styles.containerQuestion}>
            <Text style={styles.textQuestion}>Mis rendimientos</Text>
          </View>

          <View style={styles.containerFlex}>
            <View style={styles.containerDisplay}>
              <View style={styles.Display}>
                <Text style={styles.textDisplay}>
                  {this.state.investor[0]["balanceTotalPesos"]}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.containerQuestion}>
            <Text style={styles.textQuestion}>¿Que deseas hacer?</Text>
          </View>

          <View style={styles.containerOption}>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageOption}
                source={require("../sections/img/anadir.png")}
              />
            </View>

            <View style={styles.containerButton}>
              <ButtonRounded
                action={this.saludo}
                message={"Invertir"}
                color="#4296f3"
              />
            </View>
          </View>

          <View style={styles.containerOption}>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageOption}
                source={require("../sections/img/retirar.png")}
              />
            </View>

            <View style={styles.containerButton}>
              <ButtonRounded
                action={this.saludo}
                message={"Retirar"}
                color="#8acc1b"
              />
            </View>
          </View>

          <View style={styles.containerOption}>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageOption}
                source={require("../sections/img/mano.png")}
              />
            </View>

            <View style={styles.containerButton}>
              <ButtonRounded
                action={this.saludo}
                message={"Donar"}
                color="gray"
              />
            </View>
          </View>

          <View style={styles.containerOption}>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageOption}
                source={require("../sections/img/ingresos.png")}
              />
            </View>

            <View style={styles.containerButton}>
              <ButtonRounded
                action={this.goInvestments}
                message={"Ver mis inversiones"}
                color="#4296f3"
              />
            </View>
          </View>

          <View style={styles.containerOption}>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageOption}
                source={require("../sections/img/anciano.png")}
              />
            </View>

            <View style={styles.containerButton}>
              <ButtonRounded
                action={this.goWithdrawal}
                message={"Ver mis retiros"}
                color="#8acc1b"
              />
            </View>
          </View>

          <View style={styles.containerOption}>
            <View style={styles.containerImage}>
              <Image
                style={styles.imageOption}
                source={require("../sections/img/contribucion.png")}
              />
            </View>

            <View style={styles.containerButton}>
              <ButtonRounded
                action={this.saludo}
                message={"Ver mis donaciones"}
                color="gray"
              />
            </View>
          </View>
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
  imageOption: {
    width: 45,
    height: 45,
  },
  containerOption: {
    flexDirection: "row",
    flex: 0.6,
    width: "100%",
    margin: "auto",
  },
  containerImage: {
    flex: 1,
    alignItems: "flex-end",
  },
  containerGain: {
    flex: 1,
  },
  containerQuestion: {
    flex: 0.5,
    justifyContent: "center",
  },
  containerButton: {
    flex: 2,
    alignItems: "center",
  },
  button: {
    width: "60%",
    justifyContent: "center",
    borderColor: "#4296f3",
  },
  textButton: {
    color: "#4296f3",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonWithdrawals: {
    borderColor: "#78aa17",
    width: "60%",
    justifyContent: "center",
  },
  textButtonWithdrawals: {
    color: "#78aa17",
    fontSize: 20,
    fontWeight: "500",
  },
  buttonDonate: {
    borderColor: "#e5574f",
    borderColor: "gray",
    width: "60%",
    justifyContent: "center",
  },
  textButtonDonate: {
    color: "#e5574f",
    color: "gray",
    fontSize: 20,
    fontWeight: "500",
  },
  textQuestion: {
    fontSize: 20,
    color: "#00000094",
    paddingLeft: 30,
    fontWeight: "500",
  },
  containerDisplay: {
    backgroundColor: "#8080801c",
    width: "80%",
    height: 100,
    justifyContent: "center",
    borderRadius: 20,
  },
  textDisplay: {
    fontSize: 42,
    textAlign: "right",
    paddingRight: 30,
    fontWeight: "600",
    color: "#000000cf",
  },
  containerFlex: {
    alignItems: "center",
  },
});
