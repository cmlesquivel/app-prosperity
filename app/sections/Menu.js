import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

export class Menu extends React.Component{
    onPress =()=> {
        Alert.alert('you tapped the button');
        console.log("OK Pressed");
    }

    render(){
        return(
            <View style={Styles.container}>
                <View style={Styles.buttonRow}>
                    <TouchableOpacity style={Styles.buttonStyles} onPress={this.onPress}>
                        <Text style={Styles.buttonText}>LESSONS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttonStyles} onPress={this.onPress}>
                        <Text style={Styles.buttonText}>REGISTER</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.buttonRow}>
                    <TouchableOpacity style={Styles.buttonStyles} onPress={this.onPress}>
                        <Text style={Styles.buttonText}>BLOG</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttonStyles} onPress={this.onPress}>
                        <Text style={Styles.buttonText}>CONTACT</Text>
                    </TouchableOpacity>
                </View>

                <View style={Styles.buttonRow}>
                    <TouchableOpacity style={Styles.buttonStyles} onPress={this.onPress}>
                        <Text style={Styles.buttonText}>QUIZ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.buttonStyles} onPress={this.onPress}>
                        <Text style={Styles.buttonText}>ABOUT</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const Styles= StyleSheet.create({
    container:{
        flex:6,
        backgroundColor:'#35605a'
    },
    buttonRow:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        borderColor:'#ffffff',
        borderBottomWidth:1
    },
    buttonStyles:{
        backgroundColor:'#35605a',
        width:'50%',
        height:'50%',
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:'#ffffff',
        fontSize:18
    }
})