import React from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar } from 'react-native-paper';

const MedicationReview = props => {

    return (
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Medication Review" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
        
            <View style={{flexDirection: 'column', marginLeft: 50, paddingTop: 20}}>
                <View>
                    <Text style={styles.infoTitle}> Name </Text>
                    <Text style={styles.infoText}> Dose </Text>
                    <Text style={styles.infoText}> Quantity </Text>
                    <Text style={styles.infoText}> Frequency </Text>
                </View>

                <View>
                    <Text style={styles.infoTitle}> Name </Text>
                    <Text style={styles.infoText}> Dose </Text>
                    <Text style={styles.infoText}> Quantity </Text>
                    <Text style={styles.infoText}> Frequency </Text>
                </View>
            </View>
       
            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.pressAdd} onPress={() => {props.navigation.navigate({routeName: 'SAddNewMedication'});}}>
                    <Text style={styles.buttonText}>
                        Add New Medication
                    </Text>
                </Pressable>
            </View>

            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'SHealthConditionSuggestions'});}}>
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
    infoTitle: {
        paddingTop: 30,
        textAlign: 'left',
        //padding: 15,
        fontSize: 18,
        fontWeight: "bold"
    },
    infoText: {
        paddingTop: 0,
        textAlign: 'left',
        //padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top: 385,
        height: 40,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    pressAdd: {
        backgroundColor: '#2979ff',
        top: 350,
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



export default MedicationReview;