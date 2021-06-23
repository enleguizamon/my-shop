import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Productos seleccionados:</Text>
      <FlatList
        data={navigation.getParam("products")}
        renderItem={(ItemData) => (
          <View>
            <Text>{ItemData.item.quantity}</Text>
            <Text>{ItemData.item.title}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* <View style={styles.listContainer}>
        <FlatList
          data={navigation.getParam("quantities")}
          renderItem={(itemData) => (
            <Text style={styles.listItems}>{itemData.item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <FlatList
          data={navigation.getParam("title")}
          renderItem={(itemData) => (
            <Text style={styles.listItems}>{itemData.item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <FlatList
          data={navigation.getParam("price")}
          renderItem={(itemData) => (
            <Text style={styles.listItems}>$ {itemData.item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.total}>
          Total de la compra: ${navigation.getParam("total")}
        </Text>
      </View>
      <View>
        <Text>¡Muchas gracias!</Text>
      </View> */}
      <Text style={styles.total}>
        Total de la compra: ${navigation.getParam("total")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cartTitle: {
    fontSize: 25,
    marginTop: 40,
    marginBottom: 40,
  },
  listContainer: {
    flexDirection: "row",
    width: 300,
    borderColor: "red",
    borderWidth: 1,
  },
  listItems: {
    borderColor: "red",
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 5,
  },
  totalContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
  },
  total: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default CartScreen;
