import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { Dessert, HomeParamList, SCREEN_NAME } from "../types";

interface DetailDessertProps {
  route: RouteProp<HomeParamList, SCREEN_NAME.detailDessert>;
}

const { height } = Dimensions.get("window");

export default function DetailDessertScreen({ route }: DetailDessertProps) {
  const [dessert, currentDessert] = useState<Dessert>();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (route.params?.dessert) {
      currentDessert(route.params?.dessert);
    }
  }, [route.params?.dessert]);
  const openPressDessert = useCallback(() => {
    navigation.navigate(SCREEN_NAME.detailDessert, { dessert });
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: dessert?.uri,
        }}
      />
      <Text style={styles.title}>{dessert?.name}</Text>
      <Text style={styles.price}>${dessert?.price}</Text>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.header}>Informacion de envio</Text>
        <Text style={styles.info}>
          Una vez hayas realizado el pedido uno de nuestros reposteros se
          encargará de revisarlo y se pondrá en contacto con usted para realizar
          la entrega de su pedido dentro de los siguientes 5 días hábiles
        </Text>
        <Text style={styles.header}>Politica de retornos y devoluciones</Text>
        <Text style={styles.info}>No se reciben reclamos ni devoluciones</Text>
      </ScrollView>
      <TouchableOpacity onPress={openPressDessert} style={styles.button}>
        <Text style={styles.buttonText}>Agregar al pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const IMAGE_SIZE = height > 700 ? 250 : 125;

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
    fontSize: 17,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 15,
  },
  info: {
    fontSize: 15,
    lineHeight: 20,
    textAlign: "left",
    marginVertical: 5,
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
    borderRadius: IMAGE_SIZE,
    zIndex: 2,
    alignSelf: "center",
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
