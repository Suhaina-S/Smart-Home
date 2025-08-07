import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

const BedroomScreen = () => {
  const [activeTab, setActiveTab] = useState('All Devices');
  const [acOn, setAcOn] = useState(true);
  const [tvOn, setTvOn] = useState(false);
  const [lightOn, setLightOn] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(false);
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('ACControl'); // screen name should match the one in App.js
  };

  // const tabs = ['All Devices', 'Living Room', 'Bedroom', 'Kitchen'];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hey,Suhaina</Text>
        <Text style={styles.date}>Saturday, Dec 09, 2023</Text>
      </View>

      {/* Weather Card */}
      <View style={styles.weatherCard}>
        <MaterialCommunityIcons name="weather-cloudy" size={30} color="#fff" />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.weatherText}>Cloudy</Text>
          <Text style={styles.location}>Rajshahi, Bangladesh</Text>
        </View>
        <Text style={styles.temperature}>28°C</Text>
      </View>

      {/* Weather Stats */}
      <View style={styles.weatherStats}>
        <Text style={styles.statText}>31° Sensible</Text>
        <Text style={styles.statText}>65% Humidity</Text>
        <Text style={styles.statText}>3 W. Force</Text>
        <Text style={styles.statText}>1009hpa</Text>
      </View>

      {/* Room Tabs */}
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      {/* Device Cards */}

      <View style={styles.deviceGrid}>
      <TouchableOpacity onPress={handleCardPress}>
        <DeviceCard
          title="Air Condition"
          devices="4 Devices"
          icon="air-conditioner"
          isOn={acOn}
          onToggle={() => setAcOn(!acOn)}
        />
      </TouchableOpacity>
    
        <DeviceCard
          title="Smart TV"
          devices="2 Devices"
          icon="television"
          isOn={tvOn}
          onToggle={() => setTvOn(!tvOn)}
        />
        <DeviceCard
          title="Smart Lighting"
          devices="8 Devices"
          icon="lightbulb-on"
          isOn={lightOn}
          onToggle={() => setLightOn(!lightOn)}
        />
        <DeviceCard
          title="Speaker"
          devices="6 Devices"
          icon="speaker"
          isOn={speakerOn}
          onToggle={() => setSpeakerOn(!speakerOn)}
        />
      </View>
    </View>
  );
};

const DeviceCard = ({ title, devices, icon, isOn, onToggle }) => (
  <View style={[styles.deviceCard, isOn && styles.deviceCardActive]}>
    <MaterialCommunityIcons
      name={icon}
      size={30}
      color={isOn ? '#00FFD1' : '#888'}
    />
    <Text style={styles.deviceTitle}>{title}</Text>
    <Text style={styles.deviceCount}>{devices}</Text>
    <Switch
      value={isOn}
      onValueChange={onToggle}
      trackColor={{ false: '#555', true: '#00FFD1' }}
      thumbColor={isOn ? '#00FFD1' : '#888'}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 10,
  },
  greeting: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  date: {
    color: '#bbb',
    marginTop: 4,
  },
  weatherCard: {
    flexDirection: 'row',
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  weatherText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    color: '#bbb',
    fontSize: 12,
  },
  temperature: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  weatherStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 15,
  },
  statText: {
    color: '#aaa',
    fontSize: 12,
  },
  tabs: {
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    marginRight: 10,
  },
  tabButtonActive: {
    backgroundColor: '#00FFD1',
  },
  tabText: {
    color: '#aaa',
  },
  tabTextActive: {
    color: '#000',
    fontWeight: 'bold',
  },
  deviceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  deviceCard: {
    width: '47%',
    backgroundColor: '#1f1f1f',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  deviceCardActive: {
    backgroundColor: '#2b2b2b',
  },
  deviceTitle: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  deviceCount: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default BedroomScreen;
