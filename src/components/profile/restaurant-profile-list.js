import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import ProfileListItem from './profile_list_item';

export default function RestaurantProfileList(props) {
    return (
        <View style={styles.list_container}>
            <ProfileListItem icon="logout" title={"Logout"} logout />
        </View>
    );
}

const styles = StyleSheet.create({
    list_container: {
        flex: 1,
    },
});
