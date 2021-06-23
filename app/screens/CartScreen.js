import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

//llegan las props de navigate
function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Productos seleccionados:</Text>
      <FlatList
        data={navigation.getParam("products")}
        renderItem={(ItemData) => (
          <View style={styles.listContainer}>
            <Image source={{ uri: ItemData.item.image }} style={styles.image} />
            <Text style={styles.listItems}>{ItemData.item.quantity}</Text>
            <Text style={styles.listItems}>{ItemData.item.title}</Text>
            <Text style={styles.listItems}>$ {ItemData.item.price}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.flatList}
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
      <Text style={styles.thanks}>¡Muchas gracias!</Text>
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
  flatList: {
    height: 50,
  },
  listContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 3,
  },
  listItems: {
    fontSize: 20,
  },
  image: {
    height: 60,
    width: 50,
  },
  total: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  thanks: {
    fontWeight: "bold",
    fontSize: 20,
    height: 200,
  },
});
export default CartScreen;
