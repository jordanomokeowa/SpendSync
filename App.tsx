import { StatusBar } from 'expo-status-bar';
import { Alert, BackgroundPropType, BaseBackgroundPropType, ButtonProps, Platform, SafeAreaView, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Button, darkColors, lightColors } from '@rneui/base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import  SpendItem from './app/interfaces/SpendItem';
import {Guid} from 'guid-ts';
import { Badge, ListItem, ThemeProvider, createTheme, useTheme } from '@rneui/themed';
import HomePage from './app/pages/HomePage';
import { StatusBar as NativeStatusBar } from 'react-native';

export default function App() {

  const [value, setValue] = useState<SpendItem[]>([]);

  const getSpendingList = async(): Promise<SpendItem[]> => {
    var result = await AsyncStorage.getItem("spending");
    if(result){
      return (JSON.parse(result))
    }
    return [];
  }

  const getItems= async()  => {
    var result = await AsyncStorage.getItem("spending");
    if(result){
      setValue(JSON.parse(result) as SpendItem[]);
    }
  }

  const addSpendItem = async() => {
    var test: SpendItem = {
      id: Guid.newGuid().toString(),
      title: "TEST TITLE",
      value: - 1000,
      dueDate: new Date('2024-02-01')
    };
    var list : SpendItem[] | undefined = await getSpendingList();

    list?.push(test)
    console.log(list);
    await AsyncStorage.setItem("spending", JSON.stringify(list));
    setValue(list);
  }

  const removeAllSpending = async() => {
    await AsyncStorage.removeItem("spending");
    setValue([]);
  }

  useEffect(() => {
    getItems();
  }, [])



  return (
    <SafeAreaView style={styles.wrapper}>

        {/* This button's color will now be the default iOS / Android blue. */}
          <View style={styles.summaryContainer}>
            <HomePage />
          </View>

      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop:NativeStatusBar.currentHeight,
    height:'100%',
    backgroundColor:'#474F7A'
  },
  summaryContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    height:'100%',
  }
});

// COLOR SCHEME v0.1
//#1F2544 -pr
//#474F7A -sc
//#81689D - ter
//#FFD0EC - 4th
