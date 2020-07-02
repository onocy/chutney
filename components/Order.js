import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Card from "../components/Card";

const Order = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.caterer}</Text>
              <Text style={styles.description}>{props.date}</Text>
              <Text style={styles.price}>{props.total}</Text>
            </View>
            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 100,
    margin: 5,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  details: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: "#888",
  },
  price: {
    fontSize: 14,
    marginVertical: 3,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "23%",
    paddingHorizontal: 20,
  },
});

export default Order;
