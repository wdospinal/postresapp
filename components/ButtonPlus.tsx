import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

const { height } = Dimensions.get("window");

export default function ButtonPlus({ onPress }: { onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.plus}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const BUTTON_SIZE = height > 700 ? 70 : 50;
const BUTTON_PLUS_SIZE = height > 700 ? 50 : 30;

const styles = StyleSheet.create({
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
  },
  container: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.primary,
    borderRadius: BUTTON_SIZE,
  },
  plus: {
    fontSize: BUTTON_PLUS_SIZE,
    lineHeight: BUTTON_PLUS_SIZE,
    fontWeight: '400',
  },
});
