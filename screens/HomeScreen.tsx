import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import ButtonCategory from "../components/ButtonCategory";
import DessertCard from "../components/DessertCard";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { mockCategories, mockDesserts } from "../mock";
import {
  CardSizes,
  Category,
  CategoryName,
  Dessert,
  HomeParamList,
  SCREEN_NAME,
} from "../types";

const { height } = Dimensions.get("window");

export default function HomeScreen({
  navigation,
}: StackScreenProps<HomeParamList>) {
  const [desserts, setDesserts] = useState<Array<Dessert>>([]);
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [selected, setSelected] = useState<CategoryName>(CategoryName.general);

  useEffect(() => {
    // TODO: get the data from the API
    setCategories(mockCategories);
    setDesserts(mockDesserts);
  }, []);

  const openPressCategory = useCallback((category: Category) => {
    const currentType = category.type;
    setSelected(currentType);
    setDesserts(mockDesserts.filter((cat) => cat.type.includes(currentType)));
  }, []);

  const renderCategory = (category: Category) => {
    return (
      <ButtonCategory
        key={category.id}
        category={category}
        onPress={() => openPressCategory(category)}
        selected={selected}
      />
    );
  };

  const openPressDessert = useCallback((dessert: Dessert) => {
    navigation.navigate(SCREEN_NAME.detailDessert, { dessert });
  }, []);

  const renderDessert = (dessert: Dessert) => {
    return (
      <DessertCard
        key={dessert.id}
        dessert={dessert}
        onPress={() => openPressDessert(dessert)}
        size={CardSizes.BIG}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deliciosos postres para ti</Text>
      <View style={styles.content}>
        <ScrollView
          style={styles.scroll}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((category: Category) => renderCategory(category))}
        </ScrollView>
        <ScrollView
          style={styles.scrollDesserts}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {desserts.map((category: Dessert) => renderDessert(category))}
        </ScrollView>
      </View>
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
  content: {
    flex: 4,
  },
  title: {
    flex: 1,
    width: "80%",
    fontSize: height > 700 ? 40 : 30,
    fontWeight: "700",
    lineHeight: height > 700 ? 40 : 30,
    paddingTop: "30%",
  },
  scroll: {
    height: 40,
    marginTop: 20,
  },
  scrollDesserts: {
    marginTop: 20,
  },
});
