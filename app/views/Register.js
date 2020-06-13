import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';
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
        this.props.navigation.navigate('SelectProfile');
    }



    render(){
        if (this.state.fontsLoaded) {
        return (
            <Container style={styles.container}>
            <MyHeader/>

            <View style={styles.containerTitle}>
                <Text style={styles.title}>Datos Personales</Text>
            </View>

            <View style={styles.contentForm}>
              <Form style={styles.form}>

                <Item floatingLabel regular style={styles.itemInput}>
                  <Label style={styles.label}>Nombre</Label>
                  <Input />
                </Item>

                <Item floatingLabel regular style={styles.itemInput}>
                  <Label style={styles.label}>Cédula</Label>
                  <Input />
                </Item>

                <Item floatingLabel regular style={styles.itemInput}>
                  <Label style={styles.label}>Teléfono</Label>
                  <Input />
                </Item>

                <Item floatingLabel regular style={styles.itemInput}>
                  <Label style={styles.label}>Correo</Label>
                  <Input />
                </Item>

                <MyButton action={this.saludo} message={"Enviar"}/>

              </Form>
            </View>
            <View style={styles.footer}>
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
        backgroundColor:"#00000005",
    },
    contentForm:{
        alignItems:"center",
        flex:6,        
        borderRadius:15,
        backgroundColor:"white",
        paddingTop:20,
        paddingBottom:50,
        width:"90%",
        margin:"auto"
    },
    form:{
        width:"80%"
    },
    title:{
        textAlign:"center",
        fontSize:25
    },
    containerTitle:{
        flex:2,
        justifyContent:"center"
    },    
    label:{
        paddingLeft:5,
        fontWeight:"600"
    },
    itemInput:{
        borderRadius:10        
    },
    footer:{
        flex:1.5
    }

});

