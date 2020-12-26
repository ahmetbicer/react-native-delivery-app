import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title } from 'react-native-paper';
import colors from '../../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function OrdersListItem(props) {
    const navigation = useNavigation();
    return (
        <View style={styles.list_item}>
            <View style={styles.list_right_item}>
                <Title style={styles.list_right_item_subtitle}>
                    <Title style={styles.list_right_item_title}>
                        #{props.order_no}
                    </Title>
                    {" " + props.date.slice(0, 10)}
                </Title>
                <Title style={styles.list_right_item_title}>
                    {props.cost}$
                </Title>
            </View>
            <View style={styles.list_right_item}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon name="moped" color={"gray"} size={21} />
                    <Title style={styles.list_right_item_subtitle}>
                        {" " + props.status}
                    </Title>
                </View>
                <Button
                    compact={true}
                    mode="contained"
                    onPress={() => { navigation.navigate("OrderDetails", { id: props.id, status: props.status }) }}
                    color={colors.yellow}>
                    Details
                </Button>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    list_item: {
        height: 125,
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: colors.lightgray
    },
    list_right_item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    list_right_item_title: {
        fontSize: 17,
        lineHeight: 17,
        fontWeight: '100',
        letterSpacing: 0.75,
    },
    list_right_item_subtitle: {
        fontSize: 14,
        lineHeight: 16,
        fontWeight: '100',
        letterSpacing: 0.75,
        color: "gray",
    },
});



