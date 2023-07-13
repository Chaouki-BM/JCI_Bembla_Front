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
import React, { useEffect, useState } from 'react';
const { height, width } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginPage = ({ navigation }) => {
  // useEffect(() => {
  //   getData();
  // }, []);
  // const getData = () => {
  //   try {
  //     AsyncStorage.getItem('DataUser').then(Value => {
  //       console.log('val', Value);
  //       if (Value != null) {
  //         navigation.replace('AddRestInformationPage');
  //       }
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const removeData = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //     navigation.replace('LoginPage');
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const forgetPassword = () => {};
  const [DataUser, setDataUser] = useState({ email: '', password: '' });
  const handelLogin = async () => {
    try {
      await AsyncStorage.mergeItem('DataUser', JSON.stringify(DataUser));
      navigation.replace('AddRestInformationPage');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <ImageBackground
      source={require('../assets/backgroundFirstPage.png')}
      resizeMode="cover"
      style={{ width: width, height: height }}>
      <Image
        style={{
          width: width * 0.4,
          height: height * 0.1,
          position: 'absolute',
          marginHorizontal: width * 0.06,
          marginVertical: height * 0.1,
        }}
        source={require('../assets/logo.png')}
      />
      <View style={{ marginEnd: width * 0.01 }}>
        <TouchableOpacity
          onPress={handelLogin}
          style={{
            position: 'absolute',
            top: height / 1.15,
            alignSelf: 'flex-end',
            borderRadius: 10,
            borderWidth: width * 0.003,
            borderColor: '#FFFFFF',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              fontSize: width * 0.05,
              fontWeight: 'bold',
              marginStart: width * 0.06,
              marginEnd: width * 0.03,
              marginTop: height * 0.015,
              marginBottom: height * 0.015,
            }}>
            تسجيل
          </Text>
          <AntDesign
            name="login"
            color="#FFFFFF"
            size={height * 0.034}
            style={{ alignSelf: 'center', marginEnd: width * 0.03 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          width: width * 0.9,
          height: height * 0.5,
          marginHorizontal: width * 0.05,
          top: height / 3,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: '#1596D0',
            marginBottom: height * 0.03,
          }}>
          تسجيل الدخول
        </Text>
        <View style={{ alignSelf: 'flex-end' }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#1596D0',
              marginBottom: height * 0.01,
            }}>
            البريد الالكتروني
          </Text>
          <TextInput
            style={{
              width: width / 1.2,
              borderColor: '#1596D0',
              borderRadius: 10,
              borderWidth: width * 0.004,
              height: height / 17,
              marginBottom: height * 0.03,
            }}
            placeholder="البريد الالكتروني"
            placeholderTextColor={'#D3D3D3'}
            //#C0C0C0
            value={DataUser.email}
            onChangeText={val => setDataUser({ ...DataUser, email: val })}
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginBottom: height * 0.01,
              color: '#1596D0',
            }}>
            كلمة السر
          </Text>
          <TextInput
            style={{
              width: width / 1.2,
              borderColor: '#1596D0',
              borderRadius: 10,
              borderWidth: width * 0.004,
              height: height / 17,
              marginBottom: height * 0.01,
            }}
            placeholder="كلمة السر"
            placeholderTextColor={'#D3D3D3'}
            value={DataUser.password}
            onChangeText={val => setDataUser({ ...DataUser, password: val })}
          />
          <TouchableOpacity onPress={forgetPassword}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '800',
                marginBottom: height * 0.01,
                color: '#1596D0',
              }}>
              نسيت كلمة السر ؟
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginEnd: width * 0.01 }}></View>
    </ImageBackground>
  );
};

export default LoginPage;

const styles = StyleSheet.create({});
