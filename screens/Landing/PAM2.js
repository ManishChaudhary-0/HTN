import React, {useState} from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Divider, Slider } from 'react-native-elements';
import { State } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

const PAM2 = props => {


    let response = [{
        value: 'Disagree Strongly',
    }, {
        value: 'Disagree',
    }, {
        value: 'Agree'
    }, {
        value: 'Agree Strongly'
    }, {
        value: 'Agree'
    }, {
        value: 'N/A'
    }];
    
    var radio_props = [
        {label: '1', value: 1 },
        {label: '2', value: 2 },
        {label: '3', value: 3 },
        {label: '4', value: 4 },
        {label: '5', value: 5 }
    ];

    const [PAMResponse, setPAMResponse] = useState('');
    const [PAMQ1, setPAMQ1] = useState('');
    const [PAMQ2, setPAMQ2] = useState('');
    const [PAMQ3, setPAMQ3] = useState('');
    const [PAMQ4, setPAMQ4] = useState('');
    const [PAMQ5, setPAMQ5] = useState('');
    const [PAMQ6, setPAMQ6] = useState('');
    const [PAMQ7, setPAMQ7] = useState('');
    const [PAMQ8, setPAMQ8] = useState('');
    const [PAMQ9, setPAMQ9] = useState('');
    const [PAMQ10, setPAMQ10] = useState('');



    return (
        <View style={{flex:1}} >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Profile'});}} />
                    <Appbar.Content title="Motivation Measurement" titleStyle={{fontSize: 23.7}}/>
                </Appbar.Header>
            </SafeAreaView>

            <ScrollView>

            
                <View style={{flexDirection: 'column', paddingTop: 30}}>
                    <View style={{paddingBottom: 30}}>
                        <Text style={styles.infoText}> Below are some statements that people sometimes make when they talk about their health. Please indicate how much you agree or disagree with each statement as it applies to you personally by circling your answer. Your answers should be what is true for you and not just what you think the doctor wants you to say.</Text>                        
                        <Text style={styles.question1}>1 = Strongly Disagree  |  2 = Disagree  |  3 = Agree </Text>
                        <Text style={styles.question2}>4 = Strongly Agree  |  5 = N/A</Text>

                    </View>
                    <Divider orientation="horizontal" width={2} color='#000000' />


                    <View stye={{flex:1}}>
                        <Text style={styles.question}>1.  When all is said and done, I am the person who is responsible for taking care of my health.</Text>
                        <View style={{marginVertical:0}}>                            


                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ1({value:value})}}
                                buttonColor="#2979ff"
                                
                            >

                            </RadioForm>

                        

                            {/* <RadioForm
                            formHorizontal={true}
                            animation={true}
                            >
                            {
                                radio_props.map((obj, i) => (
                                    <RadioButton labelHorizontal={false} key={i} >
                                         You can set RadioButtonLabel before RadioButtonInput
                                        <RadioButtonInput
                                        radio_props={radio_props}
                                        obj={obj}
                                        index={i}
                                        onPress={(value) => {setPAMQ1({value:value})}}
                                        borderWidth={3}
                                        buttonInnerColor={'#e74c3c'}
                                        buttonOuterColor={'#2979ff'}
                                        buttonSize={35}
                                        style={{paddingTop: 10, paddingLeft:0}}
                                        buttonOuterSize={35}
                                        buttonStyle={{}}
                                        buttonWrapStyle={{marginLeft: 30}}
                                        />
                                        <RadioButtonLabel
                                        obj={obj}
                                        index={i}
                                        labelHorizontal={true}
                                        labelStyle={{fontSize: 20, color: '#000000'}}
                                        labelWrapStyle={{}}
                                        >
                                         </RadioButtonLabel>
                                    </RadioButton>
                                ))
                            }  
                            </RadioForm> */}

                                
    
                           

                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />


                    <View>
                        <Text style={styles.question}>2.  Taking an active role in my own health care is the most important thing that affects my health.</Text>
                        <View style={{marginVertical:0}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ2({value:value})}}
                                buttonColor="#2979ff"
                            />
                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />

                    <View>
                        <Text style={styles.question}>3. I know what each of my prescribed medications do.</Text>
                        <View style={{marginVertical:0}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ3({value:value})}}
                                buttonColor="#2979ff"

                            />
                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />

                    <View>
                        <Text style={styles.question}>4. I am confident that I can tell whether I need to go to the doctor or whether I can take care of a health problem myself.</Text>
                        <View style={{marginVertical:0}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ4({value:value})}}
                                buttonColor="#2979ff"

                            />
                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />

                    <View>
                        <Text style={styles.question}>5. I am confident that I can tell a doctor concerns I have even when he or she does not ask.</Text>
                        <View style={{marginVertical:0}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ5({value:value})}}
                                buttonColor="#2979ff"

                            />
                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />


                    <View>
                        <Text style={styles.question}> 6. I am confident that I can follow through on medical treatments I may need to do at home.</Text>
                        <View style={{marginVertical:0}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ6({value:value})}}
                                buttonColor="#2979ff"

                            />
                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />

                    <View>
                        <Text style={styles.question}> 7. I have been able to maintain (keep up with) lifestyle changes, like eating right or exercising.</Text>
                        <View style={{marginVertical:0}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ7({value:value})}}
                                buttonColor="#2979ff"
                            />
                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />


                    <View>
                        <Text style={styles.question}> 8. I know how to prevent problems with my health.</Text>
                        <View style={{marginVertical:0}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ8({value:value})}}
                                buttonColor="#2979ff"

                            />
                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />


                    <View>
                        <Text style={styles.question}> 9. I am confident I can figure out solutions when new problems arise with my health.</Text>
                        <View style={{marginVertical:0}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ9({value:value})}}
                                buttonColor="#2979ff"

                            />
                        </View> 
                    </View>
                    


                    <Divider orientation="horizontal" width={2} color='#000000' />

                    <View>
                        <Text style={styles.question}> 10. I am confident that I can maintain lifestyle changes, like eating right and exercising, even during times of stress.</Text>
                        <View style={{marginVertical:0, paddingBottom: 20}}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={-1}
                                formHorizontal={true}
                                labelHorizontal={false}
                                buttonOuterSize={35}
                                animation={true}
                                style={{paddingTop: 10, paddingLeft:10}}
                                radioStyle={{marginRight: 33.5}}
                                onPress={(value) => {setPAMQ10({value:value})}}
                                buttonColor="#2979ff"

                            />
                        </View> 
                    </View>                    



                </View>

            {/* </ScrollView> */}
                <View style={{}}>
                    <View style={{alignItems: 'center'}}>
                        <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'Profile'});}}  >
                            <Text style={styles.buttonText}>
                                Continue
                            </Text>
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
        </View>

    )
};

const styles = StyleSheet.create({
    appBar: {
        backgroundColor: '#ECECEC'
    },
    infoTitle: {
        paddingTop: 30,
        textAlign: 'left',
        //padding: 15,
        fontSize: 18,
        fontWeight: "bold"
    },
    infoText: {
        paddingTop: 0,
        textAlign: 'center',
        //padding: 15,
        fontSize: 15
    },
    question: {
        paddingTop: 20,
        textAlign: 'left',
        //padding: 15,
        fontSize: 15
    },
    question1: {
        paddingTop: 20,
        textAlign: 'center',
        //padding: 15,
        fontSize: 15
    },
    question2: {
        paddingTop: 5,
        textAlign: 'center',
        //padding: 15,
        fontSize: 15
    },
    press: {
        backgroundColor: '#2979ff',
        top:0,
        height: 40,
        marginBottom: 45,
        width: 285,
        borderColor: '#000000',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    connectInput: {
        backgroundColor: '#2979ff',
        top: 80,
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



export default PAM2;