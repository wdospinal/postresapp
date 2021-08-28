import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import React, { useCallback, useState } from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { HomeParamList, SCREEN_NAME } from "../types";
import Waiter from "../assets/images/WAITER.svg";

const { height } = Dimensions.get("window");

type ProfileScreenRouteProp = RouteProp<
  HomeParamList,
  SCREEN_NAME.detailDessert
>;

type ProfileScreenNavigationProp = StackNavigationProp<HomeParamList>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

export default function SuccessfulOrderScreen({ route, navigation }: Props) {
  const [dessert, currentDessert] = useState();

  React.useEffect(() => {
    if (route.params?.dessert) {
      currentDessert(undefined);
    }
  }, [route.params?.dessert]);

  const openPressReturnHomeDessert= useCallback(() => {
      navigation.navigate(SCREEN_NAME.home);
  }, []);

  return (
    <View style={styles.container}>
      <Waiter width="60%" height="50%" style={styles.image}/>
      <Text style={styles.title}>Muchas Gracias</Text>
      <Text style={styles.info}>Pedido realizado con exito</Text>
      <TouchableOpacity onPress={openPressReturnHomeDessert} style={styles.button}>
        <Text style={styles.buttonText}>Continuar viendo postres</Text>
      </TouchableOpacity>
    </View>
  );
}

const IMAGE_SIZE = height > 700 ? 700 : 350;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 20,
  },
  title: {
    fontSize: 28,
    lineHeight: 33,
    fontWeight: "600",
    alignSelf: "center",
    color: Colors.light.text,
    marginTop: height > 700 ? 40 : 10,
  },
  header: {
    fontSize: 22,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 15,
  },
  info: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    marginVertical: 5,
    opacity: 0.5,
  },
  price: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: "bold",
    alignSelf: "center",
    color: Colors.light.primary,
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    zIndex: 2,
    alignSelf: "center",
    flex: 4,
  },
  button: {
    backgroundColor: Colors.light.primary,
    alignItems: "center",
    justifyContent: "center",
    maxHeight: height > 700 ? 70 : 40,
    borderRadius: 30,
    flex: 1,
  },
  content: {
    flex: 4,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: height > 700 ? 17 : 12,
    lineHeight: 20,
    color: Colors.light.textWhite,
  },
});
