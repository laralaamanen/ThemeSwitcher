
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import { UseTheme } from '../context/UseTheme';
import Styles from '../Styles';

export default function Settings () {
  const { isDarkMode } = UseTheme()
  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <ThemeSwitchButton />
      <Text>Settings Screen</Text>
    </View>
  );
};
