import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Image, StyleSheet } from "react-native";

import ButtonPlus from "../components/ButtonPlus";
import { Text, View } from "../components/Themed";
import { SCREEN_NAME } from "../types";
import Order from '../assets/images/order.svg';


export default function Principal() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(SCREEN_NAME.search);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear un Nuevo Postre</Text>
      <Order width="80%" height="50%" style={styles.image}/>
      <View style={styles.buttonContainer}>
        <ButtonPlus onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 41,
    flex: 3,
    paddingLeft: 50,
    paddingTop: 70,
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
    flex: 1,
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: "#F2F2F2",
  },
});
