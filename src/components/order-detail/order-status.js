import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../constants/colors';

export default function OrderStatus(props) {
    if (props.status == "WAITING") {
        return (
            <View style={styles.container}>
                <Icon name="timer-sand" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="check" size={25} color={colors.gray} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="truck-delivery-outline" size={25} color={colors.gray} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="map-marker-check-outline" size={25} color={colors.gray} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="star-outline" size={25} color={colors.gray} />
            </View>
        );
    }
    else if (props.status == "CONFIRMED") {
        return (
            <View style={styles.container}>
                <Icon name="timer-sand" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="check" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="truck-delivery-outline" size={25} color={colors.gray} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="map-marker-check-outline" size={25} color={colors.gray} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="star-outline" size={25} color={colors.gray} />
            </View>
        );
    }
    else if (props.status == "IN DELIVERY") {
        return (
            <View style={styles.container}>
                <Icon name="timer-sand" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="check" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="truck-delivery-outline" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="map-marker-check-outline" size={25} color={colors.gray} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="star-outline" size={25} color={colors.gray} />
            </View>
        );
    }
    else if (props.status == "DELIVERED") {
        return (
            <View style={styles.container}>
                <Icon name="timer-sand" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="check" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="truck-delivery-outline" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="map-marker-check-outline" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.gray} />
                <Icon name="star-outline" size={25} color={colors.gray} />
            </View>
        );
    }
    else if (props.status == "RATED") {
        return (
            <View style={styles.container}>
                <Icon name="timer-sand" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="check" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="truck-delivery-outline" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="map-marker-check-outline" size={25} color={colors.black} />
                <Icon name="arrow-right" size={25} color={colors.black} />
                <Icon name="star-outline" size={25} color={colors.black} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // borderBottomColor: colors.yellow,
        // borderBottomWidth: 1,
        height: 60,
        marginBottom: 10
    }
});