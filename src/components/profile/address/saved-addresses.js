import * as React from 'react';
import { View, FlatList } from 'react-native';
import { ActivityIndicator, Title } from 'react-native-paper';
import useFetch from '../../../hooks/use-fetch';
import SavedAddressListItem from './saved-address-list-item';

export default function AddAddress(props) {
    const params = {
        endpoint: "address",
        method: "GET",
        auth: true
    }

    const { status, data } = useFetch(params);

    if (status == "loading") {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color={colors.yellow} size="large" />
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Title style={{ fontSize: 15 }}>Saved Addresses</Title>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id.toString()}
                renderItem={item => (
                    <SavedAddressListItem data={item.item} setLoading={props.setLoading} />
                )}
            />
        </View>
    );
}

