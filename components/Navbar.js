import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
        <MaterialCommunityIcons name="home" size={24} color="#fff" />
        <Text style={styles.label}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
        <FontAwesome5 name="user" size={22} color="#fff" />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
        <MaterialCommunityIcons name="cog" size={24} color="#fff" />
        <Text style={styles.label}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Analytics')}>
        <MaterialCommunityIcons name="chart-bar" size={24} color="#fff" />
        <Text style={styles.label}>Analytics</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'black',
    borderTopWidth: 20,
    borderTopColor: 'black',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10,
  },
  navItem: {
    alignItems: 'center',
    top: -15,
  },
  label: {
    color: 'white',
    fontSize: 12,
    marginTop: 7,
  },
});

export default Navbar;
