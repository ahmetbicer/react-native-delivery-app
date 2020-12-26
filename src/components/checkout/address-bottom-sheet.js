import React, { useCallback, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetModal, BottomSheetFlatList, BottomSheetBackdrop, TouchableOpacity } from '@gorhom/bottom-sheet';
import useFetch from '../../hooks/use-fetch';
import { Title } from 'react-native-paper';
import colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddressBottomSheet = React.forwardRef((props, ref) => {
    const params = { endpoint: "address", method: "GET", auth: true };
    const { status, data } = useFetch(params);
    const snapPoints = useMemo(() => ['75%'], []);

    const selectAddress = (item) => {
        props.selectAddress(item);
        ref.current?.dismiss()
    }

    const renderItem = useCallback(({ item }) => {
        let icon = "home";

        switch (item.address_type) {
            case "HOME":
                icon = "home-variant";
                break;
            case "BUSINESS":
                icon = "home-city";
                break;
            case "OTHER":
                icon = "city-variant";
                break;
            default:
                icon = "city-variant";
                break;
        }

        return (
            <TouchableOpacity
                style={styles.list_item}
                onPress={() => selectAddress(item)}>
                <Icon style={styles.list_item_left_icon} name={icon} color={"gray"} size={21} />
                <Title style={styles.list_right_item_title}>
                    {item.address_type}
                </Title>
                <Title numberOfLines={1} style={styles.list_right_item_subtitle}>
                    {item.address}
                </Title>
            </TouchableOpacity>
        )
    }, []);

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={BottomSheetBackdrop}
        >
            <BottomSheetFlatList
                data={data}
                extraData={status}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainer}
            />
        </BottomSheetModal>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 10,
    },
    list_item: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    list_item_left_icon: {
        padding: 8,
        borderRadius: 10,
        backgroundColor: colors.lightgray,
        marginRight: 10
    },
    list_right_item_title: {
        flex: 1,
        fontSize: 17,
        lineHeight: 17,
        fontWeight: '100',
        letterSpacing: 0.75,
        marginRight: 5,
    },
    list_right_item_subtitle: {
        flex: 2.2,
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '100',
        letterSpacing: 0.75,
        color: "gray",
        overflow: "hidden",
    },
})

export default AddressBottomSheet;