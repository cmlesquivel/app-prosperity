import React, { useState } from 'react';
import { StyleSheet, View, Text  } from 'react-native';
import { Button } from 'native-base';
import { AppLoading } from 'expo'; // importar una fuente
import * as Font from 'expo-font'; // importar una fuente
import PropTypes from 'prop-types'; //validar el tipo de dato de los parametros pasados al botton


let customFonts = {
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
  };


export class MyButton extends React.Component {    
    
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


    render(){
        const {message, action}= this.props;

        if (this.state.fontsLoaded) {
        return (
            <View style = {styles.containerButton}>
                <Button style = {styles.button} onPress={action} >
                        <Text style = {styles.Textbutton}>{message}</Text>
                </Button>
            </View>
            )
        }
        else {
            return <AppLoading />;
        }    
    }
}

// validar el tipo de parametro -- tipado de informacion que recibimos
MyButton.propTypes = {
    message: PropTypes.string.isRequired,
    action: PropTypes.func,
};

// valores por defecto de los parametros no obligatorios
MyButton.defaultProps = {
    action: () => null,
};


const styles = StyleSheet.create({
    Textbutton:{
        fontSize:18,
        color:"white",
        fontFamily:"Poppins-Regular"
    },
    containerButton:{
        alignItems:"center",
        flex:1
    },
    button:{
        width:"60%",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#f85b51",
        borderRadius:15,
        borderWidth:0
    }
})

