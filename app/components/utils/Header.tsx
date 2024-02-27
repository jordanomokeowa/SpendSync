import { View, StyleSheet, TouchableOpacity } from 'react-native'; 
import React, { Dispatch, useState } from 'react';
import { Menu, MoreVertical } from "react-native-feather";
import HeaderOptionsMenu from './HeaderOptionsMenu';

export default function Header({setLastUpdated}:{setLastUpdated: Dispatch<React.SetStateAction<Date>>}){
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (        
    <View style={styles.wrapper}>
        <Menu width={40} height={40} color={'#1F2544'}/>
        <TouchableOpacity onPress={toggleOverlay}>
            <MoreVertical width={40} height={40} color={'#1F2544'}/>
        </TouchableOpacity>
        <HeaderOptionsMenu visible={visible} toggleOverlay={toggleOverlay} setLastUpdated={setLastUpdated}/>
    </View>)
} 

const styles = StyleSheet.create({
    wrapper: {
        marginVertical:10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
    }
})