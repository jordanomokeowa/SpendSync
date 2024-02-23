import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';


export default function App() {

  const [value, setValue] = useState<string | null>(null)

  const getItem = async()  => {
    await AsyncStorage.setItem("test", "testvalue");
    var result = await AsyncStorage.getItem("test");
    setValue(result);
  }


  useEffect(() => {
    getItem()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <Text style={styles.title}>10 Days Till Payday: </Text>
        <Text style={styles.title}>£400 remaining target</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Spending Summary {value}</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-around',
    backgroundColor:'#1F2544',
  },
  summaryContainer: {
    backgroundColor: '#474F7A',
    width: '100%',
    height: '20%',
    justifyContent:'center',
    alignItems: 'center'
  },
  bodyContainer: {
    justifyContent:'center',
    height: '80%',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  }
});

// COLOR SCHEME v0.1
//#1F2544 -pr
//#474F7A -sc
//#81689D - ter
//#FFD0EC - 4th
