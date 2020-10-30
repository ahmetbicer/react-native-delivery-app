import * as React from 'react';
import { View, Pressable, StyleSheet, Alert } from 'react-native';
import { Title } from 'react-native-paper';
import colors from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function SavedAddressListItem(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.list_item}>
            <View>
                <Icon style={styles.list_item_left_icon} name={props.icon} color={"gray"} size={21} />
            </View>
            <View style={styles.list_right_item}>
                <Title style={styles.list_right_item_subtitle}>
                    <Title style={styles.list_right_item_title}>
                        {props.type}
                    </Title>
                    {props.title}
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
                                text: 'OK', onPress: () => {
                                }
                            }
                        ],
                            { cancelable: false })
                    }}
                    style={{ width: 40, height: 40, justifyContent: "center", alignItems: "center" }}
                    android_ripple={{ color: colors.lightgray, borderless: false }}>
                    <Icon name="trash-can-outline" color={colors.black} size={24} />
                </Pressable>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    list_item: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
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
    },
    list_right_item_title: {
        fontSize: 17,
        lineHeight: 17,
        fontWeight: '100',
        letterSpacing: 0.75,
    },
    list_right_item_subtitle: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '100',
        letterSpacing: 0.75,
        color: "gray"
    },
});



