import * as React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import colors from '../../../constants/colors';
import { TextInputMask } from 'react-native-masked-text'
import { useState } from 'react';
import apiFetch from '../../../hooks/api-fetch';

export default function AddCard(props) {
    const [number, setNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    async function addCard() {
        props.setLoading(true);
        const params = {
            endpoint: "cards",
            method: "POST",
            body: {
                number: number.replace(/ /g, ''),
                expiry: expiry,
                cvv: cvv
            },
            auth: true
        }
        await apiFetch(params)
        props.setLoading(false);
    }

    return (
        <View style={{ marginTop: 20 }}>
            <Title style={{ fontSize: 15 }}>Add New Card</Title>
            <TextInput
                mode={"outlined"}
                label={"Card Number"}
                right={<TextInput.Icon name="credit-card-outline" />}
                onChangeText={text => setNumber(text)}
                render={props =>
                    <TextInputMask
                        {...props}
                        type={"credit-card"}
                    />
                }
                theme={{ colors: { primary: colors.black } }}
            />
            <View style={{ flexDirection: "row", marginTop: 5 }}>
                <TextInput
                    mode={"outlined"}
                    label={"Expiry"}
                    right={<TextInput.Icon size={21} name="calendar-month" />}
                    onChangeText={text => setExpiry(text)}
                    render={props =>
                        <TextInputMask
                            {...props}
                            type={'datetime'}
                            options={{
                                format: 'MM/YY'
                            }}
                        />
                    }
                    theme={{ colors: { primary: colors.black } }}
                    style={{ flex: 1, marginRight: 5 }}
                />
                <TextInput
                    mode={"outlined"}
                    label={"CVV / CVC"}
                    right={<TextInput.Icon size={21} name="lock-outline" />}
                    keyboardType={"numeric"}
                    onChangeText={text => setCvv(text)}
                    render={props =>
                        <TextInputMask
                            {...props}
                            type={'custom'}
                            options={{
                                mask: '999'
                            }}
                        />
                    }
                    theme={{ colors: { primary: colors.black } }}
                    style={{ flex: 1, marginLeft: 5 }}
                />
            </View>
            <Button
                compact={true}
                mode="contained"
                onPress={addCard}
                contentStyle={{ height: 50 }}
                style={{ marginTop: 10 }}
                color={colors.yellow}>
                ADD CARD
            </Button>
        </View>
    );
}




