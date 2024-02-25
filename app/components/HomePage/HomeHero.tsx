import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function HomeHero(){
    return (
    <View style={styles.wrapper}>
        <Text>Available</Text><Text>400.25</Text> 
    </View>)
}

const styles = StyleSheet.create({
    wrapper: {
        height: '20%',
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width:'80%'
    }
})