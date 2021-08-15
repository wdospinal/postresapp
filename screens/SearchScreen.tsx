import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen SearchScreen doesn't exist.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
