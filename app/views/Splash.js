import React from 'react';
import { StyleSheet, StatusBar, Text, View, Image } from 'react-native';
import * as Animatable from 'react-native-animatable'


export default class Splash extends React.Component {
    goToScreen(routeName){
        this.props.navigation.navigate(routeName);        
    }

    componentDidMount(){
        setTimeout(()=> {
            this.goToScreen('Home')
        },3000, this)
    }

    render(){
        return(
            <View style={styles.imageBackGroundStyle}>
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)'/>
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount ="infinite"
                    style ={{
                        width:100,
                        height:100,
                        margin:100
                    }}
                    source ={require('../sections/img/logo.png')}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    imageBackGroundStyle:{
        flex:1,
        flexDirection: "column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    }
})