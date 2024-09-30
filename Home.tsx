// HomeScreen.tsx
import React from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import Svg, {Defs, RadialGradient, Stop, Circle} from 'react-native-svg';

const {height, width} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View style={styles.background}>
        {/* Radial Gradient using react-native-svg */}
        <Svg
          height={width * 1.4}
          width={width * 1.4}
          style={styles.gradientLayer1}>
          <Defs>
            <RadialGradient
              id="grad"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
              gradientUnits="userSpaceOnUse">
              <Stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <Stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </RadialGradient>
          </Defs>
          <Circle cx="50%" cy="50%" r={width * 0.7} fill="url(#grad)" />
        </Svg>

        {/* Diagonal Lines */}
        <View style={styles.linesContainer}>
          {[0.05, 0.2, 0.35].map((position, index) => (
            <View key={index} style={[styles.line, {top: height * position}]} />
          ))}
        </View>

        <Text style={styles.text}>Working on it</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(22,22,23,255)', // Dark base background color
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },
  gradientLayer1: {
    position: 'absolute',
    top: -width * 0.7,
    left: -width * 0.7,
    width: width * 1.4,
    height: width * 1.4,
  },
  linesContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  line: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Subtle white lines
    height: 1,
    width: width * 1.5,
    transform: [{rotate: '45deg'}],
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomeScreen;
