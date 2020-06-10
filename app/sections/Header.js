import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Header, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';


let customFonts = {
    'Cursive-Sans': require('../../assets/fonts/CursiveSans.otf'),
  };

export class MyHeader extends React.Component {
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
        if (this.state.fontsLoaded) {
        return (
            <Header style={styles.headStyle}>
              <Left>
                <Button transparent>
                  <Icon style={styles.icono}  name='menu' />
                </Button>
              </Left>
              <Body style={styles.headBody}>
                <Image
                    style={styles.logoStyles}
                    source={require('./img/text-rappi.png')}
                    />
                <Text
                    style={styles.textLogo}>
                    prosperity
                </Text>                
              </Body>
              <Right />
            </Header>
        );
    }
    else {
        return <AppLoading />;
      }
    }   
}


const styles = StyleSheet.create({
    headtext:{
        textAlign:'right',
        color:'#ffffff',
        fontSize:20
    },
    headBody:{
        flexDirection:"row",
    },
    headStyle:{
        paddingTop:5,
        paddingBottom:5,
        backgroundColor: '#f8f9fa',
        flex:0.8,        
        borderBottomWidth:1,
        alignItems:"center",
        borderBottomColor:"#00000026"
    },
    logoStyles:{
        width:80,
        height:34
    },
    textLogo:{
        fontSize:23,
        color:'#D4AF37',
        fontFamily:"Cursive-Sans",
        letterSpacing:-2,
        textShadowColor: '#00000014',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1
    },
    icono:{
        color:"black"
    }    
});


