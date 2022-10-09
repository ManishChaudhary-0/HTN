import React, { useState, useEffect } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';
import { getAllUsers, getUser_by_ID, updateUser } from '../api/apiHelper';

import AsyncStorage from '@react-native-async-storage/async-storage';

const GeneralInformation2 = props => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');

    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    var passwordVerifyChars=  /^[A-Za-z]\w{7,14}$/;

    const[storageLastName, setstorageLastName] = useState('');
    const[storageUserName, setstorageUserName] = useState('');

    const[userId, setUserID] = useState(0);

    const[changedInfo, setchangedInfo] = useState(false);
    const [firstNameCheck, setfirstNameCheck] = useState(false);
    const [lastNameCheck, setlastNameCheck] = useState(false);
    
    
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
            setchangedInfo(true);
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    };

    const FirstNameHandler = text => {
        if (text.length != 0 && text != ' ') {
            setFirstName(text);
            setchangedInfo(true);
            setfirstNameCheck(true);
        } else {
            setfirstNameCheck(false);
        }
    };

    const LastNameHandler = text => {
        if (text.length != 0 && text != ' ') {
            setLastName(text);
            setchangedInfo(true);
            setlastNameCheck(true);
        } else {
            setlastNameCheck(false);
        }
    };


    useEffect(() => {
        console.warn("Testing2")
        findID();


        if(changedInfo) {
            storeVariables();
            updateInfo(userId, firstName, lastName, email, username, confirmPassword);
        }



    });

    const findID = async () => {

        const response = await getAllUsers();
        // console.log("RESPONSE VV: ", response);
        await AsyncStorage.getItem("User_LastName")
        .then(value => {
            if (value != null){
                setstorageLastName(value)
                console.log("storageLastName", storageLastName)
            }
        })

        await AsyncStorage.getItem("User_Username")
        .then(value => {
            if (value != null){
                setstorageUserName(value)
                console.log("storageUserName", storageUserName)
            }
        })

        for(let i = 1; i < response.length; i++){
            if(response[i]['username'] == storageUserName && response[i]['lastname']== storageLastName){
                setUserID(i+1);
            }
        }

        console.log("UserID :", userId);

        userInfo();
    }

    const userInfo = async () => {

        const response2 = await getUser_by_ID(userId);
        // console.log("RESPONSE 2:", response2);

        setFirstName(response2['firstname']);
        setLastName(response2['lastname']);
        setEmail(response2['email']);
        setPassword(response2['password']);
        setConfirmPassword(response2['password']);
    }


    const storeVariables = async () => {
        var username1 = firstName + lastName[0];
        var usernameLower = username1.toLowerCase();
        setUsername(usernameLower);

        try {
           await AsyncStorage.setItem("User_FirstName", firstName);
           await AsyncStorage.setItem("User_LastName", lastName);
           await AsyncStorage.setItem("User_Username", usernameLower);
           await AsyncStorage.setItem("User_Email", email);
           await AsyncStorage.setItem("User_Password", confirmPassword);
        
        } catch (error) {
            console.log(error)
            
        }

        // const response3 = await updateUser(userId, firstName, lastName, email, username, confirmPassword);
        // console.log("RESPONSE 3:", response3);
    }


    const updateInfo = async (id, fn, ln, em, usrn, cp) => {

        const response3 = await updateUser(id, fn, ln, em, usrn, cp);
        console.log("RESPONSE 3:", response3);

    }




    return(
        <View>
            <SafeAreaView style={{marginTop: 70}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Profile'});}} />
                    <Appbar.Content title="General Information" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
            
            <View style={styles.VGrid}>
                <TextInput style={styles.inputLabel} placeholder={firstName} placeholderTextColor='#696969' onChangeText={FirstNameHandler}/>
                <TextInput style={styles.inputLabel} placeholder={lastName} placeholderTextColor='#696969' onChangeText={LastNameHandler} />
                <TextInput style={styles.inputLabel} placeholder={email} placeholderTextColor='#696969' keyboardType='email-address' onChangeText={text => setEmail(text) && setchangedInfo(true)}/>
                <TextInput style={styles.inputLabel} placeholder={password} placeholderTextColor='#696969' onChangeText={passwordHandler}/>
                <TextInput style={styles.inputLabel} placeholder={confirmPassword} placeholderTextColor='#696969' onChangeText={passwordMatchingHandler}/>
            </View>

            <View style={{alignItems: 'center', marginTop: 425}}>       
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






