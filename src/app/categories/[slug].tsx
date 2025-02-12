import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { Redirect, Stack, useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "assets/products";
import { CATEGORIES } from "assets/categories";
import { ProductListItem } from "@/components/product-list-item";

const Category = () => {
  // get slug from params
  const { slug } = useLocalSearchParams<{ slug: string }>();

  // find category by slug
  const category = CATEGORIES.find((category) => category.slug === slug);

  // redirect to 404 if category not found
  if (!category) {
    return <Redirect href="/404" />;
  }

  // TODO: filter products by category slug
  const products = PRODUCTS.filter((product) => product.category.slug === slug);

  return (
    <View>
      <Stack.Screen options={{ title: category.name }} />
      <Image source={{ uri: category.imageUrl }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{category.name}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  categoryImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 16,
  },
  categoryName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  productList: {
    flexGrow: 1,
  },
  productRow: {
    justifyContent: "space-between",
  },
  productContainer: {
    flex: 1,
    margin: 8,
  },
});
