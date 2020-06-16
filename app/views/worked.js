import React from 'react';
import { StyleSheet, View, Text  } from 'react-native';
import { Container, ListItem, CheckBox, Body} from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { MyHeader } from '../sections/Header.js';
import { MyButton } from '../sections/components/myButton';


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

    goWorked= () => {
        this.props.navigation.navigate('Worked');
      }

      backView= () => {
        this.props.navigation.goBack();
      }



    render(){
        if (this.state.fontsLoaded) {
        return (
            <Container style={styles.container}>
            <MyHeader iconMenu={"back"} action={this.backView}/>
             
            <View style={styles.containerQuestion}>
                <Text style={styles.textQuestion}>¿Necesitas un prestamo para?</Text>
            </View> 

            <View style={styles.flexCenter}>
                <View style={styles.containerOption}>
                    <View style={styles.containerList}>
                        <ListItem style={styles.listItem}>
                            <CheckBox checked={false} color="green" onPress={this.saludo} />
                                <Body>
                                    <Text style={styles.textProduct}>Moto</Text>
                                </Body>                                
                        </ListItem>
                    </View>
                    <View style={styles.containerText}>
                        <View style={styles.rectangleGray}>
                            <Text style={styles.textSign}>$</Text>
                            <Text style = {styles.textValue}> ________</Text>
                        </View>
                    </View>
                </View>
            </View>
            

                <View style={styles.flexCenter}>
                    <View style={styles.containerOption}>
                        <View style={styles.containerList}>
                            <ListItem style={styles.listItem}>
                                <CheckBox checked={true} color="green" />
                                    <Body >
                                        <Text style={styles.textProduct}>Pase</Text>
                                    </Body>
                            </ListItem>
                        </View>
                        <View style={styles.containerText}>
                            <View style={styles.rectangleGray}>
                                <Text style={styles.textSign}>$</Text>
                                <Text style = {styles.textValue}>300.000</Text>
                            </View>
                        </View>
                    </View>
                </View>

            <View style={styles.flexCenter}>
                <View style={styles.containerOption}>
                    <View style={styles.containerList}>
                        <ListItem style={styles.listItem}>
                            <CheckBox checked={true} color="transparent" disabled />
                                <Body > 
                                    <Text style={styles.textProductTotal}>Total</Text>
                               </Body>
                        </ListItem>
                    </View>
                    <View style={styles.containerText}>
                        <View style={styles.rectangleGray}>
                            <Text style={styles.textSignTotal}>$</Text>
                            <Text style = {styles.textTotal}>300.000</Text>
                        </View>
                    </View>
                </View>
            </View>
                <View style={styles.containerButton}>
                    <MyButton message = "Solicitar Prestamo" action = {this.saludo}/>
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
        flex:1,
    }, 
    textQuestion:{
        fontSize:20,
        color:"#00000094", 
        textAlign:"center",
        fontFamily:"Poppins-Medium"
    },
    containerOption:{
        flexDirection:"row",
        width:"80%",
    },
    containerTouchable:{
        flex:0.6
    },
    containerText:{
        justifyContent:"center",
        flex:1,
    },
    listItem:{
        borderColor:"red",
        borderBottomWidth:0
    },
    containerQuestion:{
        flex:0.4,
        justifyContent:"center"
    },
    containerList:{
        justifyContent:"center",
        flex:1
    },
    textValue:{      
        textAlign:"center",
        flex:0.7
    },
    textTotal:{      
        textAlign:"center",
        flex:0.7,
        fontWeight:"600"
    },
    rectangleGray:{
        backgroundColor:"#00000036",
        paddingTop:7,
        paddingBottom:7,
        borderRadius:7,
        width:"80%",
        flexDirection:"row",
    },
    textProduct:{
        paddingLeft:20,
        fontFamily:"Poppins-Regular"
    },
    textProductTotal:{
        paddingLeft:20,
        fontWeight:"600"
    },
    textSign:{
        flex:0.3,
        textAlign:"right"
    },
    textSignTotal:{
        flex:0.3,
        textAlign:"right",
        fontWeight:"600"
    },
    containerButton:{
        alignItems:"center",
        flex:1
    },
    flexCenter:{
        alignItems:"center",
        flex:0.3,
        justifyContent:"center"
    }    
    

});

