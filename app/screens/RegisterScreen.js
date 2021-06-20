import React, { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View, Button } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

function RegisterScreen(props) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

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
        <Text style={styles.input}>{date.toLocaleDateString()}</Text>
        <View>
          <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
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
