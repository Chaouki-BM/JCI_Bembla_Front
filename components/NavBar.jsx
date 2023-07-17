import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event from '../screens/Event';
import FilePage from '../screens/FilePage';
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
      <Tab.Screen name="File" component={FilePage} />
    </Tab.Navigator>
  );
};

export default NavBar;
