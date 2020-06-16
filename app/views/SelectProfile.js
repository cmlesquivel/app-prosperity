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
import { ceil } from "react-native-reanimated";

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
    this.props.navigation.navigate("Investor");
  };

  goWorked = () => {
    this.props.navigation.navigate("Worked");
  };

  backView = () => {
    this.props.navigation.goBack();
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>
          <MyHeader iconMenu={"back"} action={this.backView} />

          <View style={styles.ContainerTitle}>
            <Text style={styles.TextTitle}>Selecciona tu perfil</Text>
          </View>
          <View style={styles.ContainerImage}>
            <TouchableHighlight
              onPress={this.saludo}
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

            <TouchableHighlight
              onPress={this.goWorked}
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
    fontSize: 25,
    fontWeight: "600",
    color: "#0000008f",
  },
  MyFooter: {
    flex: 0.3,
  },
});
