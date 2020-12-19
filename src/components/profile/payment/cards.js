import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Title } from 'react-native-paper';
import CardItem from './card-item';
import useFetch from '../../../hooks/use-fetch';
import colors from '../../../constants/colors';
import { FlatList } from 'react-native-gesture-handler';

export default function Cards(props) {

    const params = {
        endpoint: "cards",
        method: "get",
        auth: true
    }

    const { status, data } = useFetch(params);

    if (status == "loading") {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator color={colors.yellow} size={"large"} />
            </View>
        )
    }

    return (
        <>
            {data.length != 0 &&
                <>
                    <Title style={{ fontSize: 15 }}>Current Cards</Title>
                    <FlatList
                        data={data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={styles.container}
                        keyExtractor={item => item.id.toString()}
                        renderItem={item => (
                            <CardItem visa setLoading={props.setLoading} data={item} />
                        )}
                    />
                </>
            }
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 140
    }
})



