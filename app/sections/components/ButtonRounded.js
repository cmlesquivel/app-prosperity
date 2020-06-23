import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AppLoading } from "expo"; // importar una fuente
import * as Font from "expo-font"; // importar una fuente
import PropTypes from "prop-types"; //validar el tipo de dato de los parametros pasados al botton

let customFonts = {
  "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
};

export class ButtonRounded extends React.Component {
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

  render() {
    const { message, action, color } = this.props;

    if (this.state.fontsLoaded) {
      return (
        <TouchableOpacity onPress={action} style={styles.containerButton}>
          <View style={[styles.button, { borderColor: color }]}>
            <Text style={[styles.Textbutton, { color: color }]}>{message}</Text>
          </View>
        </TouchableOpacity>
      );
    } else {
      return <AppLoading />;
    }
  }
}

// validar el tipo de parametro -- tipado de informacion que recibimos
ButtonRounded.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
  action: PropTypes.func,
};

// valores por defecto de los parametros no obligatorios
ButtonRounded.defaultProps = {
  action: () => null,
};

const styles = StyleSheet.create({
  Textbutton: {
    fontSize: 16,
    color: "#4296f3",
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  button: {
    width: "80%",
    borderRadius: 50,
    borderWidth: 1,
    paddingTop: 8,
    paddingBottom: 8,
    borderColor: "#4296f3",
  },
  containerButton: {
    width: "100%",
    alignItems: "center",
  },
});
