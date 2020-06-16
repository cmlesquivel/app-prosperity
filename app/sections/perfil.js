import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
let name = "Pepito";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  toggleUser = () => {
    this.setState((previousState) => {
      return { isLoggedIn: !previousState.isLoggedIn };
    });
  };

  render() {
    let display = this.state.isLoggedIn
      ? "Bienvenido " + name
      : this.props.message;
    return (
      <View style={styles.headStyle}>
        <Image
          style={styles.logoStyles}
          source={require("./img/text-rappi.png")}
        />
        <Text style={styles.textLogo}>Prosperity</Text>
        {/* <View style={styles.containertext}>
                    <Text onPress={this.toggleUser}
                          style={styles.headtext}> {display}
                    </Text>                   
                </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headtext: {
    textAlign: "right",
    color: "#ffffff",
    fontSize: 20,
    // flex:1
  },
  headStyle: {
    paddingTop: 10,
    paddingRight: 10,
    backgroundColor: "#f8f9fa",
    flex: 0.6,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#00000026",
    alignItems: "center",
  },
  logoStyles: {
    width: 80,
    height: 34,
    marginLeft: 30,
  },
  textLogo: {
    fontSize: 23,
    color: "#D4AF37",
    fontStyle: "oblique",
    fontWeight: "bold",
  },
});
