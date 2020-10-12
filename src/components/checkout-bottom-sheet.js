import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Button, Subheading, Title} from 'react-native-paper';

export default function CheckoutBottomSheet(props) {
  return (
    <View style={styles.bottom}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            width: Dimensions.get('window').width - 70,
            justifyContent: 'space-between',
            marginTop: 10,
            paddingTop: 5,
          }}>
          <Title style={{color: colors.white}}>Total</Title>
          <Title style={{color: colors.white}}>$48.00</Title>
        </View>
      </View>
      <Button
        compact={true}
        mode="contained"
        contentStyle={{
          width: Dimensions.get('window').width - 70,
          height: 50,
        }}
        style={{marginBottom: 10}}
        color={colors.yellow}
        onPress={() => console.log('Pressed')}>
        CHECKOUT
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    height: 130,
    backgroundColor: colors.black,
    bottom: 0,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    alignItems: 'center',
  },
});
