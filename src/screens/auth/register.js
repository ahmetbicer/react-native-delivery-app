import React, { useContext, useState } from 'react';
import { Keyboard, StyleSheet, ToastAndroid, View } from 'react-native';
import { ActivityIndicator, Button, TextInput, Title } from 'react-native-paper';
import colors from '../../constants/colors';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import useToast from '../../hooks/use-toast';
import AppBar from '../../components/common/app-bar'

export default function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();


  async function register() {
    if (password != password2) {
      useToast({
        type: "error",
        text1: "Passwords needs to be same.",
        text2: "Please enter the same passwords."
      })
      return;
    }

    let response = await fetch("http://192.168.1.29:8080/api/register", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        first_name: name,
        username: email,
        password: password,
      })
    })
    let data = await response.json();

    if (response.status == 201) {
      useToast({
        type: "success",
        text1: "Registered Successfully.",
        text2: "Login to start ordering food 👋",
      })
      navigation.goBack();
    }
    else {
      ToastAndroid.showWithGravityAndOffset(
        "Wrong Credentials",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        400
      )
    }
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={colors.yellow} size={"large"} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <AppBar screenName={props.route.name} />
      <View style={styles.lottie_container}>
        <LottieView
          source={require('../../assets/lottie/register2.json')}
          style={styles.lottie}
          autoPlay
          loop
        />
      </View>
      <View style={styles.login}>
        <TextInput
          mode={"outlined"}
          label={"Name Surname"}
          value={name}
          onChangeText={(value) => setName(value)}
          theme={{ colors: { primary: colors.black } }}
        />
        <TextInput
          mode={"outlined"}
          label={"Email"}
          value={email}
          style={{ marginTop: 5 }}
          onChangeText={(value) => setEmail(value)}
          theme={{ colors: { primary: colors.black } }}
        />
        <View style={styles.password_container}>
          <TextInput
            mode={"outlined"}
            label={"Password"}
            value={password}
            style={[styles.password, { marginRight: 5 }]}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
            theme={{ colors: { primary: colors.black } }}
          />
          <TextInput
            mode={"outlined"}
            label={"Password Again"}
            value={password2}
            style={[styles.password, { marginLeft: 5 }]}
            onChangeText={(value) => setPassword2(value)}
            secureTextEntry={true}
            theme={{ colors: { primary: colors.black } }}
          />
        </View>
        <Button
          compact={true}
          mode="contained"
          onPress={register}
          contentStyle={{ height: 50 }}
          style={{ marginTop: 10 }}
          color={colors.yellow}>
          REGISTER
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
    padding: 20
  },
  password_container: {
    flexDirection: "row",
    marginTop: 5
  },
  password: {
    flex: 1
  }
})