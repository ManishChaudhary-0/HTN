import React from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar } from 'react-native-paper';

const MedicationMain = props => {

    return (
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Medication" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
        
            <Text style={styles.infoText}> Please provide any medications you currently take on a regular basis. We will be collecting information on the name and dose of your medication as well as the quantity (count for pills, ml for liquid) and frequency per day. </Text>
       


            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'SAddNewMedication'});}}>
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </Pressable>
            </View>
       
       
        </View>
        

    )
};

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: '#73000a'
    },
    infoText: {
        paddingTop: 30,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top:525,
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



export default MedicationMain;