import React from 'react';
import { StyleSheet } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";

import { Text, View } from "../components/Themed";
import ButtonPlus from "../components/ButtonPlus";
import Colors from "../constants/Colors";
import Order from "../assets/images/order.svg";
import { HomeParamList, SCREEN_NAME } from "../types";

export default function HomeDessertScreen({
  navigation,
}: StackScreenProps<HomeParamList>) {
  const onPress = () => {
    navigation.navigate(SCREEN_NAME.home);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title} testID="createDessert">Crear un Nuevo Postre</Text>
      <Order width="60%" height="50%" style={styles.image} />
      <View style={styles.buttonContainer}>
        <ButtonPlus onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  title: {
    flex: 3,
    width: '80%',
    fontSize: 40,
    fontWeight: "700",
    lineHeight: 41,
    paddingLeft: '10%',
    paddingTop: '30%',
  },
  image: {
    flex: 4,
    alignSelf: "center",
    width: "100%",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  buttonContainer: {
    flex: 2,
    marginTop: 30,
    alignSelf: "center",
    color: Colors.light.background,
  },
});
