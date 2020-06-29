import React, { useState } from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import PropTypes from "prop-types"; //validar el tipo de dato de los parametros pasados al botton

let customFonts = {
  "Cursive-Sans": require("../../assets/fonts/CursiveSans.otf"),
};

export class MyHeader extends React.Component {
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

  outsession = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    var { action, iconMenu, sesion, outsession } = this.props;

    var icon = iconMenu
      ? require("./img/menu_gray.png")
      : require("./img/back.png");

    var iconSesion = sesion
      ? require("./img/sesion-1.png")
      : require("./img/facebook.png");

    if (this.state.fontsLoaded) {
      return (
        <View style={styles.headStyle}>
          <TouchableOpacity onPress={action} style={styles.containerButton}>
            <Image style={styles.imageMenu} source={icon} />
          </TouchableOpacity>

          <View style={styles.headBody}>
            <Image
              style={styles.logoStyles}
              source={require("./img/text-rappi.png")}
            />
            <Text style={styles.textLogo}>prosperity</Text>
          </View>
          <TouchableOpacity onPress={outsession} style={styles.containerSesion}>
            <Image style={styles.logoSesion} source={iconSesion} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return <AppLoading />;
    }
  }
}

MyHeader.propTypes = {
  iconMenu: PropTypes.bool.isRequired,
  action: PropTypes.func,
  sesion: PropTypes.bool,
};

// valores por defecto de los parametros no obligatorios
MyHeader.defaultProps = {
  action: () => null,
  sesion: true,
};

const styles = StyleSheet.create({
  headtext: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
  },
  headBody: {
    flexDirection: "row",
  },
  headStyle: {
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#f8f9fa",
    borderBottomWidth: 1,
    alignItems: "center",
    borderBottomColor: "#00000026",
    flexDirection: "row",
  },
  logoStyles: {
    width: 80,
    height: 34,
    marginLeft: 10,
  },
  logoSesion: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  textLogo: {
    fontSize: 23,
    color: "#D4AF37",
    fontFamily: "Cursive-Sans",
    letterSpacing: -2,
    textShadowColor: "#00000014",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginRight: 10,
  },
  icono: {
    color: "#000000ab",
  },
  containerButton: {
    width: 50,
    paddingLeft: 20,
    paddingRight: 10,
  },
  containerSesion: {
    width: 50,
    paddingLeft: 20,
    marginLeft: 30,
    // paddingRight: 10,
  },
  imageMenu: {
    width: 25,
    height: 24,
  },
});
