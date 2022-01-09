

import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';

import DatePicker from 'react-native-date-picker';
import NumberPlease from "react-native-number-please";
// import { Dropdown } from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';

import {Autocomplete, withKeyboardAwareScrollView} from "react-native-dropdown-autocomplete"; 
import { render } from 'react-dom';

const AddNewMedication = props => {

    let data1 = [{
        value: 'Home',
    }, {
        value: '1 mg',
    }, {
        value: '2 mg',
    }, {
        value: '3 mg'
    }, {
        value: '4 mg'
    }, {
        value: '5 mg'
    }, {
        value: '6 mg'
    }, {
        value: '7 mg'
    }, {
        value: '8 mg'
    }, {
        value: '9 mg'
    }, {
        value: '10 mg'
    }, {
        value: '11 mg'
    }, {
        value: '12 mg'
    }, {
        value: '13 mg'
    }, {
        value: '14 mg'
    }, {
        value: '15 mg'
    }, {
        value: '16 mg'
    }, {
        value: '17 mg'
    }, {
        value: '18 mg'
    }, {
        value: '19 mg'
    }, {
        value: '20 mg'
    },{
        value: '25 mg'
    },{
        value: '30 mg'
    },{
        value: '35 mg'
    },{
        value: '40 mg'
    },{
        value: '45 mg'
    },{
        value: '50 mg'
    }, {
        value: '55 mg'
    }, {
        value: '60 mg'
    }, {
        value: '65 mg'
    }, {
        value: '70 mg'
    }, {
        value: '75 mg'
    }, {
        value: '80 mg'
    },{
        value: '85 mg'
    },{
        value: '90 mg'
    },{
        value: '95 mg'
    },{
        value: '100 mg'
    }];




    let raceData = [{
        value: '1',
    }, {
        value: '2',
    }, {
        value: '3'
    }, {
        value: '4'
    }, {
        value: '5'
    }, {
        value: '6'
    }];


    const data = [
        "Apples",
        "Apple Cider",
        "Abercrombie",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns",
    ];

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

    const obj = { fodd: 1, bar: 2};



    return(
        
        <View>

            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Add New Medication" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
                        
                    
            <View>




                {/* <TextInput style={styles.inputLabel} placeholder='Name' placeholderTextColor='#696969'/> */}
                
                <View style={styles.autocompletesContainer}>
                    <Autocomplete style={styles.input, { borderWidth:'100%'}} handleSelectItem={(item, id) => this.handleSelectItem(item, id)} data={data} valueExtractor={item => item} />
                </View>

                {/* <RenderHtml
                    contentWidth='100'
                    source={source}
                /> */}



                
                <View style={{marginVertical:10}}>


                    <Text style={{textAlign: 'left', fontSize: 21, paddingTop:30, paddingLeft:20, color:"#393939" }}>  Select Dose: </Text>

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
        paddingTop: 20,
        zIndex: 1,
        width: "100%",
        height: "10%",
        paddingHorizontal: 8,
        alignItems: 'center'
      },
    input: {maxHeight: 0},
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










/*
import RenderHtml from 'react-native-render-html';


const source = {
    html: `
    <html>

    <head>
    <link href='https://clinicaltables.nlm.nih.gov/autocomplete-lhc-versions/17.0.3/autocomplete-lhc.min.css' rel="stylesheet">
    </head>

    <body>
    Drug Name: <input type="text" id="rxterms" placeholder="Drug name">
    <p>
    Strength: <input type="text" id="drug_strengths" placeholder="Strength list">
    <p>
    Code (RxCUI): <input type="text" id="rxcui" placeholder="RxCUI">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> <!-- example CDN-- you may choose another source --> 
    <script src='https://clinicaltables.nlm.nih.gov/autocomplete-lhc-versions/17.0.3/autocomplete-lhc.min.js'></script>

    <script>
        // Create drug list for the name field
        new Def.Autocompleter.Search('rxterms',
        'https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?ef=STRENGTHS_AND_FORMS,RXCUIS');
        
        // Create an initially empty list for the strength field
        new Def.Autocompleter.Prefetch('drug_strengths', []);
        
        // Populate the strength list after the user selects a drug name
        Def.Autocompleter.Event.observeListSelections('rxterms', function() {
        var drugField = $('#rxterms')[0];
        var drugName = drugField.value;
        var drugAutocomp = drugField.autocomp;
        var strengths = drugAutocomp.getItemExtraData(drugName)['STRENGTHS_AND_FORMS'];
        var rxcuis = drugAutocomp.getItemExtraData(drugName)['RXCUIS'];
        if (strengths)
            $('#drug_strengths')[0].autocomp.setListAndField(strengths, rxcuis);
        });

        // Fill in the RxCUI field after the user selects a strength
        Def.Autocompleter.Event.observeListSelections('drug_strengths', function(data) {
        $('#rxcui')[0].value = data.item_code;
        })
    </script>
    </body>

    </html>
    `
};
*/