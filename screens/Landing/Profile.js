
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

const Profile = props => {

    return (
        <View style={{flex:1}}>
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Landing'});}} />
                    <Appbar.Content title="Patient Name" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
       

            <View style={{alignItems: 'center', flexDirection:'column', marginTop: -20}}>
                <Button style={styles.pressAdd} onPress={() => {props.navigation.navigate({routeName: 'GeneralInformation2'});}} mode="outlined">
                    <Text style={styles.buttonText}>
                        Log-In Information
                    </Text>
                </Button>
                <Button style={styles.button} onPress={() => {props.navigation.navigate({routeName: 'DemographicInformation2'});}} mode="outlined">
                    <Text style={styles.buttonText}>
                        Demographic Information
                    </Text>
                </Button>
                <Button style={styles.button} onPress={() => {props.navigation.navigate({routeName: 'MedicationReview2'});}} mode="outlined">
                    <Text style={styles.buttonText}>
                        Medications
                    </Text>
                </Button>
                <Button style={styles.button} onPress={() => {props.navigation.navigate({routeName: 'ConditionReview2'});}} mode="outlined">
                    <Text style={styles.buttonText}>
                        Conditions
                    </Text>
                </Button>
                <Button style={styles.button} onPress={() => {props.navigation.navigate({routeName: 'Connect2'});}} mode="outlined">
                    <Text style={styles.buttonText}>
                        Connected Devices
                    </Text>
                </Button>
                <Button style={styles.button} onPress={() => {props.navigation.navigate({routeName: 'PAM2'});}} mode="outlined">
                    <Text style={styles.buttonText}>
                        Motivation Measurement
                    </Text>
                </Button>
                <Button style={styles.button} onPress={() => {props.navigation.navigate({routeName: 'Settings'});}} mode="outlined">
                    <Text style={styles.buttonText}>
                    App Settings
                    </Text>
                </Button>
            </View>

    
       
       
        </View>
        

    )
};

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: '#ECECEC'
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
        top: 420,
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
        top: 100,
        height: 50,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    button: {
        backgroundColor: '#2979ff',
        top: 100,
        height: 50,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 20

    },

    buttonText: {
        fontSize: 15.5,
        color: '#ffffff',
        textAlign: 'center'
    },

});



export default Profile;