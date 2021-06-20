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

function HomeScreen() {
  const [isModal, setIsModal] = useState(false);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.title}>Vendé lo que no necesitás</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => setIsModal(true)}
      >
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>
      <LoginScreen visible={isModal} />
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.login}>REGISTRARSE</Text>
      </TouchableOpacity>
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
    marginTop: 60,
    fontSize: 28,
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
