import { StackScreenProps } from "@react-navigation/stack";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import DessertCard from "../components/DessertCard";
import { FontAwesome } from "@expo/vector-icons";

import { View } from "../components/Themed";
import Colors from "../constants/Colors";
import { mockDesserts } from "../mock";
import {
  CardSizes,
  Dessert,
  SCREEN_NAME,
  SearchParamList,
} from "../types";

export default function SearchScreen({
  navigation,
}: StackScreenProps<SearchParamList>) {
  const [desserts, setDesserts] = useState<Array<Dessert>>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // TODO: get the data from the API
    setDesserts(mockDesserts);
  }, []);

  const onChangeText = useCallback(
    (text) => {
      setInput(text);
      setDesserts(
        mockDesserts.filter(
          (cat) =>
            cat.name.toLowerCase().includes(text.toLowerCase()) ||
            cat.type.includes(text)
        )
      );
    },
    [input]
  );
  const openPressDessert = useCallback((dessert: Dessert) => {
    navigation.navigate(SCREEN_NAME.detailDessert, { dessert });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <FontAwesome name="search" size={20} color={Colors.light.text} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={input}
          placeholder="Entra el postre que buscas"
          keyboardType="web-search"
        />
      </View>
      <ScrollView
        style={styles.scrollDesserts}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.list}>
          <FlatList
            data={desserts}
            keyExtractor={(dessert: Dessert) => dessert.id.toString()}
            renderItem={({ item }) => (
              <DessertCard
                key={item.id}
                dessert={item}
                onPress={() => openPressDessert(item)}
                size={CardSizes.SMALL}
              />
            )}
            horizontal={false}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: "100%",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 40,
  },
  input: {
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 20,
    color: Colors.light.text,
    height: 50,
    paddingLeft: 20,
  },
  scrollDesserts: {
    flex: 1,
    width: "100%",
  },
  list: {
    alignItems: "center",
    backgroundColor: Colors.light.backgroundWhite,
    borderRadius: 30,
    marginTop: 20,
    paddingTop: 30,
  },
});
