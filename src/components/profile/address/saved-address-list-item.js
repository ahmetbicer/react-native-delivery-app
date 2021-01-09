import React, { useState, useEffect } from 'react';
import { View, Pressable, StyleSheet, Alert } from 'react-native';
import { Checkbox, Title, RadioButton } from 'react-native-paper';
import colors from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import apiFetch from '../../../hooks/api-fetch';

export default function SavedAddressListItem(props) {
    const [icon, setIcon] = useState("home-variant");

    useEffect(() => {
        switch (props.data.address_type) {
            case "HOME":
                setIcon("home-variant")
                break;
            case "BUSINESS":
                setIcon("home-city")
                break;
            case "OTHER":
                setIcon("city-variant")
                break;
            default:
                setIcon("city-variant")
                break;
        }
    }, [])

    async function deleteAddress() {
        props.setLoading(true);
        const params = {
            endpoint: `address/${props.data.id}`,
            method: "DELETE",
            auth: true
        }

        await apiFetch(params)
        props.setLoading(false);
    }

    return (
        <View style={styles.list_item}>
            <Icon style={styles.list_item_left_icon} name={icon} color={"gray"} size={21} />
            <Title style={styles.list_right_item_title}>
                {props.data.address_type}
            </Title>
            <Title numberOfLines={1} style={styles.list_right_item_subtitle}>
                {props.data.address}
            </Title>
            <Pressable
                onPress={() => {
                    Alert.alert("", "Do you want to delete the address?", [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel'
                        },
                        {
                            text: 'OK', onPress: deleteAddress
                        }
                    ],
                        { cancelable: false })
                }}
                style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}
                android_ripple={{ color: colors.lightgray, borderless: false }}>
                <Icon name="trash-can-outline" color={colors.black} size={24} />
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    list_item: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    list_item_left_icon: {
        padding: 8,
        borderRadius: 10,
        backgroundColor: colors.lightgray,
        marginRight: 10
    },
    list_right_item_title: {
        flex: 1,
        fontSize: 17,
        lineHeight: 17,
        fontWeight: '100',
        letterSpacing: 0.75,
        textTransform: "capitalize",
        marginRight: 5
    },
    list_right_item_subtitle: {
        flex: 2,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '100',
        letterSpacing: 0.75,
        color: "gray",
        overflow: "hidden",
    },
});



