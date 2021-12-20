import React, { useState, useEffect } from 'react';
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

    const [passwordError, setPasswordError] = useState('');

    const passwordHandler = text => {
        if (text.trim().length < 8){
            setIsPasswordValid(false);
            setPasswordError('Password must be more than 8 in length')
        } else if (text.includes('&') || text.includes('&')) {
            setIsPasswordValid(false);
            setPasswordError('Password must include 1 of the following: !,@,#,$,%,^,&,*')
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

    useEffect(() => {
        console.warn("Testing")
    });

    return(
        <View style={{flex:1}}>
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

            <View style={{flex:1, alignItems: 'center', marginTop: 300}}>
                {/* {!isPasswordValid && <Text style={{color:'red'}}>Password Incorrect!</Text>}
                {!passwordsMatch && <Text style={{color:'red'}}>Passwords do not match!</Text>} */}
                
                {!isPasswordValid && <Text style={{color:'red'}}>{passwordError}</Text>}
                {!passwordsMatch && <Text style={{color:'red'}}>Passwords do not match!</Text>}
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
        bottom: 40,
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