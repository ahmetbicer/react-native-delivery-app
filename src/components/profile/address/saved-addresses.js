import * as React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SavedAddressListItem from './saved-address-list-item';

export default function AddAddress(props) {
    const navigation = useNavigation();
    return (
        <View style={{ marginTop: 20 }}>
            <Title style={{ fontSize: 15 }}>Saved Addresses</Title>
            <SavedAddressListItem icon="home-variant" title={" 3289. Sok., No:12"} type={"Home"} />
            <SavedAddressListItem icon="home-city" title={" 1417. Sok., No:16"} type={"Business"} />
        </View>
    );
}


