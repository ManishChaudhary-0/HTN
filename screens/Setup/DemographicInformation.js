import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar } from 'react-native-paper';

import DatePicker from 'react-native-date-picker'
import NumberPlease from "react-native-number-please";

// import { Dropdown } from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';

const DemographicInformation = props => {

    let genderData = [{
        value: 'Male',
    }, {
        value: 'Female',
    }, {
        value: 'Other'
    }];

    let raceData = [{
        value: 'American Indian',
    }, {
        value: 'Asian',
    }, {
        value: 'Caucasian'
    }, {
        value: 'Hispanic'
    }, {
        value: 'African American'
    }, {
        value: 'European'
    }];

    const initialHeight = [
        {id: "Feet", value:5},
        {id: "Inches", value:5},
    ];
    const ft_in = [
        {id: "Feet", label:'ft', min: 0, max: 12 },
        {id: "Inches", label:'in', min: 0, max: 12},
    ];

    const [gender, setGender] = useState('Gender');
    const [race, setRace] = useState('Race');

    const [DOB, setDOB] = useState(new Date());
    const [DOBVisible, setDOBVisible] = useState(false);
    const [height, setHeight] = useState(initialHeight);


    return(
        
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Demographic Information" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
            
            <Text style={styles.infoText}> Please provide some general profile infromation to begin. </Text>
            
                    
            <View style={{padding:10}}>
             <Text style={{textAlign: 'center', fontSize: 18, paddingTop:0, color:"#393939" }}>  Click to enter Date of Birth: </Text>

                <View style={{ flexDirection: 'row', paddingBottom:40, marginTop:-50}}>
                    <Pressable style={styles.dateInput} onPress={() => setDOBVisible(true)}>
                        <Text style={styles.dateTextInput, {fontSize: 20}}>
                            {DOB.toUTCString()}
                        </Text>
                    </Pressable>

                    <DatePicker
                        modal
                        mode='date'
                        selectedValue={DOB}
                        open={DOBVisible}
                        date={DOB}
                        onChange={date => setDOB(date)}
                        onConfirm={(date) => {
                            setDOBVisible(false)
                            setDOB(date)
                            value={DOB}
                            onDateChange={setDOB}
                        }}
                        onCancel={()=>{setDOBVisible(false)}}
                    /> 
                </View>







                <View style={{marginVertical: 30}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:110, color: "#000000"}} selectedValue={gender} onValueChange={currentGender => setGender(currentGender)} >
                        <Picker.Item label="Select Gender" value="Home" />
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                </View> 

                
                <View style={{marginVertical: -20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:110, color: "#000000"}} selectedValue={race} onValueChange={currentRace => setRace(currentRace)}>
                        <Picker.Item label="Select Race" value="Home" />
                        <Picker.Item label="American Indian" value="American Indian" />
                        <Picker.Item label="Asian" value="Asian" />
                        <Picker.Item label="African American" value="African American" />
                        <Picker.Item label="European" value="European" />
                        <Picker.Item label="Hispanic" value="Hispanic" />
                        <Picker.Item label="Caucasian" value="Caucasian" />

                    </Picker>
                </View> 

                <Text style={{textAlign: 'center', fontSize: 21, paddingTop:50, color:"#393939" }}>  Select Height: </Text>
                <NumberPlease
                    digits={ft_in}
                    itemStyle={{height:110, color: "#000000"}} 
                    values={height}
                    onChange={(values) => setHeight(values)}
                />

            </View>
            
            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press}  onPress={() => {props.navigation.navigate({routeName: 'SMedication'});}}>
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </Pressable>
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
        top: 85,
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
        backgroundColor: '#73000a'
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

export default DemographicInformation;