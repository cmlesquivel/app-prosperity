import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { ButtonRounded } from "../sections/components/ButtonRounded";
import { connect } from "react-redux";
import { toFormatterPeso } from "../sections/functions";
import {
  fetchGetPaymentsCredit,
  fetchDataMotorcicle,
  fetchAddPaymentsCredit,
} from "../sections/storage/actions/actionsProfile";
import { CardCreditMotorcicle } from "../sections/components/CardCreditMotorcicle";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class Investor extends React.Component {
  state = {
    fontsLoaded: false,
    initialFeeMotorcicle:
      this.props.profile.data.dataApp[2].value * -1 -
      this.props.profile.data.pagoTotal,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    // this.props.fetchInvestments(this.props.profile.data._id);
    this.props.fetchDataMotorcicle();
  }

  saludo = () => {
    this.props.navigation.navigate("SelectProfile");
  };

  backView = () => {
    this.props.navigation.goBack();
  };

  goDoWithdrawal = () => {
    this.props.navigation.navigate("DoWithdrawal");
  };

  outsession = () => {
    this.props.navigation.navigate("Home");
  };

  doPayment = () => {
    let cuota = 0;
    if (this.props.profile.data.payment_credit.length < 6) {
      cuota = 200000;
    } else {
      cuota = this.props.profile.data.data_credit[0].monthlyPayment;
    }
    // console.log(this.props.profile.data._id);
    // console.log(this.props.profile.data.data_credit[0]._id);
    // console.log(cuota);
    this.props.fetchAddPaymentsCredit(
      this.props.profile.data._id,
      this.props.profile.data.data_credit[0]._id,
      cuota
    );

    this.props.fetchGetPaymentsCredit(this.props.profile.data._id);

    this.setState({
      initialFeeMotorcicle: this.state.initialFeeMotorcicle - cuota,
    });
  };

  render() {
    console.log(this.state.initialFeeMotorcicle);
    console.log(this.props.profile.data);

    let price = 0;

    this.state.initialFeeMotorcicle < 0
      ? (price = this.state.initialFeeMotorcicle * -1)
      : (price = this.state.initialFeeMotorcicle);

    // console.log(this.props.profile.data.dataApp[2].value);
    // console.log(this.props.profile.data.pagoTotal);

    // this.props.profile.data.dataApp[2].value * -1 -
    //   this.props.profile.data.pagoTotal,

    const id_motorcicle_credit = this.props.profile.data.data_credit[0]
      .id_motorcicle;

    // let balanceFormatPesos = toFormatterPeso(
    //   this.props.profile.data.balanceTotal
    // );

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader
            iconMenu={false}
            action={this.backView}
            outsession={this.outsession}
          />
          <ScrollView>
            <View style={styles.containerQuestion}>
              <Text style={styles.textTitle}>Detalle de mi crédito</Text>
            </View>

            <View style={styles.containerQuestion}>
              <Text style={styles.textQuestion}>
                {this.state.initialFeeMotorcicle < 0
                  ? "Has pagado"
                  : "Te hace falta"}
              </Text>

              {/* {this.state.initialFeeMotorcicle > 0 && (
              <Text style={styles.textQuestion}>Te hace falta </Text>
            )} */}
            </View>

            <View style={styles.containerFlex}>
              <View style={styles.containerDisplay}>
                <View style={styles.Display}>
                  <Text style={styles.textDisplay}>
                    {toFormatterPeso(price)}

                    {/* {toFormatterPeso(this.state.initialFeeMotorcicle)} */}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.containerQuestion}>
              <Text style={styles.textCuota}>
                {this.state.initialFeeMotorcicle < 0
                  ? "del crédito otorgado"
                  : "Para completar la cuota inicial"}
              </Text>
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
                  action={this.doPayment}
                  message={"Pagar cuota "}
                  color="#4296f3"
                />
              </View>
            </View>

            <View style={styles.containerQuestion}>
              <Text style={styles.textQuestion}>La moto que elegí</Text>
            </View>

            <FlatList
              style={styles.CardMoto}
              data={this.props.motorcicles}
              renderItem={({ item }) => (
                <CardCreditMotorcicle
                  referencia={item.referencia}
                  motor={item.motor}
                  precio={item.precio.toString()}
                  marcaMotor={item.marcaMotor}
                  cilindrada={item.cilindrada}
                  picture={item.picture}
                  item_id={item._id}
                  idMotorcicle={id_motorcicle_credit}
                />
              )}
              keyExtractor={(item) => item._id}
            />
          </ScrollView>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    marginBottom: 30,
    marginTop: 18,
  },
  containerImage: {
    flex: 1,
    alignItems: "flex-end",
  },
  CardMoto: {
    paddingBottom: 50,
  },
  containerGain: {
    // flex: 1,
  },
  containerQuestion: {
    // flex: 0.5,
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
    fontSize: 17,
    color: "#00000094",
    paddingLeft: 30,
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 10,
  },
  textCuota: {
    fontSize: 17,
    color: "#00000094",
    paddingLeft: 30,
    fontWeight: "500",
    paddingTop: 15,
    paddingBottom: 25,
  },
  textTitle: {
    fontSize: 25,
    color: "#00000094",
    textAlign: "center",
    fontWeight: "500",
    paddingTop: 25,
    paddingBottom: 5,
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

function mapStateToProps(state) {
  return {
    profile: state.profileReducer,
    motorcicles: state.profileReducer.data.motorcicles,
    profileState: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchInvestments: (id_user) => dispatch(fetchInvestments(id_user)),
    fetchDataMotorcicle: () => dispatch(fetchDataMotorcicle()),
    fetchAddPaymentsCredit: (id_user, id_credit, amount) =>
      dispatch(fetchAddPaymentsCredit(id_user, id_credit, amount)),
    fetchGetPaymentsCredit: (id_user) =>
      dispatch(fetchGetPaymentsCredit(id_user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Investor);
