import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { height, width } = Dimensions.get('window');
const SettingPage = ({ navigation }) => {
  const AddInformation = () => {
    navigation.navigate('AddRestInformationPage');
  };
  const ChangePassword = () => {
    navigation.navigate('ChangePassword');
  };
  const LogOut = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace('LoginPage');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ImageBackground
      source={require('../assets/backgroundSecondPage.png')}
      resizeMode="cover"
      style={{ width: width, height: height }}>
      <Image
        style={{
          width: width * 0.4,
          height: height * 0.1,
          position: 'absolute',
          marginHorizontal: width * 0.06,
          marginVertical: height * 0.02,
        }}
        source={require('../assets/logo.png')}
      />
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <View
          style={{
            borderBottomColor: '#000000',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderWidth: 1,
            color: 'black',
            marginBottom: height * 0.03,
          }}
        />
        <TouchableOpacity onPress={AddInformation}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 700,
                color: 'black',
                marginBottom: height * 0.03,
              }}>
              إضافة معلومات ملفك الشخصي وتعديلها
            </Text>
            <AntDesign
              name="profile"
              color={'black'}
              size={26}
              style={{ marginHorizontal: width * 0.03 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: '#000000',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderWidth: 1,
            color: 'black',
            marginBottom: height * 0.03,
          }}
        />
        <TouchableOpacity onPress={ChangePassword}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 700,
                color: 'black',
                marginBottom: height * 0.03,
              }}>
              تغيير كلمة المرور
            </Text>
            <Octicons
              name="shield-lock"
              color={'black'}
              size={26}
              style={{ marginHorizontal: width * 0.03 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: '#000000',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderWidth: 1,
            color: 'black',
            marginBottom: height * 0.03,
          }}
        />
        <TouchableOpacity onPress={LogOut}>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: 700,
                color: 'black',
                marginBottom: height * 0.03,
              }}>
              تسجيل الخروج
            </Text>
            <AntDesign
              name="logout"
              color={'black'}
              size={25}
              style={{ marginHorizontal: width * 0.03 }}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: '#000000',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderWidth: 1,
            color: 'black',
            marginBottom: height * 0.03,
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default SettingPage;

const styles = StyleSheet.create({});
