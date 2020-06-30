import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Container } from "native-base";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { MyHeader } from "../sections/Header";
import { CardMotorcicle } from "../sections/components/CardMotorcicle";
import { fetchData } from "../sections/storage/actions/actionsMotorcicle";
import { connect } from "react-redux";

let customFonts = {
  "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
};

class SelectMotorcicle extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    // this.props.fetchData();
  }

  saludo = () => {
    this.props.navigation.navigate("Worked");
  };

  backView = () => {
    this.props.navigation.goBack();
  };

  render() {
    if (this.state.fontsLoaded) {
      return (
        <Container>
          <MyHeader iconMenu={false} action={this.backView} />

          <View>
            <Text style={styles.textQuestion}>
              ¿Selecciona la moto a financiar?
            </Text>
          </View>

          <FlatList
            data={this.props.motorcicles.data.motorCicles}
            renderItem={({ item }) => (
              <CardMotorcicle
                referencia={item.referencia}
                motor={item.motor}
                precio={item.precio}
                marcaMotor={item.marcaMotor}
                cilindrada={item.cilindrada}
                picture={item.picture}
                action={() => {
                  this.props.navigation.navigate("Worked", {
                    priceCreditMotorcicle: item.precio,
                    idMotorcicle: item.id,
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </Container>
      );
    } else {
      return <AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  textQuestion: {
    fontSize: 20,
    color: "#00000094",
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    paddingBottom: 10,
    paddingTop: 20,
  },
});

function mapStateToProps(state) {
  return {
    motorcicles: state.motorcicleReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(fetchData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectMotorcicle);
