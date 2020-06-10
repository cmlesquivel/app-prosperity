import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { MyHeader } from '../sections/Header.js';
import { ceil } from 'react-native-reanimated';


let customFonts = {
    'Poppins-Medium': require('../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),    
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

      saludo= () => {
        this.props.navigation.navigate('SelectProfile');
    }



    render(){
        if (this.state.fontsLoaded) {
        return (
            <Container style={styles.container}>
            <MyHeader/>
            <View style={styles.containerQuestion}>
                <Text style={styles.textQuestion}>Mis rendimientos</Text>
            </View>

            <View style={styles.containerDisplay}>
                <View style={styles.Display}>
                    <Text style={styles.textDisplay}>$ 215.268</Text>
                </View>

            </View>
            <View style={styles.containerQuestion}>
                <Text style={styles.textQuestion}>¿Que deseas hacer?</Text>
            </View>

            
                
                <View style={styles.containerOption}>

                    <View style={styles.containerImage}>
                        <Image
                            style={styles.imageOption}
                            source={require('../sections/img/anadir.svg')}
                        />
                    </View>
                    
                    <View style={styles.containerButton}>
                        <Button rounded bordered style={styles.button}>
                            <Text style={styles.textButton}>Invertir</Text>
                        </Button>
                    </View>

                </View>

                <View style={styles.containerOption}>

                    <View style={styles.containerImage}>
                        <Image
                            style={styles.imageOption}
                            source={require('../sections/img/retirar.svg')}
                        />
                    </View>

                    <View style={styles.containerButton}>
                        <Button rounded bordered style={styles.buttonWithdrawals }>
                            <Text style={styles.textButtonWithdrawals}>Retirar</Text>
                        </Button>
                    </View>

                </View>

                <View style={styles.containerOption}>

                    <View style={styles.containerImage}>
                        <Image
                            style={styles.imageOption}
                            source={require('../sections/img/mano.svg')}
                        />
                    </View>

                    <View style={styles.containerButton}>
                        <Button rounded bordered disabled style={styles.buttonDonate }>
                            <Text style={styles.textButtonDonate}>Donate</Text>
                        </Button>
                    </View>

                </View>
           

                     
          </Container>     
        )
        }
        else {
            return <AppLoading />;
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imageOption:{
        width:45,
        height:45
    },
    containerOption:{
        flexDirection:"row",
        flex:0.6,
        width:"80%",
        margin:"auto"
    },
    containerImage:{
        flex:1,
        alignItems:"flex-end"
    },
    containerGain:{
        flex:1
    },
    containerQuestion:{
        flex:0.5,
        justifyContent:"center"
    },
    containerButton:{
        flex:2,
        alignItems:"center"        
    },
    button:{
        width:"60%",
        justifyContent:"center",
        borderColor:"#4296f3"
    },
    textButton:{
        color:"#4296f3",
        fontSize:20,
        fontWeight:500
    },
    buttonWithdrawals:{
        borderColor:"#78aa17",
        width:"60%",
        justifyContent:"center",
    },
    textButtonWithdrawals:{
        color:"#78aa17",
        fontSize:20, 
        fontWeight:500,
    },
    buttonDonate:{
        borderColor:"#e5574f",
        borderColor:"gray",
        width:"60%",
        justifyContent:"center",
    },
    textButtonDonate:{
        color:"#e5574f",
        color:"gray",
        fontSize:20, 
        fontWeight:500,
    },
    textQuestion:{
        fontSize:20,
        color:"#00000094", 
        paddingLeft:30,
        fontWeight:500
    },
    containerDisplay:{
        backgroundColor:"#8080801c",
        width:"80%",
        margin:"auto",
        height:100,
        justifyContent:"center",
        borderRadius:20
    },
    textDisplay:{
        fontSize:42,
        textAlign:"right",
        paddingRight:30,
        fontWeight:600,
        color:"#000000cf"
    }
    
    

});

