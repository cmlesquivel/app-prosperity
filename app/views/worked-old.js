import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Container, ListItem, CheckBox, Body } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { MyButton } from "../sections/components/myButton";
import { toFormatterPeso } from "../sections/functions";
import { connect } from "react-redux";
import { fetchData } from "../sections/storage/actions/actionsCosts";

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
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    // this.props.fetchData();
  }

  componentWillReceiveProps(nextProps) {
    let priceMotorcicleNew =
      nextProps.navigation.state.params.priceCreditMotorcicle;

    this.setState({
      priceMotorcicle: parseInt(priceMotorcicleNew),
      selectCreditMotorcicle: true,
      initialFeeMotorcicle: this.props.costs.data.initialFeeMotorcicle.value,
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
          pricePase: this.props.costs.data.pases.value,
        });
  };

  requestCredit = () => {
    Alert.alert(
      "Mensaje",
      "Credito aprobado",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
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
    const idMotorcicle = this.props.navigation.getParam("idMotorcicle", "");
    console.log(this.props.costs);

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
              ¿Necesitas un prestamo para?
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
          <View style={styles.containerButton}>
            <MyButton
              message="Solicitar Prestamo"
              action={this.requestCredit}
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
});

function mapStateToProps(state) {
  return {
    costs: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Worked);
