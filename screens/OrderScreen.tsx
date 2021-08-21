import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { HomeParamList, SCREEN_NAME } from "../types";

type ProfileScreenRouteProp = RouteProp<
  HomeParamList,
  SCREEN_NAME.detailDessert
>;

type ProfileScreenNavigationProp = StackNavigationProp<HomeParamList>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export default function OrderScreen({ route, navigation }: Props) {
  const { dessert } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dessert.name}</Text>
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
});
