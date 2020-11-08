import React, { useContext, useState } from 'react';
import { Keyboard, StyleSheet, ToastAndroid, View } from 'react-native';
import { ActivityIndicator, Button, TextInput, Title } from 'react-native-paper';
import colors from '../../constants/colors';
import { AuthContext } from '../../providers/AuthContext';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen(props) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={colors.yellow} size={"large"} />
      </View>
    )
  }

  async function authenticate() {
    Keyboard.dismiss();
    setLoading(true);

    let authenticated = await login(email, password);

    if (!authenticated) {
      setLoading(false);
      ToastAndroid.showWithGravityAndOffset(
        "Wrong Credentials",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        400
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.lottie_container}>
        <LottieView
          source={require('../../assets/lottie/login.json')}
          style={styles.lottie}
          autoPlay
          loop
        />
      </View>
      <View style={styles.login}>
        <TextInput
          mode={"outlined"}
          label={"Email"}
          keyboardType={"email-address"}
          value={email}
          onChangeText={(value) => setEmail(value)}
          theme={{ colors: { primary: colors.black } }}
        />
        <TextInput
          mode={"outlined"}
          label={"Password"}
          value={password}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
          theme={{ colors: { primary: colors.black } }}
        />
        <Button
          compact={true}
          mode="contained"
          onPress={authenticate}
          contentStyle={{ height: 50 }}
          style={{ marginTop: 10 }}
          color={colors.yellow}>
          LOGIN
        </Button>
      </View>
      <View style={styles.register}>
        <Button
          compact={true}
          mode="outlined"
          onPress={() => navigation.navigate("Register")}
          contentStyle={{ height: 40 }}
          style={{ marginTop: 10, width: "100%" }}
          color={colors.black}>
          Don't have an account yet?
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  lottie_container: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lottie: {
    width: 200,
    height: 200,
  },
  login: {
    flex: 3,
  },
  register: {
    justifyContent: "center",
    alignItems: "center"
  },
  register_title: {
    fontSize: 16,
    lineHeight: 16,
  }
})