import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 50) / 2; // For 2 cards per row with padding

const HomeScreen = () => {
  const navigation = useNavigation();

  const rooms = [
    { name: 'Bedroom', icon: 'bed' },
    { name: 'LivingRoom', icon: 'sofa' },
    { name: 'Kitchen', icon: 'silverware-fork-knife' },
    { name: 'Bathroom', icon: 'shower' },
    { name: 'DiningRoom', icon: 'food' },
    { name: 'Office', icon: 'laptop' },
  ];

  return (
    <LinearGradient colors={['#ffffff', '#f1f1ff']} style={styles.gradient}>
      <Navbar />
      <Text style={styles.title}>Smart Home Control Panel</Text>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.grid}>
          {rooms.map((room) => (
            <TouchableOpacity
              key={room.name}
              style={styles.card}
              onPress={() => navigation.navigate(room.name)}
            >
              <MaterialCommunityIcons name={room.icon} size={40} color="#4B3EF0" />
              <Text style={styles.cardText}>{room.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B3EF0',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 70,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffffee',
    width: CARD_WIDTH,
    borderRadius: 20,
    paddingVertical: 60,   // Increased height
    paddingHorizontal: 50, // Optional for width balance
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
    color: '#37474f',
    textAlign: 'center',
  },
});

export default HomeScreen;
