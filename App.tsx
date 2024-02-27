import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import  SpendItem from './app/interfaces/SpendItem';
import HomePage from './app/pages/HomePage';
import { StatusBar as NativeStatusBar, Button } from 'react-native';
import { PlusCircle } from "react-native-feather";
import { GetSpendItems, AddSpendItem } from './app/services/SpendService';

export default function App() {

  const [value, setValue] = useState<SpendItem[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());


  const getItems= async()  => {
    var result = await AsyncStorage.getItem("spending");

    if(result){
      setValue(JSON.parse(result) as SpendItem[]);
    }
  }

  const addSpendItem = async() => {
    await AddSpendItem();

    var time: Date = new Date();
    setLastUpdated(time);
  }

  const removeAllSpending = async() => {
    console.log("removing all spending")
    await AsyncStorage.removeItem("spending");
    setValue([]);
  }

  
  useEffect(() => {
    getItems();
  }, [])

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.summaryContainer}>
        <HomePage updated={lastUpdated} setLastUpdated={setLastUpdated} />
      </View>
      <View style={styles.actionButton}>
        <TouchableOpacity onPress={addSpendItem}  >
          <PlusCircle height={70} width={70} color={'white'}/>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop:NativeStatusBar.currentHeight,
    height:'100%',
    backgroundColor:'#474F7A',
    position:'relative'
  },
  summaryContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    height:'100%',
  },
  actionButton:{
    position:'absolute',
    bottom:0,
    right:0,
    paddingBottom:20,
    paddingRight:30,
  },
  button:{
    backgroundColor:'#474F7A',
    borderRadius:100
  }
});

// COLOR SCHEME v0.1
//#1F2544 -pr
//#474F7A -sc
//#81689D - ter
//#FFD0EC - 4th
