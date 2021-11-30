import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

const StartMain = props => {
    const [pressableColor, setPressableColor] = useState(false);

    return (

        <View style={styles.V}>
            
            <View style={{alignItems:'center', marginTop:210}}>
                <Text style={styles.text}> HYPERTENSION </Text>
                <Text style={styles.text}> ANALYSIS </Text>
                <Text style={styles.text}> APPLICATION </Text>
            </View>


                {/* Alternating Colors */}
            {/*            
            <View style={{alignItems: 'center'}}>
                <Pressable style={{backgroundColor: pressableColor ? "red" : "grey"}} onPressIn={() => setPressableColor(!pressableColor)} onPress={() => {props.navigation.navigate({routeName: 'GI'});}} >
                    <Text style={styles.buttonText}>
                        Create Ant
                    </Text>
                </Pressable>
            </View> */}



            
            {/* <View style={{alignItems: 'center', backgroundColor:'#4d4d4d', marginTop:200, borderTopRightRadius:30, borderTopLeftRadius:30, width:350, flex:1}}> */}

            <View style={{marginTop:190}}>

                <TouchableOpacity style={styles.press}  onPress={() => {props.navigation.navigate({routeName: 'GI'});}} >
                    <Text style={styles.buttonText}>
                        Create Account
                    </Text>
                </TouchableOpacity>
            </View>





                {/* Having feedback using touchable opacity
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.press}  onPress={() => {props.navigation.navigate({routeName: 'GI'});}} >
                    <Text style={styles.buttonText}>
                        Create Account
                    </Text>
                </TouchableOpacity>
            </View> */}












                {/* For Future more advanced customization */}
            {/* <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press}  onPress={() => {props.navigation.navigate({routeName: 'GI'});}} >
                    <Text style={styles.buttonText}>
                        Create Account
                    </Text>
                </Pressable>
            </View> */}

        </View>

    )
};

const styles = StyleSheet.create({

    buttonText: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center'
    },
    press: {
        backgroundColor: 'rgba(41,121,255,1.0)',
        top: 115,
        height: 40,
        width: 285,
        borderColor: '#2979ff',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5

    },
    button: {
        position: 'absolute',
        backgroundColor: '#2979ff',
        bottom: 20,
        height: 40,
        borderWidth: 5, 
        borderColor: '#ffffff'
    },

    V: {
        flex:1,
        alignItems: 'center',
        backgroundColor: '#73000a',
        justifyContent: 'center'

    },
    text: {
        fontSize: 25,
        color: '#2979ff'
    }

});

export default StartMain;