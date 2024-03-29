import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {
    useFonts,
    Lato_300Light,
    Lato_400Regular,
  } from '@expo-google-fonts/lato';
import ProgressBar from '../utils/ProgressBar';
import {GetSpendTotal} from '../../services/SpendService';

export default function HomeHero({updated}:{updated: Date}){
    const [total, setTotal] = useState<number>();
    let [fontsLoaded] = useFonts({Lato_300Light, Lato_400Regular});

    const fetchData = async () => { 
        var result = await GetSpendTotal();
        setTotal(result);
    }

    useEffect(() => {
        fetchData();
    },[]);

    useEffect(() => {
        fetchData();
    },[updated])


    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
    <View style={styles.wrapper}>
        <View style={styles.availableWrapper}>
            <Text style={styles.availableText}>Available</Text>
        </View>

        
        <View style={styles.valueWrapper}>
            <Text 
            style={styles.valuePrimary}>£{total}</Text><Text style={styles.valueSecondary}>.25</Text> 
        </View>

        <ProgressBar />

        <Text style={styles.updatedText}>Last Updated {updated.toDateString()}</Text>

        <View style={styles.widgetBox}>
            <View>
                <Text style={[styles.widgetText, styles.widgetTextPrimary]}>1st Mar 24</Text>
                <Text style={[styles.widgetText, styles.widgetTextSecondary]}>Next Payment Date</Text>
            </View>
            <View>
                <Text style={[styles.widgetText, styles.widgetTextPrimary]}>3 Days</Text>
                <Text style={[styles.widgetText, styles.widgetTextSecondary]}>Till Payday</Text>
            </View>
        </View>
        

    </View>)
}

const styles = StyleSheet.create({
    wrapper: {
        height: 'auto',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'flex-end',
        flexDirection:'row',
        width:'80%',
        marginRight: 'auto',
        marginLeft:'auto',
        flexWrap:'wrap',
    },
    valueWrapper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end'
    },
    availableWrapper: {
      display:'flex',
      justifyContent:'flex-end',

    },
    availableText:{
        fontSize:16,
        fontFamily:'Lato_300Light',
        color:'white',
    },
    valuePrimary: {
        fontSize:70,
        lineHeight:70,
        fontFamily: 'Lato_400Regular',
        color:'white',
        transform: [{translateY:10}],
    },
    valueSecondary:{
        fontSize:20,
        color:'white',
        fontFamily: 'Lato_400Regular',
    },
    updatedText:{
        fontFamily: 'Lato_300Light',
        fontSize:12,
        color:'white',
        marginLeft:'auto',
        marginRight:'auto'
    },
    widgetBox:{
        display:'flex',
        justifyContent: 'space-around',
        flexDirection:'row',
        marginVertical: 20,
        width:'100%'
    },
    widgetText:{
        textAlign:'center'
    },
    widgetTextPrimary:{
        fontSize:20,
        fontFamily:'Lato_300Light',
        color:'white',
        marginBottom:3
    },
    widgetTextSecondary:{
        fontSize:11,
        fontFamily:'Lato_300Light',
        color:'white'
    }
})