import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Chutney</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 18,
  },
});
