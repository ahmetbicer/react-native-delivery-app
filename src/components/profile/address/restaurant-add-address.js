import * as React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import AddressListItem from './address-list-item';

export default function AddAddress(props) {
    return (
        <View style={{ flex: 1 }}>
            <Title style={{ fontSize: 15, marginTop: 10 }}>Add Address</Title>
            <AddressListItem icon="home-city" title={"Add Business Address"} type={"BUSINESS"} />
        </View>
    );
}