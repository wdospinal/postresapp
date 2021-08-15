import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import Colors from "../constants/Colors";
import { Category, CategoryName } from "../types";
import { Text, View } from "./Themed";

const { height } = Dimensions.get("window");

interface ButtonCategoryProps {
  onPress: () => void;
  selected: CategoryName;
  category: Category;
}

export default function ButtonCategory({
  onPress,
  selected,
  category,
}: ButtonCategoryProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.categoryContainer,
          selected === category.type && styles.selected,
        ]}
      >
        <Text style={styles.category}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    width: 120,
    height: 33,
    alignItems: "center",
    marginLeft: 30,
  },
  category: {
    fontSize: height > 700 ? 17 : 12,
    color: Colors.light.primary,
    lineHeight: 20,
  },
  selected: {
    borderBottomWidth: 2,
    borderColor: Colors.light.primary,
  },
});
