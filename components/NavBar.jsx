import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event from '../screens/Event';
import FilePage from '../screens/FilePage';
import SettingPage from '../screens/SettingPage';
import PresencePage from '../screens/PresencePage';
import TrainingPage from '../screens/TrainingPage';
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
      <Tab.Screen name="Training" component={TrainingPage} />
      <Tab.Screen name="File" component={FilePage} />
      <Tab.Screen name="Presence" component={PresencePage} />
      <Tab.Screen name="Setting" component={SettingPage} />
    </Tab.Navigator>
  );
};

export default NavBar;
