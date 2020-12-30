import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import AppBar from '../../../components/common/app-bar';
import AddCard from '../../../components/profile/payment/add-card';
import Cards from '../../../components/profile/payment/cards';
import colors from '../../../constants/colors';

export default function PaymentScreen(props) {
    const [loading, setLoading] = useState(false)

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color={colors.yellow} size="large" />
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <AppBar screenName={props.route.name} />
            <View style={styles.container}>
                <Title style={styles.title}>
                    My
                            <Headline style={styles.subtitle}> Cards</Headline>
                </Title>
                <Cards setLoading={setLoading} />
                <AddCard setLoading={setLoading} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        lineHeight: 32,
        fontWeight: 'bold',
        letterSpacing: 0.75,
    },
    subtitle: {
        fontSize: 32,
        lineHeight: 36,
        marginVertical: 0,
        letterSpacing: 0.6,
    },
});