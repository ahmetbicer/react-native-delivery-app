import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import AppBar from '../../../components/common/app-bar';
import AddAddress from '../../../components/profile/address/add-address';
import SavedAddresses from '../../../components/profile/address/saved-addresses';
import colors from '../../../constants/colors';

export default function AddressScreen(props) {
    const [loading, setLoading] = useState(false)

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            {loading ?
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color={colors.yellow} size="large" />
                </View>
                :
                <>
                    <AppBar screenName={props.route.name} />
                    <View style={styles.container}>
                        <Title style={styles.title}>
                            My
                            <Headline style={styles.subtitle}> Addresses</Headline>
                        </Title>
                        <AddAddress />
                        <SavedAddresses setLoading={setLoading} />
                    </View>
                </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        paddingHorizontal: 20,
        flex: 1
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