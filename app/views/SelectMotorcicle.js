import React from 'react';
import { StyleSheet, View,  Text, FlatList  } from 'react-native';
import { Container} from "native-base";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { MyHeader } from '../sections/Header';
import { CardMotorcicle } from '../sections/components/CardMotorcicle';


let customFonts = {
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),    
  };

export default class SelectMotorcicle extends React.Component {

    state = {
        fontsLoaded: false,
        motorCicles:[]
      };
    
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }

      componentDidMount() {
        this._loadFontsAsync();
        const motorCicles = require('../../assets/jsonFile/motorcicles.json').motorCicles;
        this.setState({motorCicles});
      }

      saludo= () => {
        this.props.navigation.navigate('Worked');       
    }

    backView= () => {
        this.props.navigation.goBack();
      }



    render(){

        if (this.state.fontsLoaded) {
        return (

            <Container>
                <MyHeader iconMenu={"back"} action={this.backView}/>
                
                <View>
                    <Text style={styles.textQuestion}>¿Selecciona la moto a financiar?</Text>
                </View>

                <FlatList
                    data={this.state.motorCicles}
                    renderItem={({ item }) => 
                        <CardMotorcicle referencia={item.referencia} motor={item.motor} precio={item.precio} marcaMotor={item.marcaMotor} cilindrada={item.cilindrada} picture={item.picture} action={this.saludo}  />}
                    keyExtractor={item=>item.id}
                />


                                  
            </Container>             
        )
        }
        else {
            return <AppLoading />;
        }
    }
}

const styles = StyleSheet.create({
   
    textQuestion:{
        fontSize:20,
        color:"#00000094", 
        textAlign:"center",
        fontFamily:"Poppins-Medium",
        paddingBottom:10,
        paddingTop:20
    }   
    
});

