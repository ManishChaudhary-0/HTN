import React from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Appbar, Card } from 'react-native-paper';

const ChatBot = props => {
    return(
        <View style={{flex:1}}>
            <SafeAreaView style={{marginTop: 70}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Landing'});}} />
                    <Appbar.Content title="Health Recommendations" titleStyle={{fontSize: 22}}/>
                </Appbar.Header>
            </SafeAreaView>


            <View style={{marginTop:40}}>
                <Card>
                    <Card.Cover source={require('../../Images/Bot.png')} style={{resizeMode:'center', height:350}}/> 
                </Card>
            </View>
            
            <View style={{alignItems:'center', marginTop:200}}>
                <TextInput style={styles.inputLabel} placeholder='Message' placeholderTextColor='#000000'/>

            </View>

       

        </View>



    )
};

const styles = StyleSheet.create({
    inputLabel: {
        borderColor: '#000000',
        height: 60,
        padding: 20,
        width:350,
        marginTop: 30,
        borderRadius: 10,
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 20,
    },

    appBar: {
        backgroundColor: '#ECECEC'
    }
});

export default ChatBot;