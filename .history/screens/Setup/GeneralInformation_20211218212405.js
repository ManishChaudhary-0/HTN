import React, { useState, useEffect, useCallback } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';

const GeneralInformation = props => {

    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const [confirmPassword, setConfirmPassword] = useState('Confirm Password');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    const passwordHandler = text => {
        if (text.trim().length == 0){
            setIsPasswordValid(false);
        } else {
            setIsPasswordValid(true);
            setPassword(text);
        }
    };

    const passwordMatchingHandler = text => {
        if (text.length != 0 && text == password) {
            setConfirmPassword(text);
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    };

    // const submitHandler = useCallback(() => {
    //     console.log('submitting');
    // });

    useEffect(() => {
        console.warn("Testing")
    });

    // useEffect(() => {
    //     props.navigation.setParams({ submit: submitHandler});
    //   }, [submitHandler]);    

    
    return(
        <View>
            <SafeAreaView style={{marginTop: 70}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="General Information" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
            
            <Text style={styles.infoText}> Please provide some general profile infromation to begin. </Text>
            <View style={styles.VGrid}>
                <TextInput style={styles.inputLabel} placeholder={firstName} placeholderTextColor='#696969' onChangeText={text => setFirstName(text)}/>
                <TextInput style={styles.inputLabel} placeholder={lastName} placeholderTextColor='#696969' onChangeText={text => setLastName(text)} />
                <TextInput style={styles.inputLabel} placeholder={email} placeholderTextColor='#696969' keyboardType='email-address' onChangeText={text => setEmail(text)}/>
                <TextInput style={styles.inputLabel} placeholder={password} placeholderTextColor='#696969' onChangeText={passwordHandler}/>
                <TextInput style={styles.inputLabel} placeholder={confirmPassword} placeholderTextColor='#696969' onChangeText={passwordMatchingHandler}/>
            </View>

            <View style={{alignItems: 'center', marginTop: 80}}>
                {!isPasswordValid && <Text>Password Incorrect!</Text>}
            </View>
 
            <View style={{alignItems: 'center', marginTop: '110%'}}>
                {!passwordsMatch && <Text>Passwords do not match!</Text>}
            </View>

            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'DI'});}} >
                    <Text style={styles.buttonText}>
                        Continue
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
        backgroundColor: '#73000a'
    }
});

export default GeneralInformation;