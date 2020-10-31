import React, { useContext } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../providers/AuthContext';

export default function ProfileListItem(props) {
    const navigation = useNavigation();
    const { logout } = useContext(AuthContext);

    // navigation.dangerouslyGetParent().setOptions({ tabBarBadge: 3 })
    return (
        <Pressable
            onPress={() => {
                if (props.logout) {
                    logout();
                } else {
                    navigation.navigate(props.page)
                }
            }}
            android_ripple={{ color: colors.lightgray, borderless: false }} style={styles.list_item}>
            <View>
                <Icon style={styles.list_item_left_icon} name={props.icon} color={"gray"} size={25} />
                {props.badge && <View style={styles.badge}></View>}
            </View>
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
