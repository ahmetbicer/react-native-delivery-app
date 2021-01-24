import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import colors from '../../../constants/colors';
import LottieView from 'lottie-react-native';
import AppBar from '../../../components/common/app-bar';
import { useNavigation } from '@react-navigation/native';

export default function OrderSuccessfulScreen(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <AppBar screenName={props.route.name} />
      <View style={styles.inner_container}>
        <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 100 }}>
          <LottieView
            source={require('../../../assets/lottie/success.json')}
            style={styles.lottie}
            autoPlay
            loop
          />
          <Button
            compact={true}
            mode="contained"
            contentStyle={{
              width: Dimensions.get('window').width - 70,
            }}
            style={{ marginTop: 10 }}
            color={colors.yellow}
            onPress={() => {
              navigation.navigate("ProfileStack", { screen: "Profile" });
            }}>
            Go to Orders
          </Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  inner_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  lottie: {
    width: 250,
    height: 250,
  },
});
