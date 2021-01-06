import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileListItem from './profile_list_item';

export default function DriverProfileList(props) {
    return (
        <View style={styles.list_container}>
            <ProfileListItem icon="credit-card-outline" title={"Payment"} page={"Payment"} />
            <ProfileListItem icon="logout" title={"Logout"} logout />
        </View>
    );
}

const styles = StyleSheet.create({
    list_container: {
        flex: 1,
    },
});
