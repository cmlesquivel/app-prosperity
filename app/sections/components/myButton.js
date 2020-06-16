import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity  } from 'react-native';
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
           
                <TouchableOpacity onPress={action} style = {styles.containerButton}>
                    <View style = {styles.button} >
                            <Text style = {styles.Textbutton}>{message}</Text>
                    </View>
                </TouchableOpacity>
           
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
        fontFamily:"Poppins-Regular",
        textAlign:"center"
    },
    button:{
        width:"100%",
        marginTop:20,
        backgroundColor:"#f85b51",
        borderRadius:10,
        borderWidth:0,
        marginBottom:20,
        paddingTop:8,
        paddingBottom:8
    },
    containerButton:{
        width:"60%",
        alignItems:"center",
        borderWidth:0
    }
})

