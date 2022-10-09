import React from 'react';
import { ScrollView } from 'react-native';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar } from 'react-native-paper';

const ProfileReview = props => {

    return (
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Profile Review" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>

            <ScrollView>
                <View style={{padding:20, marginTop: 30, marginBottom: 2}}>
                    <Appbar style={{backgroundColor: '#A2A2A2'}}>
                        <Appbar.Content title="General Information" titleStyle={{fontSize: 18}}/>
                    </Appbar>
                </View>

                <View style={{padding:20, marginTop: 30}}>
                    <Appbar style={{backgroundColor: '#A2A2A2'}}>
                        <Appbar.Content title="Health History" titleStyle={{fontSize: 18}}/>
                    </Appbar>
                </View>

                <View style={{padding:20, marginTop: 30}}>
                    <Appbar style={{backgroundColor: '#A2A2A2'}}>
                        <Appbar.Content title="Motivation Measurement" titleStyle={{fontSize: 18}}/>
                    </Appbar>
                </View>

            </ScrollView>

            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'Landing'})}}>
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
        top: 310,
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



export default ProfileReview;