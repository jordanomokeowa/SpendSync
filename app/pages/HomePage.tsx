import {StyleSheet, Text, View } from 'react-native';
import Header from '../components/utils/Header';
import HomeHero from '../components/HomePage/HomeHero';
import HomePageList from '../components/HomePage/HomePageList';
import React, { Dispatch } from 'react';

export default function HomePage({updated, setLastUpdated}: {updated: Date, setLastUpdated: Dispatch<React.SetStateAction<Date>>}){
    return (
    <View style={styles.wrapper}>
        <Header setLastUpdated={setLastUpdated} />
        <HomeHero updated={updated} />
        <HomePageList updated={updated} />
    </View>)
}

const styles = StyleSheet.create({
    wrapper: {
        maxHeight:'100%',
        display:'flex',
        flex:1
    }
})