import {StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import HomeHero from '../components/HomePage/HomeHero';
import HomePageList from '../components/HomePage/HomePageList';
import React from 'react';

export default function HomePage(){
    return (
    <View style={styles.wrapper}>
        <Header/>
        <HomeHero />
        <HomePageList />
    </View>)
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%'
    }
})