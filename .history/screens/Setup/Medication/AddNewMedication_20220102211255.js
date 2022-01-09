

import React, { useState, useEffect } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';

import DatePicker from 'react-native-date-picker';
import NumberPlease from "react-native-number-please";
// import { Dropdown } from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';

import {Autocomplete, withKeyboardAwareScrollView} from "react-native-dropdown-autocomplete"; 
import { render } from 'react-dom';
import { mdiBorderColor } from '@mdi/js';
import database from 'mime-db';
import { data } from 'browserslist';

const AddNewMedication = props => {

//     const data1 = [
//         "ADDERALL XR (Oral Pill)",
//         "ADDERALL (Oral Pill)",
//       ];
//     const data2 = [
//         [
//           " 5 mg 24 HR XR Cap",
//           "10 mg 24 HR XR Cap",
//           "15 mg 24 HR XR Cap",
//           "20 mg 24 HR XR Cap",
//           "25 mg 24 HR XR Cap",
//           "30 mg 24 HR XR Cap",
//         ],
//         [
//           " 5 mg Tab",
//           " 7.5 mg Tab",
//           "10 mg Tab",
//           "12.5 mg Tab",
//           "15 mg Tab",
//           "20 mg Tab",
//           "30 mg Tab",
//         ],
//       ];

//     const data3 = Array("".concat(data2));
//    // console.log(data3)

//    const MedDoseagesDATA = Array("".concat(MedDoseages));

//     filtered = MedDoseagesDATA[0].replace(/[^0-9\.]+/g, " ").trim().split(" ").map(e => parseFloat(e));
//    // console.log(filtered);

//    // console.log(MedDoseages)
//    // console.log(":-----------------------------------------------------------------------------------------:");


    const [Quantity, setQuantity] = useState('Race');

    const initialHeight = [
        {id: "Frequency", value:0},
    ];
    const initialDOSE = [
        {id:"Dose", value:0}
    ];

    const ft_in = [
        {id: "Frequency", label:'per day', min: 0, max: 50},
    ];
    const dose = [
        {id: "Dose", label:'mg', min: 0, max: 100},
    ];
    const [Frequency, setFrequency] = useState(initialHeight);
    const [DOSEAGE, setDOSEAGE] = useState(initialDOSE);

    const [Medication, SetMedication] = useState('');



    const [api, setAPI] = useState('https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search');
    const [APISearchMed, setAPISearchMed] = useState('');
    const [medAPIData, setmedAPIData] = useState([]);
    const [apiMedsFound, setApiMedsFound] = useState(0);
    const [MedNames, setMedNames] = useState([]);
    const [MedDoseages, setMedDoseages] = useState([]);
    const [isLoading, setLoading] = useState(false);
      
    const Handler = text => {
        setAPISearchMed(text)
        // FETCH FROM API URL AND PUT TEXT IN HTTP -> SORT INCOMING DATA
        setAPI(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${APISearchMed}&ef=DISPLAY_NAME,STRENGTHS_AND_FORMS`);
       // console.log(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms=${APISearchMed}&ef=DISPLAY_NAME,STRENGTHS_AND_FORMS`);
        getmedAPIData();
    };

    const getmedAPIData = async() => {
        try {
            const response = await fetch(api);
            const json = await response.json();
            setmedAPIData(JSON.parse(JSON.stringify(json)));
            setLoading(true);
           // console.log(medAPIData);
           // console.log(JSON.parse(JSON.stringify(json.DISPLAY_NAME[0])));

            setApiMedsFound(medAPIData[0]);
           // console.log(apiMedsFound);

            var NAMES = [];
            var DOSES = [];


            for(let i = 0; i < apiMedsFound; i++){
                NAMES.push(medAPIData[2].DISPLAY_NAME[i]);
                DOSES.push(medAPIData[2].STRENGTHS_AND_FORMS[i])

            }

            setMedNames(NAMES);
            setMedDoseages(DOSES);
            console.log(MedNames)
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(true);
        }

    }


    // adds them up out side the scopes
   // console.log(MedNames)
    //console.log(MedDoseages)


    useEffect(() => {
        console.warn("Testing")
        setMedNames([]);
        setMedDoseages([]);

     //   getmedAPIData();
    }, []);


    return(

        <View>

            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Add New Medication" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
                        
                    
            <View>
                <View style={styles.autocompletesContainer}>
                    <Autocomplete containerStyle={width='20%'} 
                        style={styles.input} 
                        handleSelectItem={(item, id) => this.handleSelectItem(item, id)}
                        data={MedNames}
                        onChangeText={Handler}
                       // fetchDataUrl='https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?terms={APISearchMed}&ef=DISPLAY_NAME'
                        valueExtractor={item => item}
                        placeholder="Add New Medication"
                        minimumCharactersCount={3}
                        placeholderColor="#000000"
                        inputContainerStyle={styles.inputContainer}
                        
                    />

                </View>

                
                <View style={{marginVertical:10}}>


                    <Text style={{textAlign: 'left', fontSize: 21, paddingTop:55, paddingLeft:20, color:"#393939" }}>  Select Dose: </Text>

                    <NumberPlease
                        digits={dose}
                        itemStyle={{height:88, color: "#000000", marginTop:-20}} 
                        values={DOSEAGE}
                        pickerStyle={{width:390}}
                        onChange={(values) => setDOSEAGE(values)}
                    />

                
                </View> 

                
                <View style={{marginVertical: 100, marginTop:60}}>
                    <Text style={{textAlign: 'left', fontSize: 21, marginTop:-50, paddingLeft:20, color:"#393939" }}>  Select Quantity: </Text>

                    <Picker style={{width: '98%', marginTop:-30, marginLeft:3}} itemStyle={{height:110, color: "#000000"}} selectedValue={Quantity} onValueChange={current => setQuantity(current)}>
                        <Picker.Item label="Select Quantity" value="Home" />
                        <Picker.Item label="1" value="1" />
                        <Picker.Item label="2" value="2" />
                        <Picker.Item label="3" value="3" />
                        <Picker.Item label="4" value="4" />
                        <Picker.Item label="5" value="5" />
                        <Picker.Item label="6" value="6" />
                        <Picker.Item label="7" value="7" />
                        <Picker.Item label="8" value="8" />
                        <Picker.Item label="9" value="9" />
                        <Picker.Item label="10" value="10" />

                    </Picker>
                </View> 
                <View>

                </View>
                    <Text style={{textAlign: 'left', fontSize: 21, marginTop:-80, paddingLeft:20, color:"#393939" }}>  Select Frequency: </Text>

                    <NumberPlease
                        digits={ft_in}
                        itemStyle={{height:88, color: "#000000", marginTop:-20}} 
                        values={Frequency}
                        pickerStyle={{width:390}}
                        onChange={(values) => setFrequency(values)}
                    />
                </View>


                <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'SMedicationReview'});}}>
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                </Pressable>
            </View>

                
            
            
        </View>
        
    );
        
}

const styles = StyleSheet.create({
    autocompletesContainer: {
        marginTop: 20,
        zIndex: 1,
        width: "100%",
        height: "10%",
        paddingHorizontal: 20,
        paddingBottom: 20
      },
    input: {
        maxHeight: 90,
        borderLeftWidth: 90,
        width: 10,
        height: '50%',
        borderColor: "#000000",
        borderWidth: 2,
        borderRadius: 10,
    },
    inputContainer: {
        display: "flex",
        flexShrink: 0,
        flexGrow: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#c7c6c1",
        paddingVertical: 13,
        width: "100%",
        justifyContent: "center"
    },
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
        marginRight:20,
        marginLeft:20,
        marginTop: 50,
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
        top: 155,
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
        width: '100%',
        borderColor: '#000000',
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

export default AddNewMedication;
