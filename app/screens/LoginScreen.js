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
    //se usa para no volver al login con la flecha, lo omite despues de loguearse
    props.navigation.replace("Welcome");
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  inputsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  input: {
    width: 200,
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
