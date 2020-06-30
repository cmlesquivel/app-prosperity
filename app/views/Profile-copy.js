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
import { fetchData, updateUser } from "../sections/storage/actions/actions";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class Profile extends React.Component {
  state = {
    fontsLoaded: false,
    name: this.props.profile.data.name,
    document: this.props.profile.data.document,
    phone: this.props.profile.data.phone,
    email: this.props.profile.data.email,
    oldPasswordSistem: this.props.profile.data.password,
    oldPasswordUser: "",
    newPassword: "",
    confirmPassword: "",
    // language: "",
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    // this.props.fetchData();
  }

  backView = () => {
    this.props.navigation.goBack();
  };

  updateProfile = () => {
    if (!this.state.name) {
      console.log("Ingrese por favor su nombre");
    } else if (!this.state.document) {
      console.log("Ingrese por favor su cédula");
    } else if (!this.state.phone) {
      console.log("Ingrese por favor su Teléfono");
    } else if (
      this.state.oldPasswordUser &&
      this.state.oldPasswordSistem != this.state.oldPasswordUser
    ) {
      console.log("Contraseña antigua incorrecta");
    } else if (
      this.state.newPassword &&
      this.state.newPassword != this.state.confirmPassword
    ) {
      console.log("La nueva contraseña no coincide");
    } else {
      console.log("correcto");
      this.props.updateUser(
        this.state.name,
        this.state.document,
        this.state.phone,
        this.state.newPassword
      );
    }
  };

  render() {
    console.log(this.props.profile.data);

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={false} action={this.backView} sesion={false} />

          <View style={styles.containerTitle}>
            <Text style={styles.title}>Datos personales</Text>
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
                    value={`${this.state.document}`}
                    onChangeText={(document) => this.setState({ document })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Teléfono</Text>
                  <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={`${this.state.phone}`}
                    onChangeText={(phone) => this.setState({ phone })}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Correo</Text>
                  <TextInput
                    style={styles.input}
                    editable={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={this.state.email}
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Antigua contraseña</Text>
                  <TextInput
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(oldPasswordUser) =>
                      this.setState({ oldPasswordUser })
                    }
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Nueva contraseña</Text>
                  <TextInput
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(newPassword) =>
                      this.setState({ newPassword })
                    }
                  />
                </View>

                <View style={styles.containerInput}>
                  <Text style={styles.label}>Repite contraseña</Text>
                  <TextInput
                    secureTextEntry
                    style={styles.input}
                    onChangeText={(confirmPassword) =>
                      this.setState({ confirmPassword })
                    }
                  />
                </View>

                <View style={styles.containerButton}>
                  <MyButton
                    action={this.updateProfile}
                    message={"Guardar Cambios"}
                  />
                </View>
              </View>
            </View>
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
    updateUser: (name, document, phone, newPassword) =>
      dispatch(updateUser(name, document, phone, newPassword)),
    fetchData: () => dispatch(fetchData()),
    // changeLanguage: (language) => dispatch(changeLanguage(language)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
