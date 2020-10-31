import * as React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import OrdersListItem from './orders-list-item';

export default function Orders(props) {
    return (
        <View style={{ marginBottom: 15 }}>
            <Title style={{ fontSize: 15 }}>Orders</Title>
            <OrdersListItem order_no="#142546" cost={125} date="  24-12-2019" status="  In Delivery" />
            <OrdersListItem order_no="#156124" cost={95} date="  21-08-2019" status="  Prepared" />
            <OrdersListItem order_no="#184597" cost={12} date="  14-02-2019" status="  Confirmed" />
            <OrdersListItem order_no="#184597" cost={12} date="  14-02-2019" status="  Confirmed" />
            <OrdersListItem order_no="#184597" cost={12} date="  14-02-2019" status="  Confirmed" />
            <OrdersListItem order_no="#184597" cost={12} date="  14-02-2019" status="  Confirmed" />
            <OrdersListItem order_no="#184597" cost={12} date="  14-02-2019" status="  Confirmed" />
        </View>
    );
}


