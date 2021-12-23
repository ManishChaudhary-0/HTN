import React, { useState, useEffect } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';


const GeneralInformation2 = props => {

    const [firstName, setFirstName] = useState('First Name');
    const [lastName, setLastName] = useState('Last Name');
    const [email, setEmail] = useState('Email');
    const [password, setPassword] = useState('Password');
    const [confirmPassword, setConfirmPassword] = useState('Confirm Password');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    var passw=  /^[A-Za-z]\w{7,14}$/;
    
    
    const passwordHandler = text => {
        if (text.trim().length < 8) {
            setIsPasswordValid(false);
            setPasswordError('Password must include 8 or more Characters');
        } else if (text.match(passw)) {
            setIsPasswordValid(false);
            setPasswordError('Include Special and Capital Character');
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
        console.warn("Testing2")
    });

    return(
        <View>
            <SafeAreaView style={{marginTop: 70}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Profile'});}} />
                    <Appbar.Content title="General Information" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
            
            <View style={styles.VGrid}>
                <TextInput style={styles.inputLabel} placeholder={firstName} placeholderTextColor='#696969' onChangeText={text => setFirstName(text)}/>
                <TextInput style={styles.inputLabel} placeholder={lastName} placeholderTextColor='#696969' onChangeText={text => setLastName(text)} />
                <TextInput style={styles.inputLabel} placeholder={email} placeholderTextColor='#696969' keyboardType='email-address' onChangeText={text => setEmail(text)}/>
                <TextInput style={styles.inputLabel} placeholder={password} placeholderTextColor='#696969' onChangeText={passwordHandler}/>
                <TextInput style={styles.inputLabel} placeholder={confirmPassword} placeholderTextColor='#696969' onChangeText={passwordMatchingHandler}/>
                <Text> HELLO </Text>  
            </View>

            <View style={{flex:1, alignItems: 'center', marginTop: 0}}>   
                <Text> HELLO </Text>             
                {!isPasswordValid && <Text style={{color:'red'}}>{passwordError}</Text>}
                {!passwordsMatch && <Text style={{color:'red'}}>Passwords do not match!</Text>}
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
        paddingTop:10,
        marginTop: 60
    },
    infoText: {
        paddingTop: 30,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
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

export default GeneralInformation2;
