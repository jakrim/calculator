
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calculator } from './components/Calculator';

export default function App() {
  return <Calculator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
