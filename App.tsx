import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FerstPage from './screens/FerstPage';
import LoginPage from './screens/LoginPage';
import AddRestInformationPage from './screens/AddRestInformationPage';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FerstPage"
          screenOptions={{
            headerShown: false,
            animation: 'slide_from_right',
            //headerStyle: { backgroundColor: '#f66723'},
          }}>
          <Stack.Screen name="FerstPage" component={FerstPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen
            name="AddRestInformationPage"
            component={AddRestInformationPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
    flex: 1,
  },
});
