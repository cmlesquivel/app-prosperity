import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
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

  saludo = () => {
    this.props.navigation.navigate("Register");
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={"menu"} />
          <View style={styles.containerMessage}>
            <Text style={styles.message}>
              Te ayudamos a cumplir {"\n"} tus metas a la {"\n"}velocidad de
              Rappi{" "}
            </Text>
          </View>

          <View style={styles.containerImage}>
            <Image
              style={styles.images}
              source={require("../sections/img/progreso.png")}
            />
          </View>

          <View style={styles.containerButton}>
            <Text style={styles.textSesion}>Iniciar sesión</Text>

            <TouchableOpacity style={styles.buttonStyles} onPress={this.saludo}>
              <Image
                style={styles.logoFacebook}
                source={require("../sections/img/facebook.png")}
              />
              <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "white",
  },
  containerMessage: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500",
    color: "#000000b3",
    lineHeight: 30,
    fontFamily: "Poppins-Medium",
  },
  containerImage: {
    flex: 4,
    alignItems: "center",
  },
  images: {
    width: "60%",
    height: "100%",
    flex: 1,
    resizeMode: "stretch",
  },
  buttonStyles: {
    backgroundColor: "#5872a7",
    width: "50%",
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
    color: "#ffffff",
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
    justifyContent: "center",
    flex: 3,
  },
  logoFacebook: {
    width: 23,
    height: 23,
    marginRight: 10,
  },
});
