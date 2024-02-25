import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

export default function ProgressBar(){
    return (
    <View>
        <Image style={styles.bar} source={require('../../../assets/progressbar-base.png')}/>
        <Image style={styles.bar} source={require('../../../assets/progressbar-top.png')}/>
    </View>

    )
}

const styles = StyleSheet.create({
    bar:{
        // marginTop:30,
        width:'100%',
    }
})