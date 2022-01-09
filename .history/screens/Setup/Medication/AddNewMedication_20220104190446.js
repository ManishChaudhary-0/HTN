

import React, { useState, useEffect, useCallback } from 'react';
import { Pressable, View, Text, StyleSheet, SafeAreaView, Picker, FlatList } from 'react-native';
import { Appbar } from 'react-native-paper';

import DatePicker from 'react-native-date-picker';
import NumberPlease from "react-native-number-please";
// import { Dropdown } from 'react-native-material-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';

//import {Autocomplete, withKeyboardAwareScrollView} from "react-native-dropdown-autocomplete"; 
//import AutocompleteInput from 'react-native-autocomplete-input';
import Autocomplete from 'react-native-autocomplete-input';


import { render } from 'react-dom';
import { mdiBorderColor } from '@mdi/js';
import database from 'mime-db';
import { data } from 'browserslist';
import { ScrollView } from 'react-native';

const AddNewMedication = props => {

    const data1 = [
        "LEVO-T (Oral Pill)",
        "CLEOCIN-T (Topical)",
        "Stavudine (Oral Pill)",
        "IONIL T (Shampoo)",
        "Sipuleucel-T (Injectable)",
        "ALA SEB T (Shampoo)",
        "X-SEB T PLUS (Shampoo)",
        "X-SEB T PEARL (Shampoo)",
        "B-CARO-T (Oral Pill)",
        "Stavudine (Oral Liquid)",
        "Levothyroxine (Oral Pill)",
        "TOPROL XR (Oral Pill)",
        "TENORMIN (Oral Pill)",
        "Hydrochlorothiazide/Triamterene (Oral Pill)",
        "traMADol (Oral Pill)",
        "TRICOR (Oral Pill)",
        "Sulfamethoxazole/Trimethoprim (Oral Pill)",
        "TIAZAC XR (Oral Pill)",
        "TAZTIA XR (Oral Pill)",
        "traZODone (Oral Pill)",
        "Tamsulosin (Oral Pill)",
        "TAMIFLU (Oral Pill)",
        "TYLENOL WITH CODEINE (Oral Pill)",
        "TRI-SPRINTEC 28 DAY (Pack)",
        "Topiramate (Oral Pill)",
        "TOPAMAX (Oral Pill)",
        "Tadalafil (Oral Pill)",
        "BACTROBAN (Topical)",
        "Mupirocin (Topical)",
        "K-TAB XR (Oral Pill)",
        "Triamcinolone (Topical)",
        "Testosterone (Topical)",
        "ANDROGEL (Topical)",
        "TESTIM (Topical)",
        "tiZANidine (Oral Pill)",
        "CENTANY (Topical)",
        "Betamethasone/Clotrimazole (Topical)",
        "Estradiol (Transdermal)",
        "Benzoyl peroxide/Clindamycin (Topical)",
        "LOTRISONE (Topical)",
        "Tiotropium (Inhalant)",
        "BENZACLIN (Topical)",
        "DUAC (Topical)",
        "TRILIPIX (Oral Pill)",
        "Clobetasol (Topical)",
        "Hydrochlorothiazide/Telmisartan (Oral Pill)",
        "Terazosin (Oral Pill)",
        "VIVELLE (Transdermal)",
        "Travoprost (Ophthalmic)",
        "TRAVATAN (Ophthalmic)",
        "ORTHO TRI-CYCLEN LO 28 DAY (Pack)",
        "Temazepam (Oral Pill)",
        "Clindamycin (Topical)",
        "LATISSE (Topical)",
        "TRIDERM (Topical)",
        "Thyroid (USP) (Oral Pill)",
        "ALORA (Transdermal)",
        "Timolol (Ophthalmic)",
        "TIMOPTIC (Ophthalmic)",
        "Tolterodine XR (Oral Pill)",
        "ARMOUR THYROID (Oral Pill)",
        "fentaNYL (Transdermal)",
        "DURAGESIC (Transdermal)",
        "metroNIDAZOLE (Topical)",
        "TENORETIC (Oral Pill)",
        "Triamcinolone (Nasal)",
        "TEMOVATE (Topical)",
        "Telmisartan (Oral Pill)",
        "TESSALON PERLES (Oral Pill)",
        "Ketoconazole (Topical)",
        "Tretinoin (Topical)",
        "TESSALON (Oral Pill)",
        "TRANDATE (Oral Pill)",
        "KURIC (Topical)",
        "TRIGLIDE (Oral Pill)",
        "DIFFERIN (Topical)",
        "Adapalene (Topical)",
        "Nitroglycerin (Sublingual)",
        "RETIN-A (Topical)",
        "Terbinafine (Oral Pill)",
        "TOBRADEX (Ophthalmic)",
        "Dexamethasone/Tobramycin (Ophthalmic)",
        "Acetaminophen/traMADol (Oral Pill)",
        "Hydrocortisone (Topical)",
        "Sulfamethoxazole/Trimethoprim (Oral Liquid)",
        "TRI-LO-SPRINTEC 28 DAY (Pack)",
        "TRILEPTAL (Oral Pill)",
        "Lidocaine (Topical)",
        "Nystatin/Triamcinolone (Topical)",
        "Betamethasone (Topical)",
        "Fluocinonide (Topical)",
        "Diclofenac (Topical)",
        "Mometasone (Topical)",
        "ELOCON (Topical)",
        "CLINDAMAX (Topical)",
        "Tamoxifen (Oral Pill)",
        "Nystatin (Topical)",
        "Terconazole (Vaginal)",
        "Desonide (Topical)",
        "Polymyxin B/Trimethoprim (Ophthalmic)",
        "LIDODERM (Topical)",
        "TEKTURNA (Oral Pill)",
        "ORTHO TRI-CYCLEN 28 DAY (Pack)",
        "DESOWEN (Topical)",
        "CLIMARA (Transdermal)",
        "Dorzolamide/Timolol (Ophthalmic)",
        "Tacrolimus (Oral Pill)",
        "Sodium fluoride (Toothpaste)",
        "Ethinyl estradiol/Norelgestromin (Transdermal)",
        "Torsemide (Oral Pill)",
        "TRIVORA 28 DAY (Pack)",
        "Acyclovir (Topical)",
        "ZOVIRAX (Topical)",
        "PREVIDENT (Toothpaste)",
        "Ciclopirox (Topical)",
        "Silver sulfadiazine (Topical)",
        "SSD (Topical)",
        "SILVADENE (Topical)",
        "THERMAZENE (Topical)",
        "METROGEL (Topical)",
        "Efavirenz/Emtricitabine/Tenofovir disoproxil (Oral Pill)",
        "Tetracycline (Oral Pill)",
        "TOPICORT (Topical)",
        "Desoximetasone (Topical)",
        "Azelate (Topical)",
        "VOLTAREN (Topical)",
        "TRETIN X (Topical)",
        "Imiquimod (Topical)",
        "ALDARA (Topical)",
        "Econazole (Topical)",
        "TOBREX (Ophthalmic)",
        "Tobramycin (Ophthalmic)",
        "TAVIST NON-SEDATING (Oral Pill)",
        "Tazarotene (Topical)",
        "TAZORAC (Topical)",
        "Scopolamine (Transdermal)",
        "TRANSDERM SCOP (Transdermal)",
        "TOFRANIL (Oral Pill)",
        "Fluocinolone (Topical)",
        "Fluorouracil (Topical)",
        "Emtricitabine/Tenofovir disoproxil (Oral Pill)",
        "TRUVADA (Oral Pill)",
        "PROCTOZONE HC (Topical)",
        "ANUSOL HC (Topical)",
        "CHANTIX FIRST MONTH OF THERAPY (Pack)",
        "FINACEA (Topical)",
        "THALITONE (Oral Pill)",
        "DIPROLENE (Topical)",
        "TEGretol (Oral Pill)",
        "Methylphenidate (Transdermal)",
        "DAYTRANA (Transdermal)",
        "Permethrin (Topical)",
        "ACTICIN (Topical)",
        "ELIMITE (Topical)",
        "CLINDAGEL (Topical)",
        "Fluticasone (Topical)",
        "CUTIVATE (Topical)",
        "OLUX (Topical)",
        "Urea (Topical)",
        "TAPAZOLE (Oral Pill)",
        "METROCREAM (Topical)",
        "Brimonidine/Timolol (Ophthalmic)",
        "CHANTIX CONTINUING MONTHS OF THERAPY (Pack)",
        "TRILYTE (Oral Solution Powder)",
        "traMADol XR (Oral Pill)",
        "Estradiol (Topical)",
        "PROTOPIC (Topical)",
        "Tacrolimus (Topical)",
        "Adapalene/Benzoyl peroxide (Topical)",
        "EPIDUO (Topical)",
        "Lidocaine/Prilocaine (Topical)",
        "Aluminum chloride (Topical)",
        "FLECTOR (Topical)",
        "DRYSOL (Topical)",
        "ELIDEL (Topical)",
        "Pimecrolimus (Topical)",
        "TRAVEL-EASE (Oral Pill)",
        "LOCOID (Topical)",
        "Trandolapril/Verapamil XR (Oral Pill)",
        "TARKA XR (Oral Pill)",
        "Hydrocortisone/Pramoxine (Topical)",
        "Sulfacetamide/Sulfur (Topical)",
        "Theophylline XR (Oral Pill)",
        "Triazolam (Oral Pill)",
        "PRAMOSONE (Topical)",
        "TRIDESILON (Topical)",
        "Clindamycin/Tretinoin (Topical)",
        "ZIANA (Topical)",
        "Halobetasol (Topical)",
        "ULTRAVATE (Topical)",
        "TEGretol XR (Oral Pill)",
        "LOKARA (Topical)",
        "Nitroglycerin (Transdermal)",
        "NITRO-DUR (Transdermal)",
        "PENLAC NAIL LACQUER (Topical)",
        "AVITA (Topical)",
        "NYSTOP (Topical)",
        "NYAMYC (Topical)",
        "MINITRAN (Transdermal)",
        "BENZAMYCIN (Topical)",
        "Benzoyl peroxide/Erythromycin (Topical)",
        "DENTA 5000 PLUS (Toothpaste)",
        "Dapsone (Topical)",
        "ACZONE (Topical)",
        "CORMAX (Topical)",
        "DERMA-SMOOTHE FS (Topical)",
        "Estradiol/Norethindrone (Transdermal)",
        "COMBIPATCH (Transdermal)",
        "PANDEL (Topical)",
        "LOPROX (Topical)",
        "TYLENOL (Oral Pill)",
        "TACTINAL (Oral Pill)",
        "CARAC (Topical)",
        "CLOBEX (Topical)",
        "Naftifine (Topical)",
        "NAFTIN (Topical)",
        "TRANXENE (Oral Pill)",
        "Teriparatide (Injectable)",
        "Triamcinolone (Oral Paste)",
        "Betamethasone/Calcipotriene (Topical)",
        "TACLONEX (Topical)",
        "FLUORIDEX (Toothpaste)",
        "DEL-BETA (Topical)",
        "Loteprednol etabonate/Tobramycin (Ophthalmic)",
        "XYLOCAINE (Topical)",
        "REGENECARE (Topical)",
        "REFISSA (Topical)",
        "Rivastigmine (Transdermal)",
        "EXELON (Transdermal)",
        "Lactate (Topical)",
        "Calcipotriene (Topical)",
        "NYDAMAX (Topical)",
        "Sulfacetamide (Topical)",
        "SYNALAR (Topical)",
        "TILIA FE (Pack)",
        "EMEND TRI-FOLD PACK (Pack)",
        "DENAVIR (Topical)",
        "Penciclovir (Topical)",
        "Erythromycin (Topical)",
        "AVAGE (Topical)",
        "EFUDEX (Topical)",
        "Tenofovir disoproxil (Oral Pill)",
        "TEKTURNA HCT (Oral Pill)",
        "TRI-LEGEST 28 DAY (Pack)",
        "LAC-HYDRIN (Topical)",
        "KLARON (Topical)",
        "Trandolapril (Oral Pill)",
        "TREXIMET (Oral Pill)",
        "TAMBOCOR (Oral Pill)",
        "OXISTAT (Topical)",
        "Oxiconazole (Topical)",
        "Salicylic acid (Topical)",
        "Abacavir/lamiVUDine (Oral Pill)",
        "ERY-TAB (Oral Pill)",
        "EVOCLIN (Topical)",
        "ACANYA (Topical)",
        "DOVONEX (Topical)",
        "Tinidazole (Oral Pill)",
        "TINDAMAX (Oral Pill)",
        "Trospium XR (Oral Pill)",
        "Alclometasone (Topical)",
        "EVAMIST (Topical)",
        "TRUSOPT (Ophthalmic)",
        "TUSSICAPS XR (Oral Pill)",
        "lamiVUDine/Zidovudine (Oral Pill)",
        "ALLER-TEC (Oral Liquid)",
        "AZELEX (Topical)",
        "Retapamulin (Topical)",
        "ALTABAX (Topical)",
        "METROLOTION (Topical)",
        "SALEX (Topical)",
        "SALACYN (Topical)",
        "TOVIAZ XR (Oral Pill)",
        "Estradiol/Levonorgestrel (Transdermal)",
        "CLIMARA PRO (Transdermal)",
        "Tolterodine (Oral Pill)",
        "Potassium nitrate/Sodium fluoride (Toothpaste)",
        "FLUORIDEX DAILY DEFENSE SENSITIVITY (Toothpaste)",
        "TERAZOL 3 (Vaginal)",
        "DIVIGEL (Topical)",
        "TIKOSYN (Oral Pill)",
        "VANOS (Topical)",
        "ATRALIN (Topical)",
        "Tapentadol (Oral Pill)",
        "Diflorasone (Topical)",
        "TRILEPTAL (Oral Liquid)",
        "Oxybutynin (Transdermal)",
        "OXYTROL (Transdermal)",
        "Testosterone (Injectable)",
        "Benzoyl peroxide (Topical)",
        "ESTROGEL (Topical)",
        "ELESTRIN (Topical)",
        "Clotrimazole (Topical)",
        "Trihexyphenidyl (Oral Pill)",
        "GERI-HYDROLAC (Topical)",
        "AMLACTIN (Topical)",
        "LACLOTION (Topical)",
        "ACLOVATE (Topical)",
        "Podofilox (Topical)",
        "LOTRIMIN (Topical)",
        "CRUEX ANTIFUNGAL (Topical)",
        "Flurandrenolide (Topical)",
        "CORDRAN (Topical)",
        "LUXIQ (Topical)",
        "NORITATE (Topical)",
        "Nicotine (Transdermal)",
        "HABITROL (Transdermal)",
        "NICODERM C-Q (Transdermal)",
        "Sertaconazole (Topical)",
        "ERTACZO (Topical)",
        "Trimethoprim (Oral Pill)",
        "TYCOLENE (Oral Pill)",
        "AVAR (Topical)",
        "TRI-PREVIFEM 28 DAY (Pack)",
        "Calcitriol (Topical)",
        "VECTICAL (Topical)",
        "TEMODAR (Oral Pill)",
        "Temozolomide (Oral Pill)",
        "Nitroglycerin (Mucosal)",
        "Trimethobenzamide (Oral Pill)",
        "TIGAN (Oral Pill)",
        "Miconazole/Petrolatum/Zinc oxide (Topical)",
        "VUSION (Topical)",
        "WESTCORT (Topical)",
        "NATURE-THROID (Oral Pill)",
        "THERAMYCIN (Topical)",
        "TYLENOL (Oral Liquid)",
        "Clocortolone (Topical)",
        "CLODERM (Topical)",
        "Terbutaline (Oral Pill)",
        "SANTYL (Topical)",
        "Collagenase (Topical)",
        "Gentamicin (Topical)",
        "SENNA-TIME (Oral Pill)",
        "TRIZIVIR (Oral Pill)",
        "Abacavir/lamiVUDine/Zidovudine (Oral Pill)",
        "lamiVUDine (Oral Pill)",
        "PSORCON (Topical)",
        "APEXICON (Topical)",
        "Trifluridine (Ophthalmic)",
        "CORTAID (Topical)",
        "TRACLEER (Oral Pill)",
        "Hydrocortisone/Iodoquinol (Topical)",
        "CORTIZONE (Topical)",
        "DERMAZENE (Topical)",
        "SOLARAZE (Topical)",
        "EMGEL (Topical)",
        "ERYGEL (Topical)",
        "EMCIN CLEAR (Topical)",
        "ERY (Topical)",
        "DEPO-TESTOSTERONE (Injectable)",
        "DESONATE (Topical)",
        "TARCEVA (Oral Pill)",
    ];
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


      
    const Handler = text => {
       // setAPISearchMed(text)
        // FETCH FROM API URL AND PUT TEXT IN HTTP -> SORT INCOMING DATA
        // setAPI(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?maxList=1000&terms=${APISearchMed}&ef=DISPLAY_NAME,STRENGTHS_AND_FORMS`);
        // console.log(`https://clinicaltables.nlm.nih.gov/api/rxterms/v3/search?maxList=1000&terms=${APISearchMed}&ef=DISPLAY_NAME,STRENGTHS_AND_FORMS`);


        getmedAPIData(text);
    };

    const getmedAPIData = async(text) => {

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
            console.log(apiMedsFound);

            var NAMES = [];
            var DOSES = [];

            if (apiMedsFound > 1000){
                setApiMedsFound(1000);
            }

            for(let i = 0; i < apiMedsFound; i++){
                NAMES.push(DATAJSON[2].DISPLAY_NAME[i]);
                DOSES.push(DATAJSON[2].STRENGTHS_AND_FORMS[i]);
            }

            setMedNames(NAMES);
            setMedDoseages(DOSES);


            console.log(":-----------------------------------------------------------------------------------------:");
            console.log(MedNames);
            console.log(MedDoseages)
            console.log(":-----------------------------------------------------------------------------------------:");

        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(true);
        }

    }


    // adds them up out side the scopes
    //                                                  console.log(MedNames)

    // const API_NAMES_DATA = Array("".concat(MedNames));
    // console.log(API_NAMES_DATA);
    //console.log(MedDoseages)


    useEffect(() => {
        console.warn("Testing")
     //  setMedNames(["Adderall", "HYDROS"]);
     //  setMedDoseages([]);

     // set limit to the amount of changes, only to cchange when onchangeText is preformed

        getmedAPIData();
    }, []);


    // D-BOUNCE and Throttle

    console.log(Array.isArray(MedNames));

    return(

        <View>

            <SafeAreaView style={{marginTop: 70, marginRight: 0, marginLeft: 0}}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.Content title="Add New Medication" titleStyle={{fontSize: 24}}/>
                </Appbar.Header>
            </SafeAreaView>
                        

            <View>



                <View style={styles.autocompleteContainer}>

                    {/* <Autocomplete containerStyle={width='20%'} 
                        style={styles.input} 
                        handleSelectItem={(item) => this.handleSelectItem(item)}
                        //data={MedNames}
                        onChangeText={Handler}
                        fetchDataUrl={Handler}
                        valueExtractor={item => item}
                        placeholder="Add New Medication"
                        minimumCharactersCount={1}
                        placeholderColor="#000000"
                        inputContainerStyle={styles.inputContainer}
                        
                    /> */}

                    {/* <AutocompleteInput
                        data={MedNames}
                        onChangeText={Handler}
                        value={Medication}
                        listStyle={{color:'#696969'}}
                        keyboardShouldPersistTaps='always'
                        flatListProps={{
                            keyExtractor: (item) => item,
                            renderItem: ({ item }) => <Text>{item}</Text>
                        }}
                    />
                     */}


                    <Autocomplete
                        autoCapitalize="none"
                        autoCorrect={true}
                        containerStyle={styles.autocompleteContainer2}
                        // Data to show in suggestion
                        data={MedNames}
                        // Default value if you want to set something in input
                        // defaultValue={
                        //     JSON.stringify(selectedValue) === '{}' ?
                        //     '' :
                        //     selectedValue
                        // }
                        // Onchange of the text changing the state of the query
                        // Which will trigger the findFilm method
                        // To show the suggestions
                        onChangeText={Handler}
                        placeholder="Enter Medication"
                        renderItem={({item}) => (
                            // For the suggestion view
                            <TouchableOpacity
                            onPress={() => {
                                setMedication(item);
                                //setFilteredFilms([]);
                            }}>
                            <Text style={styles.itemText}>
                                {item}
                            </Text>
                            </TouchableOpacity>
                        )}
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

                <View style={{marginVertical:10}}>


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
        
    );
        
}

const styles = StyleSheet.create({
    itemText: {
        fontSize: 15,
        paddingTop: 5,
        paddingBottom: 5,
        margin: 2,
      },
    autocompleteContainer2: {
        flex: 1,
        left: 0,
        width: 500,
        position: 'relative',
        alignItems:'center',
        right: 0,
        top: 10,
        paddingHorizontal: 5,
        zIndex: 1
    },
    autocompletesContainer: {
        marginTop: 20,
        zIndex: 1,
        width: "100%",
        height: "10%",
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    input: {
        maxHeight: 90,
        borderLeftWidth: 90,
        width: 10,
        height: '50%',
        borderColor: "#000000",
        borderWidth: 2,
        borderRadius: 10,
    },
    inputContainer: {
        display: "flex",
        flexShrink: 0,
        flexGrow: 0,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "#c7c6c1",
        paddingVertical: 13,
        width: "100%",
        justifyContent: "center"
    },
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
