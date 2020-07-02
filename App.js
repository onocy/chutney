import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProductsNavigator } from "./navigation/ShopNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Header />
        <ProductsNavigator />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
