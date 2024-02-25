import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {
    useFonts,
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  } from '@expo-google-fonts/lato';
import ProgressBar from '../utils/ProgressBar';

export default function HomeHero(){
    let [fontsLoaded] = useFonts({
        Lato_100Thin,
        Lato_100Thin_Italic,
        Lato_300Light,
        Lato_300Light_Italic,
        Lato_400Regular,
        Lato_400Regular_Italic,
        Lato_700Bold,
        Lato_700Bold_Italic,
        Lato_900Black,
        Lato_900Black_Italic,
      });

    return (
    <View style={styles.wrapper}>
        <View style={styles.availableWrapper}>
            <Text style={styles.availableText}>Available</Text>
        </View>

        
        <View style={styles.valueWrapper}>
            <Text 
            style={styles.valuePrimary}>£400</Text><Text style={styles.valueSecondary}>.25</Text> 
        </View>

        <ProgressBar />
        

    </View>)
}

const styles = StyleSheet.create({
    wrapper: {
        height: '20%',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width:'80%',
        marginRight: 'auto',
        marginLeft:'auto',
        borderWidth:1,
        flexWrap:'wrap',
        gap:10
    },
    valueWrapper:{
        height:'40%',
        display:'flex',
        flexDirection:'row',
        borderWidth:1,
        alignItems:'flex-end',
        textAlignVertical:'center'

    },
    availableWrapper: {
      height:'40%',
      alignSelf:'center',
      display:'flex',
      justifyContent:'flex-end',

    },
    availableText:{
        fontSize:20,
        fontFamily:'Lato_300Light',
        color:'white',
    },
    valuePrimary: {
        fontSize:70,
        lineHeight:70,
        fontFamily: 'Lato_400Regular',
        color:'white',
        includeFontPadding:false,
        backgroundColor:'red'
    },
    valueSecondary:{
        fontSize:20,
        color:'white'
    }
})