// LivingRoomScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Navbar from '../components/Navbar';

const LivingRoomScreen = () => {
  const [light, setLight] = useState(false);
  const [fan, setFan] = useState(false);
  const [ac, setAc] = useState(false);
  const [door, setDoor] = useState(true);

  return (
    <LinearGradient colors={['#ffffff', '#f1f1ff']} style={styles.container}>
      <Navbar />
      <Text style={styles.title}>Living Room Controls</Text>
      <Control icon="lightbulb-on" label="Light" state={light} toggle={() => setLight(!light)} />
      <Control icon="fan" label="Fan" iconPack="FontAwesome5" state={fan} toggle={() => setFan(!fan)} />
      <Control icon="air-conditioner" label="AC" state={ac} toggle={() => setAc(!ac)} />
      <LockControl state={door} toggle={() => setDoor(!door)} />
    </LinearGradient>
  );
};

const Control = ({ icon, label, state, toggle, iconPack = 'MaterialCommunityIcons' }) => {
  const Icon = iconPack === 'FontAwesome5' ? FontAwesome5 : MaterialCommunityIcons;
  return (
    <View style={styles.card}>
      <Icon name={icon} size={40} color={state ? '#4B3EF0' : '#aaa'} />
      <Text style={styles.cardText}>{label}</Text>
      <Switch value={state} onValueChange={toggle} />
    </View>
  );
};

const LockControl = ({ state, toggle }) => (
  <View style={styles.card}>
    <Entypo name="lock" size={40} color={state ? '#4caf50' : '#f44336'} />
    <Text style={styles.cardText}>Door</Text>
    <TouchableOpacity
      style={[styles.lockButton, { backgroundColor: state ? '#4caf50' : '#f44336' }]}
      onPress={toggle}
    >
      <Text style={styles.lockText}>{state ? 'Locked' : 'Unlocked'}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#4B3EF0', textAlign: 'center', marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 15, margin: 15, padding: 20, alignItems: 'center', elevation: 4 },
  cardText: { fontSize: 16, marginVertical: 10, color: '#37474f' },
  lockButton: { paddingVertical: 8, paddingHorizontal: 20, borderRadius: 20 },
  lockText: { color: 'white', fontWeight: 'bold' },
});

export default LivingRoomScreen;