import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Appbarfrom, { Appbar } from 'react-native-paper';
import App from '../App';


const Header = props => {
    return (
    <SafeAreaView>
        
        <Appbar.Header style={styles.appBar}>
            <Appbar.BackAction/>
            <Appbar.Content title="Title" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" />
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>

    </SafeAreaView>

        // <View style={styles.header}>
        //     <Text style={styles.headerTitle}>
        //         {props.title}
        //     </Text>
        // </View>
    )
};





const styles = StyleSheet.create({
    appBar: {
        left: 0,
        //flex: 1,
        right: 0, 
        //bottom: 0,
        paddingTop: 0,
        position: 'absolute'
        //backgroundColor: "#fff"
    },
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    },
    bar: {
        backgroundColor : "#fff",
        marginTop: 50
    }
});
export default Header;