import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>What Up Cats!?</Text>
      <Text style={styles.text2}>Koa Kitty Rules!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'purple',
  },
  text2: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'darkblue',
  }
});
