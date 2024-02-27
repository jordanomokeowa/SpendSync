import React, { Dispatch, useState } from 'react';
import { Button, Overlay, Icon } from '@rneui/themed';
import { View, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import { RemoveAllSpending } from '../../services/SpendService';

export default function  HeaderOptionsMenu({visible, toggleOverlay, setLastUpdated}:
    {
        visible: boolean, 
        toggleOverlay: () => void,
        setLastUpdated: Dispatch<React.SetStateAction<Date>>
    }) {

    const onDelete = async () => {
        await RemoveAllSpending();
        var time: Date = new Date();
        setLastUpdated(time);
        toggleOverlay();
    }

    return (  
        <>
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
            <Button
                icon={
                <Icon
                    name="wrench"
                    type="font-awesome"
                    color="white"
                    size={25}
                    iconStyle={{ marginRight: 10 }}
                />
                }
                title="Delete All?"
                onPress={onDelete}
            />
            </Overlay>
        </>
    )
}
