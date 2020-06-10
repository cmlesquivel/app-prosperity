import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity,TouchableHighlight,ScrollView  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Button} from "native-base";
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
        this.props.navigation.navigate('Worked');
    }



    render(){
        if (this.state.fontsLoaded) {
        return (
            
            <Container style={styles.container}>
            <MyHeader/>
            
            <View style={styles.containerQuestion}>
                <Text style={styles.textQuestion}>¿Seleccciona la moto a financiar?</Text>
            </View> 

            
            <View style={styles.containerCard}>
                <Card style={styles.card}>
                <CardItem header bordered>
                <Text>Suzuki Gixxer Modelo 2021</Text>
                </CardItem>
                <CardItem bordered>
                <Body style={styles.containerMotorcicle}>
                    <Image
                            style={styles.imageMotorcicle}
                            source={require('../sections/img/moto1.png')}
                        />
                        <View style={styles.featuresMotorcicle}>
                            <Text>Motor 4 tiempos</Text>
                            <Text>Cilindadra 199 cc</Text>
                            <Text>Marca del motor</Text>
                            <Text>Año 2020</Text>
                        </View>
                </Body>
                </CardItem>
                <CardItem  style={styles.footerCard}>
                    <Button bordered onPress={this.saludo}>
                        <Text>Seleccionar</Text>
                    </Button>
                </CardItem>
            </Card>
            </View>

            <View style={styles.containerCard}>
                <Card style={styles.card}>
                <CardItem header bordered>
                <Text>Ktm 200 Duke 2020</Text>
                </CardItem>
                <CardItem bordered>
                <Body style={styles.containerMotorcicle}>
                    <Image
                            style={styles.imageMotorcicle}
                            source={require('../sections/img/moto2.png')}
                        />
                        <View style={styles.featuresMotorcicle}>
                            <Text>Motor 4 tiempos</Text>
                            <Text>Cilindadra 199 cc</Text>
                            <Text>Marca del motor</Text>
                            <Text>Año 2020</Text>
                        </View>
                </Body>
                </CardItem>
                <CardItem  style={styles.footerCard}>
                    <Button bordered onPress={this.saludo}>
                        <Text>Seleccionar</Text>
                    </Button>
                </CardItem>
            </Card>
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
    imageMotorcicle:{
        // width:80,
        // height:120
        flex:1,
        width:undefined,
        height:"100%"
    },
    containerMotorcicle:{
        flexDirection:"row",
        flex:1
    },
    featuresMotorcicle:{
        flex:1,
        paddingLeft:10
    },
    textQuestion:{
        fontSize:23,
        color:"#00000094", 
        paddingLeft:30,
        fontWeight:600,
    },
    containerQuestion:{
        flex:0.2,
        justifyContent:"center",
        flex:0.6
    },
    card:{
        width:"90%"
    },
    containerCard:{
        alignItems:"center"
    },
    footerCard:{
        justifyContent:"center"
    }

});

