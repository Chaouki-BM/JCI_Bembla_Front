import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FerstPage from './screens/FerstPage';
import LoginPage from './screens/LoginPage';
import AddRestInformationPage from './screens/AddRestInformationPage';
import Progress from './screens/Progress';
import NavBar from './components/NavBar';
import ForgetPassword from './screens/ForgetPassword';
import ListOfTrainersPage from './screens/ListOfTrainersPage';
import ChangePassword from './screens/ChangePassword';
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
          <Stack.Screen name="HomePage" component={NavBar} />
          <Stack.Screen name="Progress" component={Progress} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen
            name="ListOfTrainersPage"
            component={ListOfTrainersPage}
          />
          <Stack.Screen
            name="AddRestInformationPage"
            component={AddRestInformationPage}
          />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
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
