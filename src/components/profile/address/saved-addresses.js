import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator, Title } from 'react-native-paper';
import useFetch from '../../../hooks/use-fetch';
import SavedAddressListItem from './saved-address-list-item';

export default function AddAddress(props) {
    const params = {
        endpoint: "address",
        method: "GET"
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
        <View style={{ marginTop: 20 }}>
            <Title style={{ fontSize: 15 }}>Saved Addresses</Title>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                style={styles.container}
                keyExtractor={item => item.id.toString()}
                renderItem={item => (
                    <SavedAddressListItem data={item.item} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
})

