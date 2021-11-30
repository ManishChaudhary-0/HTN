import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar } from 'react-native-paper';

import DatePicker from 'react-native-date-picker'
import NumberPlease from "react-native-number-please";

// import { Dropdown } from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';

const Settings = props => {

    const [Track1, setTrack1] = useState('');
    const [Track2, setTrack2] = useState('');
    const [Track3, setTrack3] = useState('');
    const [Track4, setTrack4] = useState('');

    return(
        
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Profile'})}} />
                    <Appbar.Content title="App Settings" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
        
            <View style={{padding:10, marginTop:-20}}>
                <Text style={{textAlign: 'center', fontSize: 18, paddingTop:0, color:"#393939", marginTop:70}}>  
                    Select four options you want to track and see average value within your summary.
                </Text>

                
                <View style={{marginVertical: 30}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:110, color: "#000000"}} selectedValue={Track1} onValueChange={current => setTrack1(current)} >
                        <Picker.Item label="Track 1" value="Home" />
                        <Picker.Item label="Blood Pressure" value="Blood Pressure" />
                        <Picker.Item label="Weight" value="Weight" />
                        <Picker.Item label="DASH DIET %" value="DASH" />
                        <Picker.Item label="Activity Minutes" value="Activity" />

                    </Picker>
                </View> 

                
                <View style={{marginVertical: -20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:110, color: "#000000"}}  selectedValue={Track2} onValueChange={current => setTrack2(current)} >
                        <Picker.Item label="Track 2" value="Home" />
                        <Picker.Item label="Blood Pressure" value="Blood Pressure" />
                        <Picker.Item label="Weight" value="Weight" />
                        <Picker.Item label="DASH DIET %" value="DASH" />
                        <Picker.Item label="Activity Minutes" value="Activity" />
                    </Picker>
                </View> 


                <View style={{marginVertical: 30}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:110, color: "#000000"}}  selectedValue={Track3} onValueChange={current => setTrack3(current)}  >
                        <Picker.Item label="Track 3" value="Home" />
                        <Picker.Item label="Blood Pressure" value="Blood Pressure" />
                        <Picker.Item label="Weight" value="Weight" />
                        <Picker.Item label="DASH DIET %" value="DASH" />
                        <Picker.Item label="Activity Minutes" value="Activity" />

                    </Picker>
                </View> 

                
                <View style={{marginVertical: -20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:110, color: "#000000"}}  selectedValue={Track4} onValueChange={current => setTrack4(current)} >
                        <Picker.Item label="Track 4" value="Home" />
                        <Picker.Item label="Blood Pressure" value="Blood Pressure" />
                        <Picker.Item label="Weight" value="Weight" />
                        <Picker.Item label="DASH DIET %" value="DASH" />
                        <Picker.Item label="Activity Minutes" value="Activity" />
                    </Picker>
                </View> 

            </View>
            
   
        </View>
        
    )
    
}

const styles = StyleSheet.create({
    ILV2: {
        borderColor: '#000000',
        height: 60,
        padding: 20,
        marginTop: 60,
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
    },
    inputLabel: {
        borderColor: '#000000',
        height: 60,
        padding: 20,
        marginTop: 40,
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
    },
    VGrid: {
        flexDirection: 'column',
        flex: 1,
        padding: 30,
        paddingTop: 10
    },
    infoText: {
        paddingTop: 30,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top: 45,
        height: 40,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    dateInput: {
        backgroundColor: '#ffffff',
        top: 60,
        height: 50,
        width: '95%',
        borderColor: '#000000',
        marginLeft:10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    dayInput: {
        //        backgroundColor: '#ffffff',
        backgroundColor: '#ffffff',
        top: 60,
        height: 60,
        width: 80,
        borderColor: '#000000',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        //padding:15

    },
    pressModal: {
        //        backgroundColor: '#ffffff',

        backgroundColor: '#000000',
        top: 30,
        height: 60,
        width: '100%',
        borderColor: '#000000',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10

    },
    buttonText: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },
    dateTextInput: {
        fontSize: 20,
        color: '#696969',
        textAlign: 'center'
    },
    buttonTextInput: {
        fontSize: 20,
        color: '#696969',
        textAlign: 'center'
    },
    appBar: {
        backgroundColor: '#ECECEC'
    },
    picker: {
        width: 200,
        height: 44,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
      },
    pickerItem: {
        height: 44,
        color: 'red'
    }
});

export default Settings;