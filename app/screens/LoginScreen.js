import React, { useState } from "react";
import {
  Modal,
  TextInput,
  View,
  StyleSheet,
  Button,
  Text,
  Alert,
} from "react-native";

function LoginScreen(props) {
  //estado para el nombre de usuario
  const [inputUser, setInputUser] = useState("");
  //estado para la password
  const [inputPassword, setInputPassword] = useState("");

  //chequea existencia en los inputs
  const checkTextInput = () => {
    if (!inputUser.trim()) {
      Alert.alert("Advertencia", "Por favor ingrese su nombre de usuario");
      return;
    }
    if (!inputPassword.trim()) {
      Alert.alert("Advertencia", "Por favor ingrese su contraseña");
      return;
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <Text style={styles.text}>
        Ingresá tu usuario y contraseña para ver todos los productos!
      </Text>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          onChangeText={(value) => setInputUser(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(value) => setInputPassword(value)}
        />
        <Button title="Ingresar" onPress={checkTextInput} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -60,
  },
  input: {
    width: "80%",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 40,
  },
  text: {
    alignSelf: "center",
    width: "80%",
    fontSize: 20,
    left: 17,
    top: 60,
  },
});

export default LoginScreen;
