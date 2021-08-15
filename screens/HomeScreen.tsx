import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { mockCategories } from "../mock";
import { Category } from "../types";

export default function HomeScreen() {
  const [categories, setCategories] = useState<Array<Category>>([]);
  useEffect(() => {
    // TODO: get the data from the API
    setCategories(mockCategories);
  }, []);
  const renderCategory = (category: Category) => {
    return (
      <View>
        <Text style={styles.category}>{category.name}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deliciosos postres para ti</Text>
      {categories.map((category: Category) => renderCategory(category))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: Colors.light.primary,
  },
  category: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
