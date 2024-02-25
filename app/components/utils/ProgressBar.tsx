import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

export default function ProgressBar(){
    return (
    <View style={styles.barWrapper}>


        <View style={[styles.barBase, styles.bar]}>
        
        </View>

        <View style={[styles.barTop, styles.bar]}>
        
        </View>    
    
    {/* <Image  source={require('../../../assets/progressbar-base.png')}/>
    <Image  source={require('../../../assets/progressbar-top.png')}/> */}
    
    </View>
    )
}

const styles = StyleSheet.create({
    barWrapper:{
        position:'relative',
        height:'auto',
        width:'100%',
        overflow:'visible'
    },
    bar:{
        height: 8,
        // backgroundColor: 'green',
        borderRadius:10,
        position:'absolute',
    },
    barBase:{
        backgroundColor: '#1F2544',
        width:'100%'
    },
    barTop:{
        backgroundColor:'#FFD0EC',
        width:'40%',
        left:0
    }
})