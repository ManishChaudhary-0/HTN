import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker } from 'react-native';
import { Appbar } from 'react-native-paper';


// import { Dropdown } from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';

const InputMeal = props => {

    let mealType = [{
        value: 'Breakfest',
    }, {
        value: 'Brunch',
    }, {
        value: 'Lunch'
    },  {
        value: 'Supper'
    }, {
        value: 'Dinner'
    },{
        value: 'Snack'
    }];

    const [MealType, setMealType] = useState('');
    const [Grains, setGrains] = useState();
    const [Meats, setMeats] = useState();
    const [Veg, setVeg] = useState();
    const [Fruits, setFruits] = useState();
    const [Dairy, setDairy] = useState();
    const [Fats_Oils, setFats_Oils] = useState();
    const [Nuts, setNuts] = useState();
    const [Sweets, setSweets] = useState();


    const ints = [
        {id: "Servings", label:'g', min: 0, max: 10 }
    ];
    return(
        
        <View style={{flex:1}}>
            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction onPress={() => {props.navigation.navigate({routeName: 'Landing'});}} />
                    <Appbar.Content title="Input Meal" titleStyle={{fontSize: 23.2}}/>
                </Appbar.Header>
            </SafeAreaView>
        

                
            <View style={{marginVertical:0, marginTop:20}}>
                <Picker style={{width: '100%'}} itemStyle={{height:44, color: "#000000"}} selectedValue={MealType} onValueChange={current => setMealType(current)}>
                    <Picker.Item label="Meal Type" value="Home" />
                    <Picker.Item label="Brunch" value="Brunch" />
                    <Picker.Item label="Lunch" value="Lunch" />
                    <Picker.Item label="Supper" value="Supper" />
                    <Picker.Item label="Dinner" value="Dinner" />
                    <Picker.Item label="Snack" value="Snack" />
                </Picker>
            </View> 
                            

            <View style={{marginTop:20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:50, color: "#000000"}} selectedValue={Grains} onValueChange={current => setGrains(current)} >
                        <Picker.Item label="Servings of Grains" value="Home" />
                        <Picker.Item label="1   - Grains" value="1" />
                        <Picker.Item label="2   - Grains" value="2" />
                        <Picker.Item label="3   - Grains" value="3" />
                        <Picker.Item label="4   - Grains" value="4" />
                        <Picker.Item label="5   - Grains" value="5" />
                        <Picker.Item label="6   - Grains" value="6" />
                        <Picker.Item label="7   - Grains" value="7" />
                        <Picker.Item label="8   - Grains" value="8" />
                        <Picker.Item label="9   - Grains" value="9" />
                        <Picker.Item label="10   - Grains" value="10" />
                    </Picker>
            </View> 

            <View style={{marginTop:20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:50, color: "#000000"}} selectedValue={Meats} onValueChange={current => setMeats(current)} >
                        <Picker.Item label="Servings of Meats" value="Home" />
                        <Picker.Item label="1   - Meats" value="1" />
                        <Picker.Item label="2   - Meats" value="2" />
                        <Picker.Item label="3   - Meats" value="3" />
                        <Picker.Item label="4   - Meats" value="4" />
                        <Picker.Item label="5   - Meats" value="5" />
                        <Picker.Item label="6   - Meats" value="6" />
                        <Picker.Item label="7   - Meats" value="7" />
                        <Picker.Item label="8   - Meats" value="8" />
                        <Picker.Item label="9   - Meats" value="9" />
                        <Picker.Item label="10   - Meats" value="10" />
                    </Picker>
            </View> 

            <View style={{marginTop:20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:50, color: "#000000"}} selectedValue={Veg} onValueChange={current => setVeg(current)} >
                        <Picker.Item label="Servings of Vegetables" value="Home" />
                        <Picker.Item label="1   - Vegetables" value="1" />
                        <Picker.Item label="2   - Vegetables" value="2" />
                        <Picker.Item label="3   - Vegetables" value="3" />
                        <Picker.Item label="4   - Vegetables" value="4" />
                        <Picker.Item label="5   - Vegetables" value="5" />
                        <Picker.Item label="6   - Vegetables" value="6" />
                        <Picker.Item label="7   - Vegetables" value="7" />
                        <Picker.Item label="8   - Vegetables" value="8" />
                        <Picker.Item label="9   - Vegetables" value="9" />
                        <Picker.Item label="10   - Vegetables" value="10" />
                    </Picker>
            </View> 

            <View style={{marginTop:20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:50, color: "#000000"}} selectedValue={Fruits} onValueChange={current => setFruits(current)} >
                        <Picker.Item label="Servings of Fruits" value="Home" />
                        <Picker.Item label="1   - Fruits" value="1" />
                        <Picker.Item label="2   - Fruits" value="2" />
                        <Picker.Item label="3   - Fruits" value="3" />
                        <Picker.Item label="4   - Fruits" value="4" />
                        <Picker.Item label="5   - Fruits" value="5" />
                        <Picker.Item label="6   - Fruits" value="6" />
                        <Picker.Item label="7   - Fruits" value="7" />
                        <Picker.Item label="8   - Fruits" value="8" />
                        <Picker.Item label="9   - Fruits" value="9" />
                        <Picker.Item label="10   - Fruits" value="10" />
                    </Picker>
            </View> 

            <View style={{marginTop:20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:50, color: "#000000"}} selectedValue={Dairy} onValueChange={current => setDairy(current)} >
                        <Picker.Item label="Servings of Dairy" value="Home" />
                        <Picker.Item label="1   - Dairy" value="1" />
                        <Picker.Item label="2   - Dairy" value="2" />
                        <Picker.Item label="3   - Dairy" value="3" />
                        <Picker.Item label="4   - Dairy" value="4" />
                        <Picker.Item label="5   - Dairy" value="5" />
                        <Picker.Item label="6   - Dairy" value="6" />
                        <Picker.Item label="7   - Dairy" value="7" />
                        <Picker.Item label="8   - Dairy" value="8" />
                        <Picker.Item label="9   - Dairy" value="9" />
                        <Picker.Item label="10   - Dairy" value="10" />
                    </Picker>
            </View> 

            <View style={{marginTop:20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:50, color: "#000000"}} selectedValue={Fats_Oils} onValueChange={current => setFats_Oils(current)} >
                        <Picker.Item label="Servings of Fats/Oils" value="Home" />
                        <Picker.Item label="1   - Fats/Oils" value="1" />
                        <Picker.Item label="2   - Fats/Oils" value="2" />
                        <Picker.Item label="3   - Fats/Oils" value="3" />
                        <Picker.Item label="4   - Fats/Oils" value="4" />
                        <Picker.Item label="5   - Fats/Oils" value="5" />
                        <Picker.Item label="6   - Fats/Oils" value="6" />
                        <Picker.Item label="7   - Fats/Oils" value="7" />
                        <Picker.Item label="8   - Fats/Oils" value="8" />
                        <Picker.Item label="9   - Fats/Oils" value="9" />
                        <Picker.Item label="10   - Fats/Oils" value="10" />
                    </Picker>
            </View> 

            <View style={{marginTop:20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:50, color: "#000000"}} selectedValue={Nuts} onValueChange={current => setNuts(current)} >
                        <Picker.Item label="Servings of Nuts, Legumes" value="Home" />
                        <Picker.Item label="1   - Nuts, Legumes" value="1" />
                        <Picker.Item label="2   - Nuts, Legumes" value="2" />
                        <Picker.Item label="3   - Nuts, Legumes" value="3" />
                        <Picker.Item label="4   - Nuts, Legumes" value="4" />
                        <Picker.Item label="5   - Nuts, Legumes" value="5" />
                        <Picker.Item label="6   - Nuts, Legumes" value="6" />
                        <Picker.Item label="7   - Nuts, Legumes" value="7" />
                        <Picker.Item label="8   - Nuts, Legumes" value="8" />
                        <Picker.Item label="9   - Nuts, Legumes" value="9" />
                        <Picker.Item label="10   - Nuts, Legumes" value="10" />
                    </Picker>
            </View> 

            <View style={{marginTop:20}}>
                    <Picker style={{width: '100%'}} itemStyle={{height:50, color: "#000000"}} selectedValue={Sweets} onValueChange={current => setSweets(current)} >
                        <Picker.Item label="Servings of Sweets" value="Home" />
                        <Picker.Item label="1   - Sweets" value="1" />
                        <Picker.Item label="2   - Sweets" value="2" />
                        <Picker.Item label="3   - Sweets" value="3" />
                        <Picker.Item label="4   - Sweets" value="4" />
                        <Picker.Item label="5   - Sweets" value="5" />
                        <Picker.Item label="6   - Sweets" value="6" />
                        <Picker.Item label="7   - Sweets" value="7" />
                        <Picker.Item label="8   - Sweets" value="8" />
                        <Picker.Item label="9   - Sweets" value="9" />
                        <Picker.Item label="10   - Sweets" value="10" />
                    </Picker>
            </View> 

            <View style={{alignItems: 'center'}}>
                <Pressable style={styles.press} onPress={() => {props.navigation.navigate({routeName: 'Diet'});}} >
                    <Text style={styles.buttonText}>
                        Review Meals
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
        top: 25,
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
        backgroundColor: '#ECECEC'
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

export default InputMeal;