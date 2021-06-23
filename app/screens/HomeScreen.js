import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

function HomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.title}>Comprá lo que necesitás</Text>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      >
        <Text style={styles.login}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          props.navigation.navigate("Register");
        }}
      >
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
    top: 100,
  },
  logo: {
    width: 130,
    height: 130,
  },
  title: {
    marginTop: -35,
    marginBottom: 30,
    fontSize: 32,
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "black",
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
    fontSize: 18,
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "black",
    fontWeight: "bold",
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
