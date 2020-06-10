import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity,TouchableHighlight  } from 'react-native';
import { Container, ListItem, CheckBox,Content, Body, Text, Form, Item, Input, Label, Button } from 'native-base';
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
        this.props.navigation.navigate('SelectMotorcicle');
    }



    render(){
        if (this.state.fontsLoaded) {
        return (
            <Container style={styles.container}>
            <MyHeader/>
            
            <View style={styles.containerQuestion}>
                <Text style={styles.textQuestion}>¿Necesitas un prestamo para?</Text>
            </View> 

            {/* <TouchableHighlight onPress={this.saludo} style={styles.containerTouchable}> */}
                <View style={styles.containerOption}>
                    <View style={styles.containerList}>
                        <ListItem style={styles.listItem}>
                            <CheckBox checked={false} color="green" onPress={this.saludo} />
                                <Body >
                                    <Text>Moto</Text>
                                </Body>
                        </ListItem>
                    </View>
                    <View style={styles.containerText}>
                        <Text>$ ___________</Text>
                    </View>
                </View>
            {/* </TouchableHighlight>         */}

            
                <View style={styles.containerOption}>
                    <View style={styles.containerList}>
                        <ListItem style={styles.listItem}>
                            <CheckBox checked={true} color="green" />
                                <Body >
                                    <Text>Pase</Text>
                                </Body>
                        </ListItem>
                    </View>
                    <View style={styles.containerText}>
                        <Text style = {styles.textUnderline}>$ 300.0000</Text>
                    </View>
                </View>

                <View style={styles.containerOption}>
                    <View style={styles.containerList}>
                        <ListItem style={styles.listItem}>
                            <CheckBox checked={true} color="white" />
                                <Body > 
                                    <Text>Total</Text>
                               </Body>
                        </ListItem>
                    </View>
                    <View style={styles.containerText}>
                        <Text style = {styles.textUnderline}>$ 300.000</Text>
                    </View>
                </View>

                <View style = {styles.containerButton}>
                    <Button style = {styles.button} bordered onPress={this.saludo}>
                        <Text style = {styles.Textbutton}>Solicitar Prestamo</Text>
                    </Button>
                </View>

                {/* <View style = {styles.containerButton}>
                    <Button style = {styles.button} bordered onPress={this.saludo}>
                        <Text style = {styles.Textbutton}>Terminos y condiciones</Text>
                    </Button>
                </View> */}
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
    textQuestion:{
        fontSize:23,
        color:"#00000094", 
        paddingLeft:30,
        fontWeight:600
    },
    containerOption:{
        flexDirection:"row",
        // flex:0.6,
        // justifyContent:"center"
        marginLeft:"10%"
    },
    containerTouchable:{
        flex:0.6
    },
    containerText:{
        justifyContent:"center",
        flex:1
    },
    listItem:{
        border:"none",
        borderColor:"red",
        borderBottomWidth:0
    },
    containerQuestion:{
        flex:0.2,
        justifyContent:"center"
    },
    containerList:{
        justifyContent:"center",
        flex:1
    },
    Textbutton:{
        fontSize:20,
        color:"white",
        fontWeight:"500"
    },
    containerButton:{
        alignItems:"center",
        flex:1
    },
    button:{
        width:"80%",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#f85b51",
        borderStyle:"none",
        borderRadius:15
    },
    textUnderline:{
        textDecorationLine:"underline",
    }
    
    

});

