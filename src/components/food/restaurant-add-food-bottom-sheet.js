import React, { useState, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheetModal, BottomSheetView, TouchableOpacity, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Title, TextInput } from 'react-native-paper';
import colors from '../../constants/colors';
import apiFetch from '../../hooks/api-fetch';

const AddFoodBottomSheet = React.forwardRef((props, ref) => {
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [calories, setCalories] = useState("");
    const [cost, setCost] = useState("");

    const snapPoints = useMemo(() => ['75%'], []);

    async function addFood() {

        const params = {
            endpoint: `foods`,
            method: "POST",
            auth: true,
            body: {
                name: name,
                image: url,
                description: description,
                star: "5",
                calories: calories,
                cost: cost
            }
        }

        await apiFetch(params)

        ref.current?.close()
    }

    return (
        <BottomSheetModal ref={ref} index={0} snapPoints={snapPoints} backdropComponent={BottomSheetBackdrop}>
            <BottomSheetView style={styles.contentContainer}>
                <Title style={{ fontSize: 15 }}>Add Food</Title>
                <TextInput
                    mode={"outlined"}
                    label={"Name"}
                    value={name}
                    onChangeText={(value) => setName(value)}
                    theme={{ colors: { primary: colors.black } }}
                />
                <TextInput
                    mode={"outlined"}
                    label={"Image Url"}
                    value={url}
                    onChangeText={(value) => setUrl(value)}
                    theme={{ colors: { primary: colors.black } }}
                />
                <TextInput
                    mode={"outlined"}
                    label={"Description"}
                    value={description}
                    onChangeText={(value) => setDescription(value)}
                    theme={{ colors: { primary: colors.black } }}
                />
                <View style={{ flexDirection: "row", marginBottom: 10 }}>
                    <TextInput
                        mode={"outlined"}
                        label={"Calories"}
                        value={calories}
                        style={{ flex: 1, marginRight: 2.5 }}
                        onChangeText={(value) => setCalories(value)}
                        theme={{ colors: { primary: colors.black } }}
                    />
                    <TextInput
                        mode={"outlined"}
                        label={"Cost"}
                        value={cost}
                        style={{ flex: 1, marginLeft: 2.5 }}
                        onChangeText={(value) => setCost(value)}
                        theme={{ colors: { primary: colors.black } }}
                    />
                </View>


                <TouchableOpacity onPress={addFood} style={styles.custom_button}>
                    <Title style={styles.custom_button_title}>ADD FOOD</Title>
                </TouchableOpacity>
            </BottomSheetView>
        </BottomSheetModal>
    );
});

const styles = StyleSheet.create({
    contentContainer: {
        paddingHorizontal: 10,
    },
    custom_button: {
        backgroundColor: colors.yellow,
        elevation: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    custom_button_title: {
        fontSize: 16
    }
})

export default AddFoodBottomSheet;