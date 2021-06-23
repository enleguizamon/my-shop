import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card1}
        onPress={() => navigation.navigate("Products", { category: "Hogar" })}
      >
        <Text style={styles.text}>Hogar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card2}
        onPress={() =>
          navigation.navigate("Products", { category: "Indumentaria" })
        }
      >
        <Text style={styles.text}>Indumentaria</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card3}
        onPress={() =>
          navigation.navigate("Products", { category: "Tecnologia" })
        }
      >
        <Text style={styles.text}>Tecnología</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card1: {
    height: 170,
    width: 290,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF8066",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  card2: {
    height: 170,
    width: 290,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#845EC2",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  card3: {
    height: 170,
    width: 290,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00C9A7",
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "#686868",
  },
});

export default CategoriesScreen;
