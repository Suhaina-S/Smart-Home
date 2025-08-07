import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Slider, Image } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const ACControl = () => {
  const [temperature, setTemperature] = useState(21);
  const [mode, setMode] = useState('cool');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Air Conditioner</Text>

      <Image
        source={require('../../assets/ac.jpg')}
        style={styles.acImage}
        resizeMode="contain"
      />

      <View style={styles.tempContainer}>
        <Text style={styles.tempLabel}>Temp</Text>
        <Text style={styles.tempValue}>{temperature}°C</Text>
        <Slider
          style={styles.slider}
          minimumValue={16}
          maximumValue={30}
          step={1}
          value={temperature}
          onValueChange={value => setTemperature(value)}
          minimumTrackTintColor="#FF8C5A"
          maximumTrackTintColor="#ccc"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>TURN OFF</Text>
      </TouchableOpacity>

      <View style={styles.modes}>
        <TouchableOpacity onPress={() => setMode('fan')}>
          <MaterialCommunityIcons name="fan" size={28} color={mode === 'fan' ? '#FF8C5A' : '#aaa'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode('cool')}>
          <FontAwesome5 name="snowflake" size={28} color={mode === 'cool' ? '#FF8C5A' : '#aaa'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMode('heat')}>
          <MaterialCommunityIcons name="fire" size={28} color={mode === 'heat' ? '#FF8C5A' : '#aaa'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  acImage: {
    width: 200,
    height: 120,
    marginBottom: 30,
    borderRadius: 10,
  },
  tempContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  tempLabel: {
    fontSize: 16,
    color: '#666',
  },
  tempValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF8C5A',
  },
  slider: {
    width: 250,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FF8C5A',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  modes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 180,
  },
});
export default ACControl;
