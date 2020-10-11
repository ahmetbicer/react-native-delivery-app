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
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.yellow,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
            }}>
            <Title style={{fontWeight: 'bold'}}>4x</Title>
          </View>
          <View style={{marginLeft: 35}}>
            <Title style={{color: colors.white}}>Seafood Pesto</Title>
            <Subheading style={{color: colors.white}}>
              Delivery Time 20 mins
            </Subheading>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: Dimensions.get('window').width - 70,
            justifyContent: 'space-between',
            marginTop: 10,
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
    position: 'absolute',
    width: '100%',
    height: 200,
    backgroundColor: colors.black,
    bottom: 0,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    alignItems: 'center',
  },
});
