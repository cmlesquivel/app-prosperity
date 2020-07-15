import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { connect } from "react-redux";
import {
  fetchDataProfile,
  fetchIsRappiTendero,
  fetchDataApp,
  fetchGetCreditRappiTendero,
  fetchGetPaymentsCredit,
} from "../sections/storage/actions/actionsProfile";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

// if (t === undefined) {

// }

class SelectProfile extends React.Component {
  state = {
    fontsLoaded: false, //this.props.profile.data.data_credit[0].active
    // haveCredit: this.props.profile.data.data_credit[0].active,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.props.fetchDataProfile(this.props.profile.data.email);
    this.props.fetchIsRappiTendero(this.props.profile.data.email);
    this.props.fetchGetCreditRappiTendero(this.props.profile.data.email);
    this.props.fetchDataApp();
  }

  outsession = () => {
    this.props.navigation.navigate("Home");
  };

  goProfile = () => {
    this.props.navigation.navigate("Profile");
  };

  backView = () => {
    this.props.navigation.goBack();
  };

  render() {
    // console.log(this.props.profile.data.data_credit[0].active);
    let haveCredit;
    if (this.props.profile.data.data_credit) {
      haveCredit = this.props.profile.data.data_credit[0].active;
    } else {
      haveCredit = false;
    }

    console.log(this.props.profile.data);
    console.log(this.state.haveCredit);

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader
            iconMenu={true}
            action={this.goProfile}
            outsession={this.outsession}
          />

          <View style={styles.ContainerTitle}>
            <Text style={styles.TextTitle}>
              ¡Hola {this.props.profile.data.name}! {"\n"} ¿Cómo te podemos
              ayudar?
            </Text>
          </View>
          <View style={styles.ContainerImage}>
            <TouchableHighlight
              onPress={() => {
                this.props.navigation.navigate("Investor");
              }}
              style={styles.imageTouchable}
            >
              <ImageBackground
                source={require("../sections/img/earning-money.jpg")}
                style={styles.image}
              >
                <View style={styles.shadow}>
                  <Text style={styles.text}>Quiero ser{"\n"}inversionista</Text>
                </View>
              </ImageBackground>
            </TouchableHighlight>

            {haveCredit && (
              <TouchableHighlight
                onPress={() => {
                  setTimeout(() => {
                    this.props.navigation.navigate("PaymentCredit");
                  }, 500);

                  this.props.fetchGetPaymentsCredit(
                    this.props.profile.data._id
                  );
                }}
                style={styles.imageTouchable}
              >
                <ImageBackground
                  source={require("../sections/img/scooter.png")}
                  style={styles.image}
                >
                  <View style={styles.shadow}>
                    <Text style={styles.text}>
                      Pagar cuotas {"\n"} de mi crédito
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableHighlight>
            )}

            {!haveCredit && (
              <TouchableHighlight
                onPress={() => {
                  this.props.navigation.navigate("Worked", {
                    priceCreditMotorcicle: "0",
                  });
                }}
                style={styles.imageTouchable}
              >
                <ImageBackground
                  source={require("../sections/img/scooter.png")}
                  style={styles.image}
                >
                  <View style={styles.shadow}>
                    <Text style={styles.text}>
                      Quiero un crédito {"\n"}para adquirir{"\n"} moto
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableHighlight>
            )}
          </View>
          <View style={styles.MyFooter}></View>
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
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderTopRightRadius: 55,
    overflow: "hidden",
    borderBottomLeftRadius: 20,
  },
  imageTouchable: {
    flex: 1,
    width: "85%",
    height: "40%",
    marginBottom: 35,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
  },
  ContainerImage: {
    flex: 3,
    alignItems: "center",
  },
  ContainerTitle: {
    flex: 0.7,
    justifyContent: "center",
  },
  shadow: {
    backgroundColor: "#000000ad",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextTitle: {
    textAlign: "center",
    fontSize: 21,
    fontWeight: "600",
    color: "#0000008f",
  },
  MyFooter: {
    flex: 0.3,
  },
});

function mapStateToProps(state) {
  return {
    profile: state.profileReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // updateUser: (name, document, phone) =>
    //   dispatch(updateUser(name, document, phone)),
    fetchDataProfile: (email) => dispatch(fetchDataProfile(email)),
    // fetchData: () => dispatch(fetchData()),
    fetchDataApp: () => dispatch(fetchDataApp()),
    fetchIsRappiTendero: (email) => dispatch(fetchIsRappiTendero(email)),
    fetchGetCreditRappiTendero: (email) =>
      dispatch(fetchGetCreditRappiTendero(email)),
    fetchGetPaymentsCredit: (id_user) =>
      dispatch(fetchGetPaymentsCredit(id_user)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectProfile);
