import React from 'react';
import { StyleSheet, View,TextInput, Text } from 'react-native';
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

      backView= () => {
        this.props.navigation.goBack();
      }



    render(){
        if (this.state.fontsLoaded) {
        return (
            <View style={styles.container}>
            <MyHeader iconMenu={"back"} action={this.backView}/>

            <View style={styles.containerTitle}>
                <Text style={styles.title}>Datos Personales</Text>
            </View>

            <View style={styles.containerMain}>
                <View style={styles.contentForm}>                  

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput style = {styles.input} />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Cédula</Text>
                    <TextInput style = {styles.input} />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Teléfono</Text>
                    <TextInput style = {styles.input} />
                </View>

                <View style={styles.containerInput}>
                    <Text style={styles.label}>Correo</Text>
                    <TextInput style = {styles.input} />
                </View>

                <View style={styles.containerButton}>
                    <MyButton action={this.saludo} message={"Guardar"}/>
                </View>
                
                </View>
            </View>
            <View style={styles.footer}>
            </View>         
          </View>     
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
    containerMain:{
      alignItems:"center",
      flex:6,
    },
    contentForm:{
        alignItems:"center",
        borderRadius:15,
        backgroundColor:"white",
        paddingTop:20,
        width:"90%"
    },
    title:{
        textAlign:"center",
        fontSize:25
    },
    containerTitle:{
        flex:1,
        justifyContent:"center"
    },
    containerInput:{
      padding: 10,
      width:"90%",
    },
    label:{
      paddingLeft: 10,
      paddingBottom:5,
      color:"#000000c9",
      fontFamily:"Poppins-Medium"
    },
    input:{
      height: 40,
      paddingLeft:10,
      fontSize:17,
      borderWidth:1,
      borderColor:"#00000054",
      borderRadius:10,
      color:"gray"
    },
    containerButton:{
      width:"100%",
      justifyContent:"center",
      flexDirection:"row"
    }    
   
});

