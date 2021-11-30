import React from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Appbar, Card, Title } from 'react-native-paper';

const HealthData = props => {

    return (
        <View >
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Landing'})}} />
                    <Appbar.Content title="Health Data" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
        
            <View style={{flexDirection: 'column', paddingTop: 40}}>
                <View>
                    <Text style={styles.infoText}> Blood Pressure - Average</Text>
                    <Card style={{width:300, height:40, backfaceVisibility:'hidden', backgroundColor:'#73000a', marginLeft:40}}>
                        <Card.Content alignItems='center'>
                        </Card.Content>
                    </Card>
                </View>
            </View>
            <View style={{flexDirection: 'column', paddingTop: 40}}>
                <View>
                    <Text style={styles.infoText}> Heart Rate - Average</Text>
                    <Card style={{width:300, height:40, backfaceVisibility:'hidden', backgroundColor:'#73000a', marginLeft:40}}>
                        <Card.Content alignItems='center'>
                        </Card.Content>
                    </Card>
                </View>
            </View>
            <View style={{flexDirection: 'column', paddingTop: 40}}>
                <View>
                    <Text style={styles.infoText}> Weight - Average</Text>
                    <Card style={{width:300, height:40, backfaceVisibility:'hidden', backgroundColor:'#73000a', marginLeft:40}}>
                        <Card.Content alignItems='center'>
                        </Card.Content>
                    </Card>
                </View>
            </View>
            <View style={{flexDirection: 'column', paddingTop: 40}}>
                <View>
                    <Text style={styles.infoText}> BMI - Average</Text>
                    <Card style={{width:300, height:40, backfaceVisibility:'hidden', backgroundColor:'#73000a', marginLeft:40}}>
                        <Card.Content alignItems='center'>
                        </Card.Content>
                    </Card>
                </View>
            </View>
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
        textAlign: 'left',
        padding: 15,
        fontSize: 18
    },
    press: {
        backgroundColor: '#2979ff',
        top: 370,
        height: 40,
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



export default HealthData;