import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import colors from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RestaurantProfileList from '../../../components/profile/restaurant-profile-list';

export default function ProfileScreen(props) {
    const [loading, setLoading] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            {loading ?
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <ActivityIndicator color={colors.yellow} size="large" />
                </View>
                :
                <View style={styles.container}>
                    <Title style={styles.title}>
                        My
                        <Headline style={styles.subtitle}> Profile</Headline>
                    </Title>
                    <RestaurantProfileList />
                    <View style={styles.attribution}>
                        <Title style={styles.attribution_title}>Made with </Title>
                        <Icon name={"heart"} color={colors.red} size={18} />
                        <Title style={styles.attribution_title}> Delivr</Title>
                    </View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingTop: 40,
    },
    title: {
        paddingHorizontal: 15,
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
    attribution: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    attribution_title: {
        fontSize: 15,
        lineHeight: 15,
        color: colors.gray
    }
});