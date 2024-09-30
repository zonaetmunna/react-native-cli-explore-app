// src/components/SafeAreaWrapper.js
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const SafeAreaWrapper = ({children, style}: any) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent', // Ensures safe area is transparent
  },
});

export default SafeAreaWrapper;
