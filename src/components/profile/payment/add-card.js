import * as React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import colors from '../../../constants/colors';
import { TextInputMask } from 'react-native-masked-text'

export default function AddCard(props) {
    return (
        <View style={{ marginTop: 20 }}>
            <Title style={{ fontSize: 15 }}>Add New Card</Title>
            <TextInput
                mode={"outlined"}
                label={"Card Number"}
                right={<TextInput.Icon name="credit-card-outline" />}
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
                onPress={() => { }}
                contentStyle={{ height: 50 }}
                style={{ marginTop: 10 }}
                color={colors.yellow}>
                ADD CARD
            </Button>
        </View>
    );
}




