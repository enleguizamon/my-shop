import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
//para seleccionar fecha de nacimiento
import DateTimePicker from "@react-native-community/datetimepicker";
//para seleccionar país
import { Picker } from "@react-native-picker/picker";

function RegisterScreen(props) {
  //estado para nombre y apellido
  const [name, setName] = useState("");
  //estado para el mail
  const [email, setEmail] = useState("");
  //estados del date picker
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateHasChanged, setDateHasChanged] = useState(false);
  //estado de la ciudad
  const [city, setCity] = useState("");
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
    if (!email.includes("@")) {
      Alert.alert("Advertencia", "Por favor ingrese un email correcto");
      return;
    }
    if (!dateHasChanged) {
      Alert.alert("Advertencia", "Por favor seleccioná tu fecha de nacimiento");
      return;
    }
    if (!city) {
      Alert.alert("Advertencia", "Por favor ingresá tu ciudad");
      return;
    }
    if (!selectedCountry) {
      Alert.alert("Advertencia", "Por favor seleccioná tu nacionalidad");
      return;
    }
    //navegacion hacia pagina de bienvenida
    props.navigation.replace("Welcome");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registrate en nuestra App</Text>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre y Apellido"
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => setEmail(value)}
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
        <TextInput
          placeholder="Ciudad"
          style={styles.input}
          onChangeText={(value) => setCity(value)}
        />
        <Picker
          mode="dropdown"
          style={styles.picker}
          ref={pickerRef}
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }
        >
          <Picker.Item label="País" value="" />
          <Picker.Item label="Argentina" value="Argentina" />
          <Picker.Item label="Brasil" value="Brasil" />
          <Picker.Item label="Uruguay" value="Uruguay" />
          <Picker.Item label="Otro" value="Otro" />
        </Picker>
        <Button title="Registrarme" onPress={checkInputs} />
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
  text: {
    alignSelf: "center",
    width: "80%",
    fontSize: 20,
    left: 40,
    top: 30,
  },
  inputsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 120,
  },
  input: {
    width: "80%",
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 40,
    width: 300,
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
    marginLeft: -150,
    width: 140,
    bottom: 20,
    marginBottom: 10,
  },
});

export default RegisterScreen;
