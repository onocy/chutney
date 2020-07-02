import React from "react";
import { FlatList, View, Text, Button } from "react-native";
import CATERERS from "../../data/caterers";
import Caterer from "../../components/Caterer";

export default CatererOverview = (props) => {
  return (
    <View>
      <FlatList
        data={CATERERS}
        renderItem={({ item }) => (
          <Caterer
            image={item.imageUrl}
            name={item.name}
            description={item.description}
            address={item.address}
          >
          </Caterer>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};