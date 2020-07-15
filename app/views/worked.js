import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Container, ListItem, CheckBox, Body } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { MyButton } from "../sections/components/myButton";
import { toFormatterPeso, monthlyFees } from "../sections/functions";
import RNPickerSelect from "react-native-picker-select";
import { connect } from "react-redux";
import {
  fetchDataMotorcicle,
  fetchTokenRappiTendero,
  fetchAddCredit,
  getDataCreditSuccess,
  fetchGetCreditRappiTendero,
} from "../sections/storage/actions/actionsProfile";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class Worked extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pricePase: 0,
      selectCreditPase: false,
      selectCreditMotorcicle: false,
      priceMotorcicle: 0,
      answer: "",
      fontsLoaded: false,
      initialFeeMotorcicle: 0,
      payMonthly: "",
      plazo: "",
      interes: 0.020825,
      activeCredit: false,
      stateCredit: "",
      id_pase: "",
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    // this.props.fetchIsRappiTendero(this.props.profile.email);
  }

  componentWillReceiveProps(nextProps) {
    let priceMotorcicleNew =
      nextProps.navigation.state.params.priceCreditMotorcicle;
    this.setState({
      priceMotorcicle: parseInt(priceMotorcicleNew),
      selectCreditMotorcicle: true,
      initialFeeMotorcicle: this.props.costs[2].value,
    });
  }

  goSelectMotorcicle = () => {
    this.state.selectCreditMotorcicle
      ? this.setState({
          selectCreditMotorcicle: false,
          priceMotorcicle: 0,
          initialFeeMotorcicle: 0,
        })
      : this.props.navigation.navigate("SelectMotorcicle");
  };

  giveACreditPase = () => {
    this.state.selectCreditPase
      ? this.setState({
          selectCreditPase: false,
          pricePase: 0,
        })
      : this.setState({
          selectCreditPase: true,
          pricePase: this.props.costs[0].value,
        });
  };

  requestCredit = (totalCredit, idMotorcicle) => {
    if (this.state.priceMotorcicle == 0) {
      console.log("Selecciona por favor la motocicleta a financiar ");
    } else if (!this.state.plazo) {
      console.log("Selecciona el N° de cuotas ");
    } else {
      if (this.props.profile.user_type === "courier") {
        console.log("Eres un rappi-tendero");
        this.props.fetchTokenRappiTendero(this.props.profile.email);
        setTimeout(() => {
          if (
            parseInt(this.props.profile.profile_rappi_tendero.identification) !=
            this.props.profile.document
          ) {
            Alert.alert("Verifica tu número de identificación");
          } else if (!this.props.profile.profile_rappi_tendero.active) {
            Alert.alert("No te encuentras activo como Rappi-Tendero");
          } else if (
            parseInt(this.props.profile.profile_rappi_tendero.average) < 4
          ) {
            Alert.alert("Mejora tu promedio para acceder a un crédito");
          } else {
            Alert.alert("Tu credito fue aprobado!!");
            this.props.fetchAddCredit(
              this.props.profile._id,
              idMotorcicle,
              this.props.costs[0]._id,
              totalCredit,
              this.state.plazo,
              this.state.interes,
              true,
              this.state.payMonthly,
              this.state.priceMotorcicle,
              this.state.pricePase,
              "aprobado",
              this.props.profile.email
            );
            // this.props.fetchGetCreditRappiTendero(this.props.profile.email);
            // this.props.navigation.navigate("SelectProfile");

            // setTimeout(() => {
            this.props.navigation.navigate("SelectProfile");
            this.props.getDataCreditSuccess([{ active: true }]);
            // }, 500);
          }
        }, 3500);
      } else {
        Alert.alert("Aún no haces parte del selecto equipo de Rappi-Tenderos");
      }
    }
    // Alert.alert(
    //   "Mensaje",
    //   "Credito aprobado",
    //   [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    //   { cancelable: false }
    // );
  };

  goWorked = () => {
    this.props.navigation.navigate("Worked");
  };

  backView = () => {
    this.props.navigation.goBack();
  };

  outsession = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    // console.log(this.props.profile);
    // console.log(this.props.profile);
    // console.log(this.props.profile.data_credit[0].active);
    // this.props.profile.data.user_type
    const placeholder = {
      label: "n.º cuotas",
      value: "",
      color: "red",
    };

    const plazos = [
      {
        label: "6 cuotas",
        value: "6",
      },
      {
        label: "12 cuotas",
        value: "12",
      },
      {
        label: "18 cuotas",
        value: "18",
      },
      {
        label: "24 cuotas",
        value: "24",
      },
      {
        label: "36 cuotas",
        value: "36",
      },
      {
        label: "48 cuotas",
        value: "48",
      },
    ];

    const idMotorcicle = this.props.navigation.getParam("idMotorcicle", "");

    let totalCredit =
      this.state.pricePase +
      this.state.priceMotorcicle +
      this.state.initialFeeMotorcicle;

    if (this.state.fontsLoaded) {
      return (
        <Container style={styles.container}>
          <MyHeader
            iconMenu={false}
            action={this.backView}
            outsession={this.outsession}
          />

          <View style={styles.containerQuestion}>
            <Text style={styles.textQuestion}>
              ¿Elige tu motocicleta a financiar?
            </Text>
          </View>

          <View style={styles.flexCenter}>
            <View style={styles.containerOption}>
              <View style={styles.containerList}>
                <ListItem style={styles.listItem}>
                  <CheckBox
                    checked={this.state.selectCreditMotorcicle}
                    color="#d4af37"
                    onPress={this.goSelectMotorcicle}
                  />
                  <Body>
                    <Text style={styles.textProduct}>Moto</Text>
                  </Body>
                </ListItem>
              </View>
              <View style={styles.containerText}>
                <View style={styles.rectangleGray}>
                  <Text style={styles.textSign}></Text>
                  <Text style={styles.textValue}>
                    {toFormatterPeso(this.state.priceMotorcicle)}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {this.state.selectCreditMotorcicle && (
            <View style={styles.flexCenter}>
              <View style={styles.containerOption}>
                <View style={styles.containerList}>
                  <ListItem style={styles.listItem}>
                    <CheckBox checked={true} color="transparent" disabled />
                    <Body>
                      <Text style={styles.textProduct}>Cuota inicial</Text>
                    </Body>
                  </ListItem>
                </View>
                <View style={styles.containerText}>
                  <View style={styles.rectangleGray}>
                    <Text style={styles.textSign}></Text>
                    <Text style={styles.textValue}>
                      {toFormatterPeso(this.state.initialFeeMotorcicle)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}

          <View style={styles.flexCenter}>
            <View style={styles.containerOption}>
              <View style={styles.containerList}>
                <ListItem style={styles.listItem}>
                  <CheckBox
                    checked={this.state.selectCreditPase}
                    color="#d4af37"
                    onPress={this.giveACreditPase}
                  />
                  <Body>
                    <Text style={styles.textProduct}>Pase</Text>
                  </Body>
                </ListItem>
              </View>
              <View style={styles.containerText}>
                <View style={styles.rectangleGray}>
                  <Text style={styles.textSign}></Text>
                  <Text style={styles.textValue}>
                    {toFormatterPeso(this.state.pricePase)}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.flexCenter}>
            <View style={styles.containerOption}>
              <View style={styles.containerList}>
                <ListItem style={styles.listItem}>
                  <CheckBox checked={true} color="transparent" disabled />
                  <Body>
                    <Text style={styles.textProductTotal}>Total crédito</Text>
                  </Body>
                </ListItem>
              </View>
              <View style={styles.containerText}>
                <View style={styles.rectangleGray}>
                  <Text style={styles.textSignTotal}></Text>
                  <Text style={styles.textTotal}>
                    {toFormatterPeso(totalCredit)}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.flexCenter}>
            <View style={styles.containerOption}>
              <View style={styles.containerList}>
                <ListItem style={styles.listItem}>
                  <CheckBox checked={true} color="transparent" disabled />
                  <Body>
                    <Text style={styles.textProduct}>N.° de cuotas</Text>
                  </Body>
                </ListItem>
              </View>
              <View style={styles.containerText}>
                <View style={styles.containerSelector}>
                  <RNPickerSelect
                    placeholder={placeholder}
                    onValueChange={(value) => {
                      let payMonthly = monthlyFees(
                        totalCredit,
                        this.state.interes,
                        value
                      );
                      this.setState({
                        plazo: value,
                        payMonthly: payMonthly,
                      });
                      console.log(this.state.plazo);
                    }}
                    items={plazos}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.flexCenter}>
            <View style={styles.containerOption}>
              <View style={styles.containerList}>
                <ListItem style={styles.listItem}>
                  <CheckBox checked={true} color="transparent" disabled />
                  <Body>
                    <Text style={styles.textProductTotal}>Pagos mensuales</Text>
                  </Body>
                </ListItem>
              </View>
              <View style={styles.containerText}>
                <View style={styles.rectangleGray}>
                  <Text style={styles.textSign}></Text>
                  <Text style={styles.textTotal}>
                    {toFormatterPeso(this.state.payMonthly)}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.containerButton}>
            <MyButton
              message="Solicitar Prestamo"
              action={() => {
                this.requestCredit(totalCredit, idMotorcicle);
              }}
            />
          </View>

          <View style={styles.containerButton}>
            <Text style={styles.answer}>{this.state.answer}</Text>
          </View>
        </Container>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80808000",
  },
  textQuestion: {
    fontSize: 20,
    color: "#00000094",
    textAlign: "center",
    fontFamily: "Poppins-Medium",
  },
  containerOption: {
    flexDirection: "row",
    width: "80%",
  },
  containerTouchable: {
    flex: 0.6,
  },
  containerText: {
    justifyContent: "center",
    flex: 1,
  },
  listItem: {
    borderColor: "red",
    borderBottomWidth: 0,
  },
  containerQuestion: {
    flex: 0.6,
    justifyContent: "center",
  },
  containerList: {
    justifyContent: "center",
    flex: 1,
  },
  textValue: {
    textAlign: "center",
    flex: 0.7,
  },
  textTotal: {
    textAlign: "center",
    flex: 0.7,
    fontWeight: "600",
  },
  rectangleGray: {
    backgroundColor: "#00000036",
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 7,
    width: "80%",
    flexDirection: "row",
  },
  textProduct: {
    paddingLeft: 20,
    fontFamily: "Poppins-Regular",
  },
  textProductTotal: {
    paddingLeft: 20,
    fontWeight: "600",
  },
  textSign: {
    flex: 0.3,
    textAlign: "right",
  },
  textSignTotal: {
    flex: 0.3,
    textAlign: "right",
    fontWeight: "600",
  },
  containerButton: {
    alignItems: "center",
    flex: 1,
  },
  flexCenter: {
    alignItems: "center",
    flex: 0.7,
    justifyContent: "center",
  },
  answer: {
    fontSize: 18,
    fontFamily: "Poppins-Medium",
    color: "#f85b51",
  },
  containerSelector: {
    width: "80%",
  },
  selector: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});

function mapStateToProps(state) {
  return {
    costs: state.profileReducer.data.dataApp,
    profile: state.profileReducer.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGetCreditRappiTendero: (email) =>
      dispatch(fetchGetCreditRappiTendero(email)),
    // getDataCreditSuccess

    getDataCreditSuccess: (state) => dispatch(getDataCreditSuccess(state)),

    fetchDataMotorcicle: () => dispatch(fetchDataMotorcicle()),
    fetchTokenRappiTendero: (email) => dispatch(fetchTokenRappiTendero(email)),
    fetchAddCredit: (
      id_user,
      id_motorcicle,
      id_pase,
      amount,
      numberMonths,
      interest,
      active,
      monthlyPayment,
      priceMotorcicle,
      pricePase,
      stateCredit,
      email
    ) =>
      dispatch(
        fetchAddCredit(
          id_user,
          id_motorcicle,
          id_pase,
          amount,
          numberMonths,
          interest,
          active,
          monthlyPayment,
          priceMotorcicle,
          pricePase,
          stateCredit,
          email
        )
      ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Worked);
