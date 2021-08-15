import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    color: '#2e78b7',
  },
});
