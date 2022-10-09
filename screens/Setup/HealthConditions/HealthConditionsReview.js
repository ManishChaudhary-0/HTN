import React from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar } from 'react-native-paper';

const HealthConditionsReview = props => {

    return (
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Conditions Review" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
        
            <View style={{flexDirection: 'column', marginLeft: 50, paddingTop: 20}}>
                <View>
                    <Text style={styles.infoTitle}> Condition </Text>
                </View>

                <View>
                    <Text style={styles.infoTitle}> Condition </Text>
                </View>

                <View>
                    <Text style={styles.infoTitle}> Condition </Text>
                </View>
            </View>
       

            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.pressAdd} onPress={() => {props.navigation.navigate({routeName: 'SAddHealthCondition'});}}>
                    <Text style={styles.buttonText}>
                        Add New Condition
                    </Text>
                </Pressable>
            </View>

            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'SConnectBluetooth'});}}>
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
        top: 465,
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
        top: 430,
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



export default HealthConditionsReview;