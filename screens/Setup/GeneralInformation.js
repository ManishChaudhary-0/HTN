import React, { useState, useEffect } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import { createUser } from '../api/apiHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const GeneralInformation = props => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const [firstNameCheck, setfirstNameCheck] = useState(false);
    const [lastNameCheck, setlastNameCheck] = useState(false);

    const [genInfo_Complete, setgenInfo_Complete] = useState(false);

    var passwordVerifyChars=  /^[A-Za-z]\w{7,14}$/;

    
    const passwordHandler = text => {
        if (text.trim().length < 8) {
            setIsPasswordValid(false);
            setPasswordError('Password must include 8 or more Characters');
        } else if (text.match(passwordVerifyChars)) {
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


    const FirstNameHandler = text => {
        if (text.length != 0 && text != ' ') {
            setFirstName(text);
            setfirstNameCheck(true);
        } else {
            setfirstNameCheck(false);
        }
    };

    const LastNameHandler = text => {
        if (text.length != 0 && text != ' ') {
            setLastName(text);
            setlastNameCheck(true);
        } else {
            setlastNameCheck(false);
        }
    };

    useEffect(() => {
        if (isPasswordValid && passwordsMatch && firstNameCheck && lastNameCheck) {
            setgenInfo_Complete(true);
        }

        if (genInfo_Complete){

            storeVariables()
            var username = firstName + lastName[0];
            var usernameLower = username.toLowerCase();

            // AsyncStorage.setItem("User_FirstName", String(firstName));
            // AsyncStorage.setItem("User_LastName", String(lastName));
            // AsyncStorage.setItem("User_Username", String(username));
            // AsyncStorage.setItem("User_Email", String(email));
            // AsyncStorage.setItem("User_Password", String(confirmPassword));

            const resposne = createUser(firstName, lastName, email, usernameLower, password);
        }
    });


    const storeVariables = async () => {
        var username = firstName + lastName[0];
        var usernameLower = username.toLowerCase();

        try {
           await AsyncStorage.setItem("User_FirstName", firstName);
           await AsyncStorage.setItem("User_LastName", lastName);
           await AsyncStorage.setItem("User_Username", usernameLower);
           await AsyncStorage.setItem("User_Email", email);
           await AsyncStorage.setItem("User_Password", confirmPassword);
        
        } catch (error) {
            console.log(error)
            
        }

    }

    return(
        <View style={{flex:1}}>
            <SafeAreaView style={{marginTop: 70}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="General Information" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>

            <Text style={styles.infoText}> Please provide some general profile infromation to begin. </Text>
            <View style={styles.VGrid}>
                <TextInput style={styles.inputLabel} placeholder={'First Name'} placeholderTextColor='#696969' onChangeText={FirstNameHandler}/>
                <TextInput style={styles.inputLabel} placeholder={'Last Name'} placeholderTextColor='#696969' onChangeText={LastNameHandler} />
                <TextInput style={styles.inputLabel} placeholder={'Email'} placeholderTextColor='#696969' keyboardType='email-address' onChangeText={text => setEmail(text)}/>
                <TextInput style={styles.inputLabel} placeholder={'Password'} placeholderTextColor='#696969' onChangeText={passwordHandler}/>
                <TextInput style={styles.inputLabel} placeholder={'Confirm Password'} placeholderTextColor='#696969' onChangeText={passwordMatchingHandler}/>

            </View>
            <View style={{flex:1, alignItems: 'center', marginTop: 300}}>                
                {!isPasswordValid && <Text style={{color:'red'}}>{passwordError}</Text>}
                {!passwordsMatch && <Text style={{color:'red'}}>Passwords do not match!</Text>}
            </View>

            {genInfo_Complete ?
                <View style={{alignItems: 'center'}}>
                    <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'DI'});}} >
                        <Text style={styles.buttonText}>
                            Continue
                        </Text>
                    </Pressable>
                </View>
            : 
                <View style={{alignItems: 'center', bottom: '10%'}}>
                    <Text style={{color:'red', fontStyle: 'italic', fontWeight:'200', fontSize:20}}>Complete Form to Continue </Text> 
                </View>
            }

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
        bottom: 80,
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