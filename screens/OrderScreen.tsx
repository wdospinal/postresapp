import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { HomeParamList, SCREEN_NAME } from "../types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <Text style={styles.title}>Informacion de envio</Text>
      <View style={styles.gesture}>
        <MaterialCommunityIcons
          name="gesture-swipe-horizontal"
          size={24}
          color="black"
        />
        <Text style={styles.title}>swipe el item para borrarlo</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  gesture: {
    flexDirection: 'row',
  }
});
