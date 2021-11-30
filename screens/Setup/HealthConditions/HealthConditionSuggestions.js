import React from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar, RadioButton } from 'react-native-paper';
import { SegmentedControls } from 'react-native-radio-buttons'
const HealthConditionSuggestions = props => {

    const options = [
        "Yes",
        "No",
        "Unsure"
      ];

    return (
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Health Conditions" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
        
            <Text style={styles.infoText}> Please provide any health conditions you have been diagnosed by a physician.</Text>

            <Text style={styles.infoTitle}> Condition</Text>

            <View style={{padding:10}}>
                <SegmentedControls
                    options={ options }
                    width ='80%'
                    //onSelection={ setSelectedOption.bind(this) }
                    //selectedOption={ this.state.selectedOption }
                />

            </View>

            <Text style={styles.infoTitle}> Condition</Text>

            <View style={{padding:10}}>
                <SegmentedControls
                    options={ options }
                    width ='80%'
                    //onSelection={ setSelectedOption.bind(this) }
                    //selectedOption={ this.state.selectedOption }
                />

            </View>







            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.pressAdd} onPress={() => {props.navigation.navigate({routeName: 'SAddHealthCondition'});}}>
                    <Text style={styles.buttonText}>
                        Add New Condition
                    </Text>
                </Pressable>
            </View>

            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press}>
                    <Text style={styles.buttonText} onPress={() => {props.navigation.navigate({routeName: 'SHealthConditionsReview'});}}>
                        Continue
                    </Text>
                </Pressable>
            </View>
        



       
        </View>
        

    )
};

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: '#73000a'
    },
    infoTitle: {
        paddingTop: 30,
        textAlign: 'left',
        marginLeft:20,
        fontSize: 20,
    },
    infoText: {
        paddingTop: 30,
        textAlign: 'center',
        padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top: 305,
        height: 40,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    pressAdd: {
        backgroundColor: '#2979ff',
        top: 260,
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

});



export default HealthConditionSuggestions;