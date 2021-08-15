import { RouteProp } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { Dessert, HomeParamList, SCREEN_NAME } from "../types";

interface DetailDessertProps {
  route: RouteProp<HomeParamList, SCREEN_NAME.detailDessert>;
}

export default function DetailDessertScreen({ route }: DetailDessertProps) {
  const [dessert, currentDessert] = useState<Dessert>();
  React.useEffect(() => {
    if (route.params?.dessert) {
      currentDessert(route.params?.dessert);
    }
  }, [route.params?.dessert]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{dessert?.name}</Text>
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
