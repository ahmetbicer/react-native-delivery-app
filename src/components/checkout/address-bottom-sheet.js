import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Keyboard, StyleSheet, View, Text } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import useFetch from '../../hooks/use-fetch';

const AddressBottomSheet = React.forwardRef((props, ref) => {
    const params = { endpoint: "address", method: "GET", auth: true };
    const { status, data } = useFetch(params);
    const snapPoints = useMemo(() => ['50%'], []);

    const renderItem = useCallback(({ item }) => (
        <View style={styles.itemContainer}>
            <Text>{item.address}</Text>
        </View>
    ),
        []
    );
    return (
        <BottomSheet
            ref={ref}
            index={-1}
            snapPoints={snapPoints}
        >
            <BottomSheetFlatList
                data={data}
                extraData={status}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.contentContainer}
            />
        </BottomSheet>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 10,
    }
})

export default AddressBottomSheet;