import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ActivityIndicator, Headline, Title } from 'react-native-paper';
import colors from '../../constants/colors';
import ProfileList from '../../components/profile/profile_list';
import AppBar from '../../components/common/app-bar';

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
                    {/* <View style={styles.image_container}>
                        <Image style={styles.image} source={{ uri: "https://image.freepik.com/free-photo/happy-joyful-woman-with-arms-folded-looking_74855-3505.jpg" }} />
                        <Title style={styles.image_title}>Darlene Robertson</Title>
                    </View> */}
                    <ProfileList />
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
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 115,
        height: 115,
        borderRadius: 250,
        borderColor: colors.gray,
        borderWidth: 2
    },
    image_title: {
        fontSize: 21,
        lineHeight: 21,
        paddingVertical: 15,
        letterSpacing: 0.75,
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
});