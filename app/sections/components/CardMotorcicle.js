import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity,Text  } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import PropTypes from 'prop-types'; //validar el tipo de dato de los parametros pasados



let customFonts = {
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),    
  };

export class CardMotorcicle extends React.Component {

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
        const { referencia, motor, precio, marcaMotor, cilindrada, picture, action } = this.props;
       
        if (this.state.fontsLoaded) {
        return (
            
            <View style={styles.containerCard}>
                <View style={styles.card}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.textTitle}>{referencia}</Text>
                    </View>
                   
                        <View style={styles.containerMotorcicle}>
                            <Image
                                style = {styles.imageMotorcicle}
                                source = {{uri:picture}}                        
                            />
                            <View style={styles.featuresMotorcicle}>

                                <Text style={styles.textFeature}>
                                    Motor :
                                    <Text style={styles.textNoBold}> {motor}</Text>
                                </Text>

                                <Text style={styles.textFeature}>
                                    Cilindrada :
                                    <Text style={styles.textNoBold}> {cilindrada}</Text>
                                </Text>

                                <Text style={styles.textFeature}>
                                    Marca del Motor :
                                    <Text style={styles.textNoBold}> {marcaMotor}</Text>
                                </Text>

                                <Text style={styles.textFeature}>
                                    Precio :
                                    <Text style={styles.Textvalue}> {precio}</Text>
                                </Text>                                
                            </View>

                            <TouchableOpacity onPress={action}>
                                <View style={styles.button}>
                                    <Text 
                                        style={styles.textButton}>Deseo financiar esta moto!
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                </View>
            </View>
            

                       
        )
        }
        else {
            return <AppLoading />;
        }
    }
}

// validar el tipo de parametro -- tipado de informacion que recibimos
CardMotorcicle.propTypes = {
    action: PropTypes.func,
    referencia: PropTypes.string.isRequired,
    motor: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
    marcaMotor: PropTypes.string.isRequired,
    cilindrada: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
};


const styles = StyleSheet.create({

    imageMotorcicle:{
        width:"100%",
        height:168,
        resizeMode:'stretch',
    },   
    featuresMotorcicle:{
        borderRightColor:"gray",
        borderRightWidth:1,
        borderLeftColor:"gray",
        borderLeftWidth:1,
        paddingLeft:20,
        paddingTop:10,
        paddingBottom:15
    },
    card:{
        width:"90%"
    },
    containerCard:{
        alignItems:"center",
        marginTop:10,
        marginBottom:25
    },
    textNoBold:{
        fontWeight:"300"
    },
    Textvalue:{
        fontSize:16
    },
    textTitle:{
       fontSize:16,
       fontFamily:"Poppins-Medium",
       textAlign:"center",
       paddingTop:7,
       paddingBottom:7
    },
    containerTitle:{
        backgroundColor:"#80808040",
        justifyContent:"center",
        alignContent:"center",
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    textFeature:{
        fontSize:15, 
        fontFamily:"Poppins-Regular",
        fontWeight:"600"
    },
    textButton:{
        fontSize:17,
        fontFamily:"Poppins-Medium",
        textAlign:"center",
        color:"white"
    },
    button:{
        justifyContent:"center",
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
        backgroundColor:"#f85b51",
        borderWidth:0,
        paddingTop:6,
        paddingBottom:6
    }


});

