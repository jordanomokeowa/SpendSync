import { useFonts, Lato_300Light, } from '@expo-google-fonts/lato';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import SpendData from '../../data/SpendData';
import SpendListItem from './SpendListItem';
import SpendItem from '../../interfaces/SpendItem';


export default function HomePageList(){

    const [fontsLoaded] = useFonts({
    Lato_300Light
    });

    if (!fontsLoaded) {
    return <Text>Loading...</Text>;
    }

    var sortedData = SpendData.sort((a, b) => {return a.dueDate.getTime() - b.dueDate.getTime()});

    const GroupDataByDate = (data: SpendItem[]) => {
        var date = new Date('0000-01-01');
        for(let i = 0; i< sortedData.length; i++){
            var itemDate = sortedData[i].dueDate;
            if(itemDate > date){
                sortedData[i].dateParent = true;
                date = sortedData[i].dueDate
            }
        }
    }

    GroupDataByDate(sortedData);

    return (
    <View style={styles.wrapper}>
        <Text style={styles.upcomingText} >Upcoming Payments</Text>
        <FlatList
        keyExtractor={(_, index) => index.toString() }
        data={sortedData} 
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


