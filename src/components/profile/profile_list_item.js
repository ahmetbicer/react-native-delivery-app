import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Divider, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';

export default function ProfileListItem(props) {
    const navigation = useNavigation();
    return (
        <Pressable
            onPress={() => navigation.navigate(props.page)}
            android_ripple={{ color: colors.lightgray, borderless: false }} style={styles.list_item}>
            <Icon style={styles.list_item_left_icon} name={props.icon} color={"gray"} size={25} />
            <View style={styles.list_right_item}>
                <Title style={styles.list_right_item_title}>
                    {props.title}
                </Title>
                <Icon name="chevron-right" color={colors.black} size={28} />
            </View>
        </Pressable>
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
    }
});
