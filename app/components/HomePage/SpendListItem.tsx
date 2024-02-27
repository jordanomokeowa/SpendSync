import { Avatar, ListItem } from "@rneui/themed";
import SpendItem from "../../interfaces/SpendItem";
import React from "react";
import {StyleSheet, Text, View} from 'react-native';

const SpendListItem = ({item}: {item: SpendItem}) => {
    return (
    <View style={styles.wrapper}>

        <View style={styles.itemWrapper}>
            {item.dateParent && <Text style={styles.itemText}>{item.dueDate.toLocaleDateString()}</Text>}
            <ListItem containerStyle={styles.list}>
                <Avatar size={25} source={{uri:'https://cdn-icons-png.flaticon.com/512/858/858962.png'}} />
                <View style={styles.itemBox}>
                    <Text style={styles.itemText}>{item.value}</Text>
                    <Text style={styles.itemText}>{item.title}</Text>
                </View>

            </ListItem>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        width:'100%',
        marginBottom:10,
        display:'flex',
        alignItems:'center'
    },
    itemWrapper:{
        width:'90%',
        flexGrow:1,
    },
    itemBox:{
        flexGrow:1,
        flexDirection:'row',
        justifyContent:'space-between',
        flex:1
    },
    itemText:{
        color:'white',
        fontFamily:'Lato_300Light',
        fontSize:20,
        flex:1
    },
    list:{
        borderRadius:10,
        backgroundColor:'#81689D',
    }
})


export default SpendListItem

