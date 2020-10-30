import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import CardItem from './card-item';

export default function Cards(props) {
    return (
        <>
            <Title style={{ fontSize: 15 }}>Current Cards</Title>
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <CardItem />
                <CardItem visa />
                <CardItem />
                <CardItem visa />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 140
    }
})



