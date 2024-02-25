import { Image } from '@rneui/themed';
import { Text, View, StyleSheet } from 'react-native'; 
import { useAssets } from 'expo-asset';
import React from 'react';
import { Menu, MoreVertical } from "react-native-feather";

export default function Header(){


    return (        
    <View style={styles.wrapper}>
        <Menu width={40} height={40} color={'#1F2544'}/>
        <MoreVertical width={40} height={40} color={'#1F2544'}/>
    </View>)
} 

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        borderWidth: 1
    }
})