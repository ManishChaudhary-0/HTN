import React from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

const ConnectBluetooth = props => {

    return (
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Connect Bluetooth" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
        
            <View style={{flexDirection: 'column', marginTop: 40}}>
                <View>
                    <Text style={styles.infoText}> Click the following buttons to connect your devices. </Text>
                </View>
            </View>

            <View style={{flexDirection: 'column'}}>
                
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.connectInput} >
                        <Text style={styles.buttonText}>
                            Activity Tracker
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'center', marginTop: 60}}>
                    <TouchableOpacity style={styles.connectInput} >
                        <Text style={styles.buttonText}>
                            Blood Pressure Cuff
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{alignItems: 'center', marginTop: 60}}>
                    <TouchableOpacity style={styles.connectInput} >
                        <Text style={styles.buttonText}>
                            Scale
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>


            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press}  onPress={() => {props.navigation.navigate({routeName: 'SPAM'});}} >
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
        textAlign: 'center',
        //padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top: 380,
        height: 40,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    connectInput: {
        backgroundColor: '#2979ff',
        top: 80,
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



export default ConnectBluetooth;