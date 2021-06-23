import React from "react";
import { View, StyleSheet, Text, Button, ImageBackground } from "react-native";

//Pagina de bienvenida luego de pasar las validaciones del login o registro
function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background2.jpg")}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenida!</Text>
        <Button
          title="Mirá todos nuestro productos"
          onPress={() => props.navigation.navigate("Products")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  content: {
    top: 160,
  },
  title: {
    color: "#ffcc00",
    fontSize: 60,
    fontWeight: "bold",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "#686868",
    marginBottom: 60,
  },
});
export default WelcomeScreen;
