import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';
import colors from '../../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import AddressListItem from './address-list-item';
import SavedAddressListItem from './saved-address-list-item';

export default function AddAddress(props) {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 20 }}>
            <Title style={{ fontSize: 15 }}>Saved Addresses</Title>
            <SavedAddressListItem icon="home-variant" title={" 3289. Sok., No:12"} type={"Home"} />
            <SavedAddressListItem icon="home-city" title={" 1417. Sok., No:16"} type={"Business"} />
            <Title style={{ fontSize: 15, marginTop: 10 }}>Add Address</Title>
            <AddressListItem icon="home-variant" title={"Add Home Address"} type={"home"} />
            <AddressListItem icon="home-city" title={"Add Business Address"} type={"business"} />
            <AddressListItem icon="city-variant" title={"Add Other Address"} type={"other"} />
        </View>
    );
}


const styles = StyleSheet.create({
    list_item: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 15,
    },
    list_item_left_icon: {
        padding: 8,
        borderRadius: 10,
        backgroundColor: colors.lightgray
    },
    list_right_item: {
        flex: 1,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        borderBottomWidth: 2,
        borderBottomColor: colors.lightgray,
    },
    list_right_item_title: {
        fontSize: 19,
        lineHeight: 19,
        fontWeight: '100',
        letterSpacing: 0.75,
    },
    badge: {
        position: "absolute",
        top: 7,
        right: 7,
        width: 7,
        height: 7,
        borderRadius: 99,
        backgroundColor: "red"
    }
});



