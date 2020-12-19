import * as React from 'react';
import { Image, StyleSheet, View, Pressable, Alert } from 'react-native';
import { Title } from 'react-native-paper';
import colors from '../../../constants/colors';
import apiFetch from '../../../hooks/api-fetch';

export default function CardItem(props) {
    const item = props.data.item;

    async function deleteCard() {
        props.setLoading(true);
        const params = {
            endpoint: `cards/${item.id}`,
            method: "DELETE",
            auth: true
        }

        await apiFetch(params)
        props.setLoading(false);
    }

    return (
        <View style={{ borderRadius: 15, marginRight: 10, overflow: 'hidden' }}>
            <Pressable
                onPress={() => {
                    Alert.alert("", "Do you want to delete the card?", [
                        {
                            text: 'Cancel',
                            onPress: () => { },
                            style: 'cancel'
                        },
                        {
                            text: 'OK',
                            onPress: deleteCard
                        }
                    ],
                        { cancelable: false })
                }}
                android_ripple={{ color: colors.gray, borderless: false }} style={styles.container}>
                <Image
                    style={{ height: 45, width: 50 }}
                    resizeMode={"contain"}
                    source={{
                        uri: props.visa ? "https://marka-logo.com/wp-content/uploads/2020/04/Visa-Logo.png" : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/990px-Mastercard-logo.svg.png"
                    }}
                />
                <View style={styles.dot_container}>
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <View style={styles.dot} />
                    <Title style={styles.dot_title}>{item.number.slice(12, 16)}</Title>
                </View>
                <Title style={styles.date_title}>{item.expiry}</Title>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 130,
        height: 140,
        padding: 15,
        backgroundColor: colors.lightgray
    },
    dot_container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 25,
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: colors.black,
        borderRadius: 99,
        marginLeft: 2
    },
    dot_title: {
        fontSize: 14,
        lineHeight: 14,
        marginLeft: 4
    },
    date_title: {
        marginTop: 5,
        fontSize: 13,
        lineHeight: 12,
    }
})


