//configuracion de la navegacion
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProductsScreen from "../screens/ProductsScreen";
import CartScreen from "../screens/CartScreen";
import CategoriesScreen from "../screens/CategoriesScreen";

const ShopNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  Welcome: WelcomeScreen,
  Products: ProductsScreen,
  Cart: CartScreen,
  Categories: CategoriesScreen,
});

export default createAppContainer(ShopNavigator);
