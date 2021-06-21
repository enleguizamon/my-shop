import React, { useState, useRef } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

function RegisterScreen(props) {
  //estado del date picker
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  //estado de la nacionalidad
  const [selectedCountry, setSelectedCountry] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "Android");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const pickerRef = useRef();

  // const checkTextInput = () => {
  //   if (!inputUser.trim()) {
  //     Alert.alert("Advertencia", "Por favor ingrese su nombre de usuario");
  //     return;
  //   }

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
        <View>
          <TouchableOpacity onPress={showDatepicker}>
            <Text style={styles.date}>Seleccionar fecha de nacimiento</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.input}>
          {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `}
        </Text>
        <View>
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
        <Text style={styles.country}>Seleccionar Nacionalidad</Text>
        <Picker
          mode="dropdown"
          style={{ height: 50, width: 150, bottom: 20, marginBottom: 10 }}
          ref={pickerRef}
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }
        >
          <Picker.Item label="Argentina" value="Argentina" />
          <Picker.Item label="Brasil" value="Brasil" />
          <Picker.Item label="Uruguay" value="Uruguay" />
        </Picker>
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
    top: 50,
  },
  input: {
    width: "80%",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 40,
  },
  date: {
    marginLeft: -90,
    marginBottom: 10,
    backgroundColor: "#33adff",
    padding: 5,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  country: {
    marginTop: 20,
    bottom: 25,
    alignSelf: "flex-start",
    left: 50,
  },
});

export default RegisterScreen;
