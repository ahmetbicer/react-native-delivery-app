import * as React from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { Title } from 'react-native-paper';
import OrdersListItem from './orders-list-item';

export default function Orders(props) {
    return (
        <View style={{ flex: 1, marginBottom: 15 }}>
            <Title style={{ fontSize: 15 }}>Orders</Title>
            <FlatList
                data={props.data}
                keyExtractor={item => item.id.toString()}
                refreshControl={
                    <RefreshControl refreshing={props.refreshing} onRefresh={props.onRefresh} />
                }
                renderItem={item_ => {
                    const { item } = item_;
                    return (
                        <OrdersListItem
                            id={item.id}
                            order_no={item.order_number}
                            cost={item.total_cost}
                            date={item.date}
                            status={item.status} />
                    )

                }}
            />
        </View>
    );
}


