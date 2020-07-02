import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

import ProductsOverview, {
  screenOptions as productsOverviewScreenOptions,
} from "../screens/shop/ProductOverview";
import CatererOverview from "../screens/shop/CatererOverview";
import OrdersOverview from "../screens/shop/OrdersOverview";

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
          } else if (route.name === "Items") {
            iconName = "food-variant";
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
        name="Items"
        component={ProductsOverview}
        options={productsOverviewScreenOptions}
      />
      <Tab.Screen name="Orders" component={OrdersOverview} />
    </Tab.Navigator>
  );
};
