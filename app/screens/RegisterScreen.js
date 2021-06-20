import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View, Button } from "react-native";

function RegisterScreen(props) {
  return (
    <Modal visible={props.visible} animationType="slide">
      <Text style={styles.text}>Registrate en nuestra App</Text>
      <View style={styles.inputsContainer}>
        <TextInput style={styles.input} placeholder="Nombre y Apellido" />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          numeric
          keyboardType={"numeric"}
          maxLength={2}
        />
        <TextInput style={styles.input} placeholder="Fecha de nacimiento" />

        <Button title="Registrarme" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    width: "80%",
    fontSize: 20,
    left: 17,
    top: 60,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  input: {
    width: "80%",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 40,
  },
});

export default RegisterScreen;
