// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SmartHomeLogin from './screens/SmartHomeLogin';
import HomeScreen from './screens/HomeScreen';
import SmartLightScreen from './screens/SmartLightScreen';
import ACControl from './screens/BedroomScreen/ACControl';
import BedroomScreen from './screens/BedroomScreen/BedroomScreen'
import LivingRoomScreen from './screens/LivingRoomScreen';
import KitchenScreen from './screens/KitchenScreen';
import BathroomScreen from './screens/BathroomScreen';
import DiningRoomScreen from './screens/DiningRoomScreen';
import OfficeScreen from './screens/OfficeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={SmartHomeLogin} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SmartLight" component={SmartLightScreen} />
        <Stack.Screen name="Bedroom" component={BedroomScreen} />
        <Stack.Screen name="LivingRoom" component={LivingRoomScreen} />
        <Stack.Screen name="Kitchen" component={KitchenScreen} />
        <Stack.Screen name="Bathroom" component={BathroomScreen} />
        <Stack.Screen name="DiningRoom" component={DiningRoomScreen} />
        <Stack.Screen name="Office" component={OfficeScreen} />
        <Stack.Screen name="ACControl" component={ACControl} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
