import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header.js";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

export default class Home extends React.Component {
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

  goRegister = () => {
    this.props.navigation.navigate("Register");
  };

  goLogin = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <ImageBackground
          source={require("../sections/img/screenWelcome.jpg")}
          style={styles.container}
        >
          <MyHeader iconMenu={true} sesion={false} />

          <View style={styles.containerMessage}>
            <Text style={styles.message}>
              Te ayudamos a cumplir {"\n"} tus metas a la {"\n"}velocidad de
              <Text style={styles.textRappi}> Rappi</Text>{" "}
            </Text>
          </View>
          <View style={styles.flexCenter}>
            <View style={styles.containerButton}>
              <TouchableOpacity
                style={styles.buttonStylesLogin}
                onPress={this.goLogin}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.buttonStylesLogin,
                  { backgroundColor: "#ffffff63" },
                ]}
                onPress={this.goRegister}
              >
                <Text style={styles.buttonText}>Registrarse</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerMessage: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "500",
    color: "#000000b3",
    lineHeight: 30,
    fontFamily: "Poppins-Medium",
    letterSpacing: 1.5,
  },
  buttonStylesLogin: {
    backgroundColor: "white",
    width: "40%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 7,
    paddingBottom: 7,
    marginTop: 20,
    flexDirection: "row",

    shadowColor: "rgba(0,0,0, .35)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 2, // Android
  },

  buttonText: {
    color: "#000000b8",
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  textSesion: {
    fontSize: 24,
    fontWeight: "500",
    color: "#000000b3",
    fontFamily: "Poppins-Medium",
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "90%",
    marginTop: 40,
  },
  logoFacebook: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
  flexCenter: {
    alignItems: "center",
    flex: 3,
    justifyContent: "center",
  },
  textRappi: {
    color: "#ff0000d9",
    fontFamily: "Poppins-Medium",
  },
});
