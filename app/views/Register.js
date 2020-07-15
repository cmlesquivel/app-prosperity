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
import { connect } from "react-redux";
import { fetchNewUser } from "../sections/storage/actions/actionsProfile";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class Register extends React.Component {
  state = {
    fontsLoaded: false,
    name: "",
    document: "",
    phone: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  backView = () => {
    this.props.navigation.goBack();
  };

  createNewUser = () => {
    if (!this.state.name) {
      console.log("Ingrese por favor su nombre");
    } else if (!this.state.document) {
      console.log("Ingrese por favor su Cédula");
    } else if (!this.state.phone) {
      console.log("Ingrese por favor su teléfono");
    } else if (!this.state.email) {
      console.log("Ingrese por favor su correo");
    } else if (!this.state.password) {
      console.log("Ingrese por favor su contraseña");
    } else if (this.state.password != this.state.confirmpassword) {
      console.log("Las contraseñas no coinciden");
    } else {
      this.props.createNewUser(
        this.state.name,
        this.state.document,
        this.state.phone,
        this.state.email,
        this.state.password
      );
      setTimeout(() => {
        if (this.props.profile.data.email === this.state.email) {
          Alert.alert("Registrado!!");
          this.props.navigation.navigate("SelectProfile");
        } else {
          Alert.alert("Error al registrar el usuario");
        }
      }, 300);
    }
  };

  render() {
    console.log(this.props.profile.data);
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={false} action={this.backView} sesion={false} />

          <View style={styles.containerTitle}>
            <Text style={styles.title}>Registro</Text>
          </View>
          <ScrollView>
            <View style={styles.containerMain}>
              <View style={styles.contentForm}>
                <View style={styles.containerInput}>
                  <Text style={styles.label}>Nombre</Text>
                  <TextInput
                    style={styles.input}
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Cédula</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={this.state.document}
                    onChangeText={(document) => this.setState({ document })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Teléfono</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={this.state.phone}
                    onChangeText={(phone) => this.setState({ phone })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Correo</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Contraseña</Text>
                  <TextInput
                    secureTextEntry
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Repite contraseña</Text>
                  <TextInput
                    secureTextEntry
                    style={styles.input}
                    value={this.state.confirmpassword}
                    onChangeText={(confirmpassword) =>
                      this.setState({ confirmpassword })
                    }
                  />
                </View>

                <View style={styles.containerButton}>
                  <MyButton
                    action={() => {
                      this.createNewUser();
                      // this.props.navigation.navigate("SelectProfile");
                    }}
                    message={"Crear cuenta"}
                  />
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
    flex: 1,
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 30,
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
    createNewUser: (name, document, phone, email, password) =>
      dispatch(fetchNewUser(name, document, phone, email, password)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
