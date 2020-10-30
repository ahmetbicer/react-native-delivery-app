import * as React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import colors from '../../../constants/colors';

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
                        mask="[0000] [0000] [0000] [0000]"
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
                            mask="[00]{/}[00]"
                        />
                    }
                    theme={{ colors: { primary: colors.black } }}
                    style={{ flex: 1, marginRight: 5 }}
                />
                <TextInput
                    mode={"outlined"}
                    label={"CVV / CVC"}
                    right={<TextInput.Icon size={21} name="lock-outline" />}
                    render={props =>
                        <TextInputMask
                            {...props}
                            mask="[000]"
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




