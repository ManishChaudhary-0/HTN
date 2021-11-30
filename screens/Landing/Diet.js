import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker, TextInput } from 'react-native';
import { Appbar, Icon, IconButton } from 'react-native-paper';

import DatePicker from 'react-native-date-picker'
import NumberPlease from "react-native-number-please";
import { TouchableOpacity } from 'react-native';

//import { Icon } from 'react-native-elements'
const Diet = props => {

    return(
        
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Landing'});}} />
                    <Appbar.Content title="Diet" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
                        
          
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'InputMeal'});}}>
                    <Text style={styles.buttonText}>
                        Input Meal
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.press2} onPress={() => {props.navigation.navigate({routeName: 'DietData'});}}>
                    <Text style={styles.buttonText}>
                        Review Diet
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{flexDirection:'column', marginTop:200}}>
                <View style={{flexDirection: 'row'}}>
                    <IconButton 
                        icon = {require('../../Images/grains1.png')}  
                        color = '#71000a'
                        size={70}
                        style={{marginLeft:80}}
                        onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                    />
                    <IconButton 
                        icon = {require('../../Images/fish.png')}  
                        color = '#71000a'
                        size={70}
                        style={{marginLeft:10}}
                        onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <IconButton 
                        icon = {require('../../Images/eggplant.png')}  
                        color = '#71000a'
                        size={70}
                        style={{marginLeft:30}}
                        onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                    />
                    <IconButton 
                        icon = {require('../../Images/milk.png')}  
                        color = '#71000a'
                        size={70}
                        style={{marginLeft:0}}
                        onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                    />
                      <IconButton 
                        icon = {require('../../Images/fruits.png')}  
                        color = '#71000a'
                        size={70}
                        style={{marginLeft:0}}
                        onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <IconButton 
                        icon = {require('../../Images/burger.png')}  
                        color = '#71000a'
                        size={70}
                        style={{marginLeft:30}}
                        onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                    />
                    <IconButton 
                        icon = {require('../../Images/cake.png')}  
                        color = '#71000a'
                        size={70}
                        style={{marginLeft:0}}
                        onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                    />
                      <IconButton 
                        icon = {require('../../Images/peanut.png')}  
                        color = '#71000a'
                        size={70}
                        style={{marginLeft:0}}
                        onPress={() => {props.navigation.navigate({routeName: 'Diet'});}}

                    />


                    
                </View>





            </View>





        </View>
        
    )
    
}

const styles = StyleSheet.create({
    ILV2: {
        borderColor: '#000000',
        height: 60,
        padding: 20,
        marginTop: 60,
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
    },
    inputLabel: {
        borderColor: '#000000',
        height: 60,
        padding: 20,
        marginRight:20,
        marginLeft:20,
        marginTop: 90,
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
    },
    VGrid: {
        flexDirection: 'column',
        flex: 1,
        padding: 30,
        paddingTop: 10
    },
    infoText: {
        paddingTop: 30,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top: 100,
        height: 40,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    press2: {
        backgroundColor: '#2979ff',
        top: 100,
        height: 40,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop:30

    },
    dateInput: {
        backgroundColor: '#ffffff',
        top: 60,
        height: 50,
        width: '100%',
        borderColor: '#000000',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    dayInput: {
        //        backgroundColor: '#ffffff',
        backgroundColor: '#ffffff',
        top: 60,
        height: 60,
        width: 80,
        borderColor: '#000000',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        //padding:15

    },
    pressModal: {
        //        backgroundColor: '#ffffff',

        backgroundColor: '#000000',
        top: 30,
        height: 60,
        width: '100%',
        borderColor: '#000000',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },
    dateTextInput: {
        fontSize: 20,
        color: '#696969',
        textAlign: 'center'
    },
    buttonTextInput: {
        fontSize: 20,
        color: '#696969',
        textAlign: 'center'
    },
    appBar: {
        backgroundColor: '#ECECEC'
    },
    picker: {
        width: 200,
        height: 44,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
      },
    pickerItem: {
        height: 44,
        color: 'red'
    }
});

export default Diet;



