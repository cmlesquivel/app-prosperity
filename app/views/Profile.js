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
import { fetchUpdateUser } from "../sections/storage/actions/actionsProfile";

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
    // name: "1a",
    // document: 123,
    // phone: 22,
    // email: "juan@SpeechGrammarList.com",
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
    // this.props.fetchData(this.state.name);
  };

  updateProfile = () => {
    if (!this.state.name) {
      Alert.alert("Ingrese por favor su nombre");
    } else if (!this.state.document) {
      Alert.alert("Ingrese por favor su cédula");
    } else if (!this.state.phone) {
      Alert.alert("Ingrese por favor su Teléfono");
    } else {
      this.props.fetchUpdateUser(
        this.state.name,
        this.state.document,
        this.state.phone,
        this.props.profile.data._id,
        this.state.email
      );
      // console.log(this.state.email);

      this.props.navigation.navigate("SelectProfile");
    }
  };

  render() {
    console.log("****");
    console.log(this.props.profile);
    console.log("****");
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
    fetchUpdateUser: (name, document, phone, id_user, email) =>
      dispatch(fetchUpdateUser(name, document, phone, id_user, email)),
    fetchData: (id) => dispatch(fetchData(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
