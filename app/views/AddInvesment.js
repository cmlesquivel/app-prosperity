import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";
import { MyButton } from "../sections/components/myButton";
import { fetchAddInvesment } from "../sections/storage/actions/actionsProfile";
import { connect } from "react-redux";
import RNPickerSelect from "react-native-picker-select";
import { splitString } from "../sections/functions";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class AddInvesment extends React.Component {
  state = {
    amount: "",
    plazo: "",
    fontsLoaded: false,
    id_user: this.props.profile.data._id,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  doInvesment = () => {
    if (!this.state.amount) {
      Alert.alert("Ingrese por favor su inversión");
    } else if (this.state.amount < 50000 || this.state.amount > 1000000) {
      Alert.alert("Solo puedes hacer inversiones entre $50.000 y $1.000.0000");
    } else if (!this.state.plazo) {
      Alert.alert("Seleccione por favor el plazo");
    } else {
      // console.log(typeof this.state.plazo);
      this.props.fetchAddInvesment(
        // this.props.profile.data._id,
        this.state.id_user,
        parseInt(this.state.amount),
        parseInt(this.state.plazo),
        parseFloat(this.state.profitability),
        true
      );

      this.setState({ amount: "", plazo: "" });
    }
  };

  backView = () => {
    this.props.navigation.goBack();
  };

  render() {
    console.log(this.props.profile);
    const placeholder = {
      label: "Selecciona la mejor rentabilidad",
      value: "",
      color: "gray",
    };

    const plazos = [
      {
        label: "30 días - 0.5% E.A.",
        value: "30-0.005",
      },
      {
        label: "60 días - 1% E.A.",
        value: "30-0.01",
      },
      {
        label: "90 días - 1.5% E.A.",
        value: "90-0.015",
      },
      {
        label: "120 días - 2% E.A.",
        value: "120-0.02",
      },
      {
        label: "150 días - 2.5% E.A.",
        value: "150-0.025",
      },
      {
        label: "360 días - 5% E.A.",
        value: "360-0.05",
      },
    ];

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={false} action={this.backView} sesion={false} />

          <View style={styles.containerTitle}>
            <Text style={styles.title}>Realizar tu inversión</Text>
          </View>
          <ScrollView>
            <View style={styles.containerMain}>
              <View style={styles.contentForm}>
                <View style={styles.containerInput}>
                  <Text style={styles.label}>Monto a invertir</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={this.state.amount}
                    onChangeText={(amount) => this.setState({ amount })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Plazo en días</Text>
                  <RNPickerSelect
                    placeholder={placeholder}
                    items={plazos}
                    onValueChange={(value) => {
                      let plazoProfita = splitString(value);
                      this.setState({
                        plazo: plazoProfita[0],
                        profitability: plazoProfita[1],
                      });
                    }}
                  />
                </View>

                <View style={styles.containerButton}>
                  <MyButton action={this.doInvesment} message={"Invertir"} />
                </View>
              </View>
            </View>

            <View style={styles.footer}></View>
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
    flex: 1,
    backgroundColor: "#00000005",
  },
  containerMain: {
    alignItems: "center",
    flex: 6,
  },
  contentForm: {
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    paddingTop: 20,
    width: "90%",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    color: "#0000009c",
  },
  containerTitle: {
    // flex: 1,
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 40,
  },
  containerInput: {
    padding: 10,
    width: "90%",
  },
  label: {
    paddingLeft: 10,
    paddingBottom: 5,
    color: "#000000c9",
    fontFamily: "Poppins-Medium",
  },
  input: {
    height: 40,
    paddingLeft: 10,
    fontSize: 17,
    borderWidth: 1,
    borderColor: "#00000054",
    borderRadius: 10,
    color: "gray",
  },
  containerButton: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
});

function mapStateToProps(state) {
  return {
    profile: state.profileReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // fetchAuthenticate: (email, password) =>
    //   dispatch(fetchAuthenticate(email, password)),
    fetchAddInvesment: (id_user, amount, numberDays, profitability, active) =>
      dispatch(
        fetchAddInvesment(id_user, amount, numberDays, profitability, active)
      ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddInvesment);
