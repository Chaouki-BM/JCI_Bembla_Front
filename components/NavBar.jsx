import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Event from '../screens/Event';
import FilePage from '../screens/FilePage';
import SettingPage from '../screens/SettingPage';
import PresencePage from '../screens/PresencePage';
import TrainingPage from '../screens/TrainingPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();
const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Event"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
        //headerStyle: { backgroundColor: '#f66723'},
      }}>
      <Tab.Screen
        name="Event"
        component={Event}
        options={{
          tabBarLabel: 'الأحداث',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={TrainingPage}
        options={{
          tabBarLabel: 'التدريب',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="chalkboard-teacher" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="File"
        component={FilePage}
        options={{
          tabBarLabel: 'الملفات',
          tabBarIcon: ({ color }) => (
            <Ionicons name="file-tray-stacked-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Presence"
        component={PresencePage}
        options={{
          tabBarLabel: 'الحضور',
          tabBarIcon: ({ color }) => (
            <Foundation name="clipboard-pencil" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingPage}
        options={{
          tabBarLabel: 'الإعدادات',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavBar;
