import { useFonts, Lato_300Light, } from '@expo-google-fonts/lato';
import React, { useEffect, useState } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SpendData from '../../data/SpendData';
import SpendListItem from './SpendListItem';
import SpendItem from '../../interfaces/SpendItem';
import { GetSpendItems } from '../../services/SpendService';


export default function HomePageList({updated}:{updated:Date}){

    const [spendList, setSpendList] = useState<SpendItem[]>([]);
    const [fontsLoaded] = useFonts({Lato_300Light});

    const GetDataByDate = async () => {
        try {
            var items = await GetSpendItems();
            console.log("getitemsbydate:", items);
            setSpendList(items);

            
        } catch (error) {
            console.error('Error fetching spend items:', error);
        }
    }

    useEffect(() => {
        GetDataByDate();
    }, [])

    useEffect(() => {
        GetDataByDate();
    }, [updated])


    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
    <View style={styles.wrapper}>
        <Text style={styles.upcomingText} >Upcoming Payments</Text>
        <FlatList
        keyExtractor={(_, index) => index.toString() }
        data={spendList} 
        renderItem={(item) => <SpendListItem item={item.item}/>}>        
        </FlatList>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor:'#1F2544',
        flexGrow:1,
        flex:1,
    },
    upcomingText:{
        textAlign:'center',
        marginVertical:20,
        fontFamily:'Lato_300Light',
        fontSize:24,
        textDecorationLine:'underline',
        color:'white'
    }
})


