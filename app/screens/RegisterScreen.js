import React, { useState, useRef } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";

function RegisterScreen(props) {
  //estado para nombre y apellido
  const [name, setName] = useState("");
  //estado para la edad
  const [age, setAge] = useState("");
  //estados del date picker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateHasChanged, setDateHasChanged] = useState(false);
  //estado de la nacionalidad
  const [selectedCountry, setSelectedCountry] = useState();

  //funciones del date picker
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "Android");
    setDate(currentDate);
    setDateHasChanged(true);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };
  const pickerRef = useRef();

  //chequea existencia en los campos
  const checkInputs = () => {
    if (!name.trim()) {
      Alert.alert("Advertencia", "Por favor ingrese tu nombre y apellido");
      return;
    }
    if (!age.trim()) {
      Alert.alert("Advertencia", "Por favor ingrese tu edad");
      return;
    }
    if (!dateHasChanged) {
      Alert.alert("Advertencia", "Por favor seleccioná tu fecha de nacimiento");
      return;
    }
    if (!selectedCountry) {
      Alert.alert("Advertencia", "Por favor seleccioná tu nacionalidad");
      return;
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <Text style={styles.text}>Registrate en nuestra App</Text>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre y Apellido"
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          numeric
          keyboardType={"numeric"}
          maxLength={2}
          onChangeText={(value) => setAge(value)}
        />
        <View>
          <TouchableOpacity onPress={showDatepicker}>
            <Text style={styles.date}>Seleccioná tu fecha de nacimiento</Text>
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
        <Picker
          mode="dropdown"
          style={styles.picker}
          ref={pickerRef}
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }
        >
          <Picker.Item label="Seleccioná tu nacionalidad" value="" />
          <Picker.Item label="Argentina" value="Argentina" />
          <Picker.Item label="Brasil" value="Brasil" />
          <Picker.Item label="Uruguay" value="Uruguay" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
        <Button title="Registrarme" onPress={checkInputs} />
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
    top: 40,
  },
  input: {
    width: "80%",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 40,
  },
  date: {
    marginLeft: -75,
    marginBottom: 10,
    backgroundColor: "#33adff",
    color: "black",
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
  picker: {
    height: 50,
    marginLeft: -50,
    width: 258,
    bottom: 20,
    marginBottom: 10,
  },
});

export default RegisterScreen;
