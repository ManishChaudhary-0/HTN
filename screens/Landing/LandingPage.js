import React from 'react';
import { ScrollView } from 'react-native';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar, Card, Paragraph, IconButton, Title, TouchableRipple } from 'react-native-paper';
import { TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons'; 


const LandingPage = props => {

    return (
        <View style={{backgroundColor:'#ffffff', flex:1}}>
            <SafeAreaView style={{marginTop: 50, marginRight: 0, marginLeft: 260}}>
                <IconButton 
                    icon = "account-circle"
                    
                    color = '#71000a'
                    size={70}
                    style={{}}
                    onPress={() => {props.navigation.navigate({routeName: 'Profile'});}}
                />
            </SafeAreaView>

            <View style={{flexDirection:'row', alignContent:'center', padding:20, marginTop:40 }}>
                <Card style={{height:95, width:170, backfaceVisibility:'hidden', backgroundColor:'#2979ff'}}>
                    {/* // Stock Image
                    <Card.Cover source={require('/Users/manishchaudhary/HTN_APPLICATION/Images/AC2.png')} style={{resizeMode:'center', height:95}}/> */}
                    
                    <Card.Content alignItems='center'>
                        <Title style={{fontSize:20}}>Blood Pressure</Title>
                    </Card.Content> 
                </Card>

                <Card style={{width:170, backfaceVisibility:'hidden', backgroundColor:'#2979ff', marginLeft:10}}>
                    {/* // Stock Image
                    <Card.Cover source={require('/Users/manishchaudhary/HTN_APPLICATION/Images/AC2.png')} style={{resizeMode:'center', height:95}}/> */}

                    <Card.Content alignItems='center'>
                        <Title style={{fontSize:20}}>Weight</Title>
                    </Card.Content>
                </Card>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', alignContent:'center', padding:20, marginTop:-30 }}>
                <Card style={{width:170, backfaceVisibility:'hidden', backgroundColor:'#2979ff'}}>
                     {/* // Stock Image
                    <Card.Cover source={require('/Users/manishchaudhary/HTN_APPLICATION/Images/AC2.png')} style={{resizeMode:'center', height:95}}/> */}
                   
                    <Card.Content alignItems='center'>
                        <Title style={{fontSize:20}}>DASH Diet Percent</Title>
                    </Card.Content>
                </Card>
                <Card style={{width:170, backfaceVisibility:'hidden', backgroundColor:'#2979ff', marginLeft:10}}>
                     {/* // Stock Image
                    <Card.Cover source={require('/Users/manishchaudhary/HTN_APPLICATION/Images/AC2.png')} style={{resizeMode:'center', height:95}}/> */}

                    <Card.Content alignItems='center'>
                      <Title style={{fontSize:20}}>Activity Minutes</Title>
                    </Card.Content>
                </Card>
            </View>

            <View style={{alignItems:'center', flec: 1}}>
                <View style={{flexDirection: 'row'}}>
                <IconButton 
                    icon = {require('../../Images/chatbot.png')}  
                    color = '#71000a'
                    size={70}
                    style={{}}
                    onPress={() => {props.navigation.navigate({routeName: 'ChatBot'});}}

                >
                </IconButton>                  

                <IconButton 
                    icon = "heart"
                    color = '#71000a'
                    size={70}
                    style={{marginLeft:65}}
                    onPress={() => {props.navigation.navigate({routeName: 'HealthData'});}}
                />
                </View>

                <View style={{flexDirection: 'row'}}>
                <IconButton 
                    icon = {require('../../Images/activity0.png')}  
                    color = '#71000a'
                    size={70}
                    style={{}}
                    onPress={() => {props.navigation.navigate({routeName: 'ActivityTracker'});}}

                >
                    
                </IconButton>                

                <IconButton 
                    icon = {require('../../Images/groceries.png')}  
                    color = '#71000a'
                    size={70}
                    style={{marginLeft:65}}
                    onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                />
                </View>
                
                
            </View>

        </View>
        
    )
};

const styles = StyleSheet.create({  
    appBar: {
        backgroundColor: '#ffffff'
    },
    infoText: {
        paddingTop: 30,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top: 55,
        height: 40,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },

});



export default LandingPage;