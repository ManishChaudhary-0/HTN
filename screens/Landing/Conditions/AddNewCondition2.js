import React from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';

const AddNewCondition2 = props => {
    return(
        <View>
            <SafeAreaView style={{marginTop: 70}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Profile'})}} />
                    <Appbar.Content title="Add Health Conditions" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
            
            <Text style={styles.infoText}> Please provide some general profile infromation to begin. </Text>
            <View style={styles.VGrid}>
                <TextInput style={styles.inputLabel} placeholder='Health Conditions' placeholderTextColor='#696969'/>
                <TextInput style={styles.inputLabel} placeholder='Health Conditions' placeholderTextColor='#696969'/>
                <TextInput style={styles.inputLabel} placeholder='Health Conditions' placeholderTextColor='#696969'/>

            </View>

            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'ConditionReview2'});}} >
                    <Text style={styles.buttonText}>
                        Review
                    </Text>
                </Pressable>
            </View>
        </View>



    )
};

const styles = StyleSheet.create({
    inputLabel: {
        borderColor: '#000000',
        height: 60,
        padding: 20,
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20
    },
    VGrid: {
        flexDirection: 'column',
        flex: 1,
        padding: 30,
        paddingTop:10
    },
    infoText: {
        paddingTop: 30,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top: 510,
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
    appBar: {
        backgroundColor: '#ECECEC'
    }
});

export default AddNewCondition2;