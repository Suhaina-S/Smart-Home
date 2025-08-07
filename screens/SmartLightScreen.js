import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

const SmartLightScreen = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <Text style={styles.text}>Smart Light Control Panel</Text>
      {/* You can add your sliders, toggles, etc. here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default SmartLightScreen;
