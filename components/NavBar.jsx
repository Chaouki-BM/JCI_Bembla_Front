import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event from '../screens/Event';
const Tab = createBottomTabNavigator();
const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        //headerStyle: { backgroundColor: '#f66723'},
      }}>
      <Tab.Screen name="Event" component={Event} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};

export default NavBar;
