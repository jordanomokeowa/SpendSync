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
            style={styles.valuePrimary}>£4000</Text><Text style={styles.valueSecondary}>.25</Text> 
        </View>

        <ProgressBar />

        <Text style={styles.updatedText}>Last Updated 12:59, 21 Feb 24</Text>

        <View style={styles.widgetBox}>
            <View>
                <Text>1st Mar 224</Text>
                <Text>Next Payment Date</Text>
            </View>
            <View>

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
        width:'75%',
        marginRight: 'auto',
        marginLeft:'auto',
        borderWidth:1,
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
        transform: [{translateY:10}]

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
        // marginTop: 
        width:'100%'
    }
})