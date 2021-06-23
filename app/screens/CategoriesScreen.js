import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

function CategoriesScreen({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Products", { category: "Hogar" })}
      >
        <Text>Hogar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Products", { category: "Indumentaria" })
        }
      >
        <Text>Indumentaria</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Tecnología</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CategoriesScreen;
