import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';

export const Calculator = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1,borderColor: 'yellow',
      borderWidth: 2, width: '100%'}}>

      </View>
      <View style={{flex: 2, borderColor: 'red',
      borderWidth: 3,width: '100%'}}>

      </View>
      <StatusBar style='light' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
