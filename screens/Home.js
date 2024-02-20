
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../Styles';
import { UseTheme } from '../context/UseTheme';

export default function Home() {
  const {isDarkMode} = UseTheme()

  return (
    <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
      <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
    </View>
  )
}
