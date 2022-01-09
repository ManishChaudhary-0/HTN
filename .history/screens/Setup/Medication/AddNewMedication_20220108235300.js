

import React, { useState, useEffect, useCallback } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker, TouchableOpacity } from 'react-native';
import { Appbar, Divider } from 'react-native-paper';

import DatePicker from 'react-native-date-picker';
import NumberPlease from "react-native-number-please";
// import { Dropdown } from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';

//import {Autocomplete, withKeyboardAwareScrollView} from "react-native-dropdown-autocomplete"; 

import Autocomplete from 'react-native-autocomplete-input';
import { render } from 'react-dom';

const AddNewMedication = props => {

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

    // const Handler = text => {
    //    // setAPISearchMed(text)
    //     // FETCH FROM API URL AND PUT TEXT IN HTTP -> SORT INCOMING DATA
    //     // setAPI(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?maxList=1000&terms=${APISearchMed}&ef=DISPLAY_NAME,STRENGTHS_AND_FORMS`);
    //     // console.log(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?maxList=1000&terms=${APISearchMed}&ef=DISPLAY_NAME,STRENGTHS_AND_FORMS`);


    //     getmedAPIData(text);
    // };





    const getmedAPIData = async(text) => {
        setLoading(true);
        setMedNames([]);
        setMedDoseages([]);
        try {
            const response = await fetch(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?maxList=1000&terms=${text}&ef=DISPLAY_NAME,STRENGTHS_AND_FORMS`);
            const json = await response.json();
            var DATAJSON = JSON.parse(JSON.stringify(json));
            setmedAPIData(DATAJSON);
            setLoading(true);
           // console.log(medAPIData);
           // console.log(JSON.parse(JSON.stringify(json.DISPLAY_NAME[0])));

            setApiMedsFound(DATAJSON[0]);
           // console.log(apiMedsFound);            11

            var NAMES = [];
            var DOSES = [];

            if (apiMedsFound > 1000){
                setApiMedsFound(1000);
            }

            for(let i = 0; i < apiMedsFound; i++){
                NAMES.push(DATAJSON[2].DISPLAY_NAME[i]);
                DOSES.push(DATAJSON[2].STRENGTHS_AND_FORMS[i]);

                if (typeof DATAJSON[2].DISPLAY_NAME[i] === 'undefined' || DATAJSON[2].DISPLAY_NAME[i] === 'undefined') {
                    DATAJSON[2].DISPLAY_NAME[i] = "";
                    break;
                }
            }

            setMedNames(NAMES);
            setMedDoseages(DOSES);


            // console.log(":-----------------------------------------------------------------------------------------:");
            // console.log(MedNames);
            // console.log(MedDoseages)
            // console.log(":-----------------------------------------------------------------------------------------:");

        }
        catch (error) {
            console.error(error);
            setLoading(false);
        }

    }


    // adds them up out side the scopes
    //                                                  console.log(MedNames)

    // const API_NAMES_DATA = Array("".concat(MedNames));
    // console.log(API_NAMES_DATA);
    //console.log(MedDoseages)


    useEffect(() => {
      //  console.warn("Testing")
     //  setMedNames(["Adderall", "HYDROS"]);
     //  setMedDoseages([]);

     // set limit to the amount of changes, only to cchange when onchangeText is preformed

        getmedAPIData();

       // console.log('mounted');
       // return () => console.log('unmounting...');
    }, []);


    // D-BOUNCE and Throttle

    console.log(Array.isArray(MedNames));
    console.log(Medication)
    return(
      //  <ScrollView keyboardShouldPersistTaps='always'>
            <View>

                <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                    <Appbar.Header style={styles.appBar}>
                        <Appbar.Content title="Add New Medication" titleStyle={{fontSize: 24}}/>
                    </Appbar.Header>
                </SafeAreaView>
                            
            
                <View>



                    <View style={styles.container}>

                        {/* <Autocomplete containerStyle={width='80%'} 
                            style={styles.input} 
                            handleSelectItem={(item) => this.handleSelectItem(item)}
                            //data={MedNames}
                            onChangeText={Handler}
                            fetchDataUrl={"https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?maxList=1000&terms=ADDERALL&ef=DISPLAY_NAME,STRENGTHS_AND_FORMS"}
                            valueExtractor={item => item}
                            placeholder="Add New Medication"
                            minimumCharactersCount={1}
                            placeholderColor="#000000"
                            inputContainerStyle={styles.inputContainer}
                            
                        /> */}

                
                    
                        <Autocomplete
                            autoCorrect={true}
                            //containerStyle={styles.autocompleteContainer2}
                            //inputContainerStyle={{color:'#00000'}}
                            data={MedNames}
                            onChangeText={(text) => getmedAPIData(text)}
                            placeholder="Enter Medication"
                            listContainerStyle={{marginTop:30, zIndex: 1}}
                            containerStyle={styles.autocompleteContainer}
                            valueExtractor={item => item}

                            flatListProps={{
                                keyboardShouldPersistTaps: 'always',
                                maxHeight:'40%',
                                keyExtractor: (item) => item,
                                renderItem: (({item}) => (
                                    <TouchableOpacity onPress={() => {}}>
                                        <Text style={styles.itemText}>
                                            {item}
                                        </Text>
                                        <Divider style={{width:10}}></Divider>
                                    </TouchableOpacity>
                                ))
                            }}
                            

                        />

                    </View>



                    {/* <View style={{paddingTop:40, paddingBottom:60}}>
                        <Text> {MedNames[0]}</Text>
                        <Text> {MedNames[1]}</Text>
                        <Text> {MedNames[2]}</Text>
                        <Text> {MedNames[3]}</Text>
                        <Text> {MedNames[4]}</Text>
                        <Text> {MedNames[5]}</Text>
                        <Text> {MedNames[6]}</Text>
                        <Text> {MedNames[7]}</Text>
                        <Text> {MedNames[8]}</Text>
                        <Text> {MedNames[9]}</Text>
                        <Text> {MedNames[10]}</Text>
                        <Text> {MedNames[11]}</Text>
                        <Text> {MedNames[12]}</Text>
                        <Text> {MedNames[13]}</Text>
                        <Text> {MedNames[14]}</Text>
                        <Text> {MedNames[15]}</Text>
                        <Text> {MedNames[16]}</Text>
                        <Text> {MedNames[17]}</Text>
                        <Text> {MedNames[18]}</Text>
                        <Text> {MedNames[19]}</Text>
                        <Text> {MedNames[20]}</Text>
                        <Text> {MedNames[21]}</Text>
                        <Text> {MedNames[22]}</Text>
                        <Text> {MedNames[23]}</Text>
                        <Text> --------------------------------</Text>
                        <Text> {data1}</Text>

                        

                    </View> */}

                    <View style={{marginVertical:500}}>


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
       // </ScrollView>
        
    );
        
}

const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        // backgroundColor: '#F5FCFF',
        // flex: 1,
    
        // // Android requiers padding to avoid overlapping
        // // with content and autocomplete
        // paddingTop: 20,

        //backgroundColor: '#F5FCFF',
        flex: 1,
        position:"relative",
        zIndex: 10,
        paddingTop: 20,
        paddingTop: 25,
        },
    itemText: {
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
      },
    autocompleteContainer2: {
        flex: 1,
        left: 0,
        maxHeight:100,
        width: '90%',
        position: 'absolute',
        marginHorizontal: 20,
        top: 15,
        paddingHorizontal: 10,
        //zIndex: 1
    },
    autocompletesContainer: {
        // marginTop: 20,
        // zIndex: 1,
        // width: "100%",
        // height: "10%",
        // paddingHorizontal: 20,
        // paddingBottom: 20
        flex: 1,
        left: 0,
        height: 40,
        position: 'absolute',
        right: 0,
        top: 20,
        marginLeft: 10,
        marginRight: 10,
        maxHeight:'20%'

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
    appBar: {
        backgroundColor: '#73000a'
    },
});

export default AddNewMedication;
