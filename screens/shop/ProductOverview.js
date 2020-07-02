import React from "react";
import { useSelector } from "react-redux";
import { FlatList, View, Text, Button } from "react-native";
import ProductItem from "../../components/ProductItem";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from "../../constants/Colors";
import HeaderButton from '../../components/HeaderButton';
import PRODUCTS from '../../data/products';



export default ProductOverview = (props) => {
  return (
    <View>
      <Text></Text>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
          <ProductItem
            image={item.imageUrl}
            title={item.title}
            price={item.price}
          >
            <Button color={Colors.secondary} title="View Details" />
            <Button color={Colors.primary} title="To Cart" />
          </ProductItem>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};