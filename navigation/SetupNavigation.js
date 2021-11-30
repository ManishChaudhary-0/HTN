import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import StartMain from '../screens/Setup/StartMain.js'
import GeneralInformation from '../screens/Setup/GeneralInformation.js';
import DemographicInformation from '../screens/Setup/DemographicInformation.js';
import MedicationMain from '../screens/Setup/Medication/MedicationMain.js';
import AddNewMedication from '../screens/Setup/Medication/AddNewMedication.js';
import MedicationReview from '../screens/Setup/Medication/MedicationReview.js';
import HealthConditionSuggestions from '../screens/Setup/HealthConditions/HealthConditionSuggestions.js';
import AddHealthCondition from '../screens/Setup/HealthConditions/AddHealthCondition.js';
import HealthConditionsReview from '../screens/Setup/HealthConditions/HealthConditionsReview.js';
import ConnectBluetooth from '../screens/Setup/Connect/ConnectBluetooth.js';
import ProfileReview from '../screens/Setup/ProfileReview.js';
import PAM from '../screens/Setup/PAM.js';

import LandingPage from '../screens/Landing/LandingPage.js';
import Profile from '../screens/Landing/Profile.js';
import GeneralInformation2 from '../screens/Landing/GeneralInformation2.js';
import DemographicInformation2 from '../screens/Landing/DemographicInformation2.js';
import MedicationReview2 from '../screens/Landing/Medication/MedicationsReview2.js';
import DeleteMedication from '../screens/Landing/Medication/DeleteMedication.js';
import AddNewMedication2 from '../screens/Landing/Medication/AddNewMedication2.js';
import ConditionReview2 from '../screens/Landing/Conditions/ConditionReview2.js';
import AddNewCondition2 from '../screens/Landing/Conditions/AddNewCondition2.js';
import DeleteCondition from '../screens/Landing/Conditions/DeleteCondition.js';
import Connect2 from '../screens/Landing/Connect2.js';
import PAM2 from '../screens/Landing/PAM2.js';
import Settings from '../screens/Landing/Settings.js';
import DietData from '../screens/Landing/DietData.js';
import ActivityTracker from '../screens/Landing/ActivityTracker.js';
import ChatBot from '../screens/Landing/ChatBot.js';
import HealthData from '../screens/Landing/HealthData.js';
import Diet from '../screens/Landing/Diet.js';
import InputMeal from '../screens/Landing/InputMeal.js';

const ScreenNavigator = createStackNavigator({
    Welcome: {
        screen: StartMain,
        navigationOptions: {
            headerShown: false,
        },
    },
    GI: {
        screen: GeneralInformation,
        navigationOptions: {
            headerShown: false,
        },
    },
    DI: {
        screen: DemographicInformation,
        navigationOptions: {
            headerShown: false,
        },
    },
    SMedication: {
        screen: MedicationMain,
        navigationOptions: {
            headerShown: false,
        },
    },
    SAddNewMedication: {
        screen: AddNewMedication,
        navigationOptions: {
            headerShown: false,
        },
    },
    SMedicationReview: {
        screen: MedicationReview,
        navigationOptions: {
            headerShown: false,
        },
    },
    SHealthConditionSuggestions:{
        screen: HealthConditionSuggestions,
        navigationOptions: {
            headerShown: false,
        },
    },
    SAddHealthCondition:{
        screen: AddHealthCondition,
        navigationOptions: {
            headerShown: false,
        },
    },
    SHealthConditionsReview:{
        screen: HealthConditionsReview,
        navigationOptions: {
            headerShown: false,
        },
    },
    SConnectBluetooth:{
        screen: ConnectBluetooth,
        navigationOptions: {
            headerShown: false,
        },
    },
    SPAM:{
        screen: PAM,
        navigationOptions: {
            headerShown: false,
        },
    },
    SProfileReview:{
        screen: ProfileReview,
        navigationOptions: {
            headerShown: false,
        },
    },
    Landing:{
        screen: LandingPage,
        navigationOptions: {
            headerShown: false,
        },
    },
    Profile:{
        screen: Profile,
        navigationOptions: {
            headerShown: false,
        },
    },
    GeneralInformation2:{
        screen: GeneralInformation2,
        navigationOptions: {
            headerShown: false,
        },
    },
    DemographicInformation2:{
        screen: DemographicInformation2,
        navigationOptions: {
            headerShown: false,
        },
    },
    MedicationReview2:{
        screen: MedicationReview2,
        navigationOptions: {
            headerShown: false,
        },
    },
    AddNewMedication2:{
        screen: AddNewMedication2,
        navigationOptions: {
            headerShown: false,
        },
    },

    DeleteMedication:{
        screen: DeleteMedication,
        navigationOptions: {
            headerShown: false,
        },
    },
    ConditionReview2:{
        screen: ConditionReview2,
        navigationOptions: {
            headerShown: false,
        },
    },
    AddNewCondition2:{
        screen: AddNewCondition2,
        navigationOptions: {
            headerShown: false,
        },
    },
    DeleteCondition:{
        screen: DeleteCondition,
        navigationOptions: {
            headerShown: false,
        },
    },
    Connect2:{
        screen: Connect2,
        navigationOptions: {
            headerShown: false,
        },
    },
    PAM2:{
        screen: PAM2,
        navigationOptions: {
            headerShown: false,
        },
    },
    Settings:{
        screen: Settings,
        navigationOptions: {
            headerShown: false,
        },
    },
    DietData:{
        screen: DietData,
        navigationOptions: {
            headerShown: false,
        },
    },
    ActivityTracker:{
        screen: ActivityTracker,
        navigationOptions: {
            headerShown: false,
        },
    },
    ChatBot:{
        screen: ChatBot,
        navigationOptions: {
            headerShown: false,
        },
    },
    HealthData:{
        screen: HealthData,
        navigationOptions: {
            headerShown: false,
        },
    },
    Diet:{
        screen: Diet,
        navigationOptions: {
            headerShown: false,
        },
    },
    InputMeal:{
        screen: InputMeal,
        navigationOptions: {
            headerShown: false,
        },
    },





});

export default createAppContainer(ScreenNavigator);

