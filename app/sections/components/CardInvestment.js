import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import PropTypes from "prop-types"; //validar el tipo de dato de los parametros pasados

let customFonts = {
  "Poppins-Medium": require("../../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
};

export class CardInvestment extends React.Component {
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

  render() {
    const {
      date,
      amountPesos,
      numberDays,
      profitability,
      balance,
      balancePesos,
    } = this.props;

    let options = { year: "numeric", month: "long", day: "numeric" };
    let formatDate = new Date(date).toLocaleDateString("es-ES", options);
    let profitabilityReal = ((profitability - 1) * 100).toFixed(1);

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.containerCard}>
          <View style={styles.card}>
            <View style={styles.containerMotorcicle}>
              <View style={styles.featuresMotorcicle}>
                <Text style={styles.textFeature}>
                  Fecha : <Text style={styles.textNoBold}>{formatDate}</Text>
                </Text>
                <Text style={styles.textFeature}>
                  Monto :<Text style={styles.textNoBold}> {amountPesos}</Text>
                </Text>

                <Text style={styles.textFeature}>
                  Inversión + Ganancias :
                  <Text style={styles.textNoBold}> {balancePesos}</Text>
                </Text>

                <Text style={styles.textFeature}>
                  Plazo :
                  <Text style={styles.textNoBold}> {numberDays} días</Text>
                </Text>

                <Text style={styles.textFeature}>
                  Interes :
                  <Text style={styles.textNoBold}>
                    {" "}
                    {profitabilityReal} % (E.A)
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

// validar el tipo de parametro -- tipado de informacion que recibimos
// CardMotorcicle.propTypes = {
//     action: PropTypes.func,
//     referencia: PropTypes.string.isRequired,
//     motor: PropTypes.string.isRequired,
//     precio: PropTypes.string.isRequired,
//     marcaMotor: PropTypes.string.isRequired,
//     cilindrada: PropTypes.string.isRequired,
//     picture: PropTypes.string.isRequired
// };

const styles = StyleSheet.create({
  imageMotorcicle: {
    width: "100%",
    height: 168,
    resizeMode: "stretch",
  },
  featuresMotorcicle: {
    borderRightColor: "gray",
    borderRightWidth: 1,
    borderLeftColor: "gray",
    borderLeftWidth: 1,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 15,
    backgroundColor: "#80808070",
    borderRadius: 15,
  },
  card: {
    width: "90%",
  },
  containerCard: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
  },
  textNoBold: {
    fontWeight: "300",
  },
  Textvalue: {
    fontSize: 16,
  },
  textTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    paddingTop: 7,
    paddingBottom: 7,
  },
  containerTitle: {
    backgroundColor: "#80808040",
    justifyContent: "center",
    alignContent: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textFeature: {
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    fontWeight: "600",
  },
  textButton: {
    fontSize: 17,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    color: "white",
  },
  button: {
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: "#f85b51",
    borderWidth: 0,
    paddingTop: 6,
    paddingBottom: 6,
  },
});
