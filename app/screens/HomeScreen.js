import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

function HomeScreen() {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.title}>Vendé lo que no necesitás</Text>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => setIsModalLogin(true)}
      >
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>
      <LoginScreen visible={isModalLogin} />
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => setIsModalRegister(true)}
      >
        <Text style={styles.login}>REGISTRARSE</Text>
      </TouchableOpacity>
      <RegisterScreen visible={isModalRegister} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 130,
  },
  logo: {
    width: 130,
    height: 130,
  },
  title: {
    marginTop: -35,
    marginBottom: 30,
    fontSize: 30,
    color: "#282828",
    fontWeight: "bold",
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
  },
  login: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#282828",
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#9B89B3",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
