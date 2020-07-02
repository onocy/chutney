import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform, SafeAreaView, Button, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import ProductsOverview, {
  screenOptions as productsOverviewScreenOptions,
} from "../screens/shop/ProductOverview";
import CatererOverview from "../screens/shop/CatererOverview";
import ProductDetail from "../screens/shop/ProductDetails";
import Cart from "../screens/shop/Cart";

const Tab = createBottomTabNavigator();

export const ProductsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Caterers") {
            iconName = "food";
          } else if (route.name === "Orders") {
            iconName = "food-fork-drink";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.secondary,
      }}
    >
      <Tab.Screen name="Caterers" component={CatererOverview} />
      <Tab.Screen
        name="Orders"
        component={ProductsOverview}
        options={productsOverviewScreenOptions}
      />
    </Tab.Navigator>
  );
};
