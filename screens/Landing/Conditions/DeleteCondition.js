import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker, TextInput } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

import DatePicker from 'react-native-date-picker'
import NumberPlease from "react-native-number-please";

// import { Dropdown } from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';

const DeleteCondition = props => {



    return(
        
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Profile'});}} />
                    <Appbar.Content title="Delete Condition" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
                        
                    
            <Text style={{textAlign: 'center', fontSize: 21, paddingTop:45, padding:10, color:"#393939" }}>  Select which condition you would like to delete. </Text>

            
            <View style={{alignItems: 'center', marginTop: -100}}>
                <Button style={styles.press}>
                    <Text style={styles.buttonText}>
                        Condition Name
                    </Text>
                </Button>
                <Button style={styles.press2}>
                    <Text style={styles.buttonText}>
                        Condition Name
                    </Text>
                </Button>
            </View>


            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press3} onPress={() => {props.navigation.navigate({routeName: 'ConditionReview2'});}}>
                    <Text style={styles.buttonText}>
                        Return To Review
                    </Text>
                </Pressable>

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
        marginTop: 50,
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
        top: 145,
        height: 40,
        width: 300,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    press2: {
        backgroundColor: '#2979ff',
        top: 145,
        height: 40,
        width: 300,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop:20

    },
    press3: {
        backgroundColor: '#2979ff',
        top: 130,
        height: 40,
        width: 300,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop:390

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

export default DeleteCondition;



