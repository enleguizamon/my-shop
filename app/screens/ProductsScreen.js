import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

function ProductsScreen(props) {
  //la lista de productos se encuentra en un estado
  const [products, setProducts] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0IKBPBW3aAVgEQnz5QxYv2MWCGPQFV7T6-n0fhWgTPCRFQ3TahDUuDpkfdqe6u8uwzw&usqp=CAU",
      title: "Maceta",
      price: 2000,
      quantity: 0,
    },
    {
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_833251-MLA42106877824_062020-F.webp",
      title: "Velador",
      price: 3000,
      quantity: 0,
    },
    {
      image:
        "https://assets.weimgs.com/weimgs/ab/images/wcm/products/202115/0259/reeve-mid-century-coffee-table-walnut-c.jpg",
      title: "Mesa",
      price: 5000,
      quantity: 0,
    },
    {
      image:
        "https://http2.mlstatic.com/D_NQ_NP_2X_765542-MLA45799468525_052021-F.webp",
      title: "Almohadones",
      price: 1900,
      quantity: 0,
    },
    {
      image:
        "http://www.americanwood.com.ar/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/castor_ambientado.jpg",
      title: "Silón",
      price: 50000,
      quantity: 0,
    },
    {
      image:
        "https://i.pinimg.com/564x/e5/f2/e2/e5f2e2801e2a1fac7892fd8e46bb2b8f.jpg",
      title: "Espejo",
      price: 4000,
      quantity: 0,
    },
  ]);

  //estado para ir modificando el total de la compra
  const [total, setTotal] = useState(0);

  //boton agregar:  suma 1 a su cantidad
  function updateQuantity(product) {
    product.quantity = product.quantity + 1;
    //actualiza los productos
    setProducts([...products]);
    //calcula el total, precio * cantidad de todos los productos
    setTotal(
      products.reduce(
        (acc, currenValue) => acc + currenValue.price * currenValue.quantity,
        0
      )
    );
  }

  //boton cancelar: vuelve a 0 la cantidad
  function cancelQuantity(product) {
    product.quantity = product.quantity = 0;
    //actualiza los productos
    setProducts([...products]);
    //calcula el total
    setTotal(
      products.reduce(
        (acc, currenValue) => acc + currenValue.price * currenValue.quantity,
        0
      )
    );
  }

  //van al carrito solo los objetos seleccionados
  function goToCart() {
    const filteredProducts = products.filter(
      (product) => product.quantity !== 0
    );
    //a la screen del carrito mando los productos filtrados y el total de la suma (en el segundo argumento de navigate se mandan las props)
    props.navigation.navigate("Cart", {
      products: filteredProducts,
      total: total,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.productsTitle}>Nuestros productos</Text>
      <FlatList
        //map de los productos
        data={products}
        renderItem={(itemData) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: itemData.item.image }} style={styles.image} />
            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>{itemData.item.title}</Text>
              <Text style={styles.price}>${itemData.item.price}</Text>
              <Text style={styles.price}>
                cantidad: {itemData.item.quantity}
              </Text>
              <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => updateQuantity(itemData.item)}
              >
                <Text>Agregar al carrito 🛒</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonCancel}
                onPress={() => cancelQuantity(itemData.item)}
              >
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.goToCart} onPress={goToCart}>
        <Text style={styles.goCartText}>IR AL CARRITO 🛒 (${total})</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  productsTitle: {
    color: "black",
    fontSize: 25,
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    resizeMode: "stretch",
  },
  productContainer: {
    flexDirection: "row",
    height: 240,
    width: 380,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  descriptionContainer: {
    left: 15,
  },
  image: {
    height: 240,
    width: 175,
    resizeMode: "stretch",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 3,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonAdd: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#4CAF50",
    height: 40,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonCancel: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#ff751a",
    height: 30,
    width: 80,
    padding: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  goToCart: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#1aa3ff",
    width: "100%",
    height: 55,
  },
  goCartText: {
    fontSize: 17,
    color: "white",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: "black",
    fontWeight: "bold",
  },
});

export default ProductsScreen;
