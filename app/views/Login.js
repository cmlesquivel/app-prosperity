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
import { fetchAuthenticate } from "../sections/storage/actions/actionsProfile";
import { connect } from "react-redux";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  login = () => {
    if (!this.state.email) {
      Alert.alert("Ingrese por favor su correo");
    } else if (!this.state.password) {
      Alert.alert("Ingrese por favor su contraseña");
    } else {
      this.props.fetchAuthenticate(this.state.email, this.state.password);
      setTimeout(() => {
        if (this.props.profile.data.email === this.state.email) {
          console.log("Logueado");
          this.props.navigation.navigate("SelectProfile");
        } else {
          Alert.alert("Revisa tu correo y/o contraseña");
        }
      }, 300);
    }
  };

  backView = () => {
    this.props.navigation.goBack();
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={false} action={this.backView} sesion={false} />

          <View style={styles.containerTitle}>
            <Text style={styles.title}>Inicio de sesión</Text>
          </View>
          <ScrollView>
            <View style={styles.containerMain}>
              <View style={styles.contentForm}>
                <View style={styles.containerInput}>
                  <Text style={styles.label}>Correo</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onChangeText={(email) => this.setState({ email })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Contraseña</Text>
                  <TextInput
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(password) => this.setState({ password })}
                  />
                </View>

                <View style={styles.containerButton}>
                  <MyButton action={this.login} message={"Ingresar"} />
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
    fetchAuthenticate: (email, password) =>
      dispatch(fetchAuthenticate(email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
