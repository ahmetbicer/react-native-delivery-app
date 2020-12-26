import * as React from 'react';
import { View, FlatList } from 'react-native';
import { Title } from 'react-native-paper';
import OrdersListItem from './orders-list-item';

export default function Orders(props) {
    return (
        <View style={{ flex: 1, marginBottom: 15 }}>
            <Title style={{ fontSize: 15 }}>Orders</Title>
            <FlatList
                data={props.data}
                keyExtractor={item => item.id.toString()}
                renderItem={item_ => {
                    const { item } = item_;
                    return (
                        <OrdersListItem
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


