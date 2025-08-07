import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

const ACControl = () => {
  const [temperature, setTemperature] = useState(21);
  const [isOn, setIsOn] = useState(true);

  const increaseTemp = () => setTemperature((prev) => Math.min(prev + 1, 30));
  const decreaseTemp = () => setTemperature((prev) => Math.max(prev - 1, 16));

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Air Conditioner</Text>

      {/* Temperature Display */}
      <View style={styles.thermostat}>
        <TouchableOpacity onPress={decreaseTemp}>
          <Feather name="minus-circle" size={40} color="#FF6B6B" />
        </TouchableOpacity>

        <View style={styles.tempDisplay}>
          <Text style={styles.tempValue}>{temperature}°C</Text>
        </View>

        <TouchableOpacity onPress={increaseTemp}>
          <Feather name="plus-circle" size={40} color="#6BCB77" />
        </TouchableOpacity>
      </View>

      {/* Power Switch */}
      <View style={styles.switchRow}>
        <Text style={styles.label}>Power</Text>
        <Switch
          value={isOn}
          onValueChange={setIsOn}
          trackColor={{ false: '#999', true: '#6BCB77' }}
          thumbColor={isOn ? '#fff' : '#888'}
        />
      </View>

      {/* Mode Controls */}
      <View style={styles.modeContainer}>
        <View style={styles.modeButton}>
          <MaterialCommunityIcons name="fan" size={24} color="#fff" />
          <Text style={styles.modeText}>Fan</Text>
        </View>
        <View style={styles.modeButton}>
          <MaterialCommunityIcons name="snowflake" size={24} color="#fff" />
          <Text style={styles.modeText}>Cool</Text>
        </View>
        <View style={styles.modeButton}>
          <MaterialCommunityIcons name="weather-sunny" size={24} color="#fff" />
          <Text style={styles.modeText}>Dry</Text>
        </View>
        <View style={styles.modeButton}>
          <MaterialCommunityIcons name="fire" size={24} color="#fff" />
          <Text style={styles.modeText}>Heat</Text>
        </View>
      </View>
    </View>
  );
};

export default ACControl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  thermostat: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 40,
  },
  tempDisplay: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 100,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tempValue: {
    fontSize: 40,
    color: '#333',
    fontWeight: 'bold',
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    color: '#555',
  },
  modeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 20,
  },
  modeButton: {
    alignItems: 'center',
  },
  modeText: {
    color: '#fff',
    marginTop: 5,
    fontSize: 12,
  },
});
