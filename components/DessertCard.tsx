import React from "react";
import { Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import Colors from "../constants/Colors";
import { Dessert, CardSizes } from "../types";
import { Text, View } from "./Themed";

interface DessertCardProps {
  onPress: () => void;
  dessert: Dessert;
  size: CardSizes;
}
const { height } = Dimensions.get("window");

export default function DessertCard({
  onPress,
  dessert,
  size,
}: DessertCardProps) {
  const container =
    size === CardSizes.BIG ? styles.containerBig : styles.containerSmall;
  const image = size === CardSizes.BIG ? styles.imageBig : styles.imageSmall;
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        style={image}
        source={{
          uri: dessert.uri,
        }}
      />
      <View style={container}>
        <Text style={styles.name}>{dessert.name}</Text>
        <Text style={styles.price}>${dessert.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const IMAGE_SIZE = height > 700 ? 160 : 80;
const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  imageBig: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE,
    zIndex: 2,
  },
  imageSmall: {
    width: IMAGE_SIZE / 1.5,
    height: IMAGE_SIZE / 1.5,
    borderRadius: IMAGE_SIZE / 1.5,
    zIndex: 2,
  },
  containerBig: {
    top: -IMAGE_SIZE / 2,
    width: IMAGE_SIZE + 40,
    height: IMAGE_SIZE + 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.white,
    borderRadius: 30,
  },
  containerSmall: {
    top: -IMAGE_SIZE / 4,
    width: IMAGE_SIZE / 1.1,
    height: IMAGE_SIZE + 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.white,
    borderRadius: 30,
  },
  name: {
    lineHeight: 22,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
  },
  price: {
    lineHeight: 20,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    color: Colors.light.primary,
  },
});
