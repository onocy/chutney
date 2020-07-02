import React from "react";
import { FlatList, View, Text, Button } from "react-native";
import ORDERS from "../../data/orders";
import Order from "../../components/Order";

export default OrdersOverview = (props) => {
  return (
    <View>
      <FlatList
        data={ORDERS}
        renderItem={({ item }) => (
          <Order
            caterer={item.caterer}
            date={item.date}
            total={item.total}
          >
          </Order>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};