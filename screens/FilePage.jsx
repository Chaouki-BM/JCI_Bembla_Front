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
import store from '../components/Store';

const { height, width } = Dimensions.get('window');
//console.log('file', datauser);
const FilePage = ({ navigation }) => {
  const [datauser, setdatauser] = store.useState('datauser');
  const HandelNavToListOfTrainers = () => {
    navigation.navigate('ListOfTrainersPage');
  };
  const HandelNavToListOfSponsors = () => {};
  const HandelNavToListOfMembers = () => {};
  const HandelNavToBudget = () => {};
  const HandelNavToAddMembers = () => {
    navigation.navigate('AddMembre');
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
      <View
        style={{
          alignItems: 'center',
          // backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{ flexDirection: 'row', marginBottom: height * 0.06 }}>
          <TouchableOpacity onPress={HandelNavToListOfTrainers}>
            <View
              style={{
                backgroundColor: '#F1FAF6',
                borderWidth: 1,
                borderColor: '#dfe8e4',
                borderRadius: 3,
                shadowColor: 'black',
                elevation: 5,
                width: width / 3,
                height: height / 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                قائمة المدربين
              </Text>
              <Text style={{ color: 'black', fontSize: 13, fontWeight: '300' }}>
                number
              </Text>
            </View>
          </TouchableOpacity>
          {/* ------------------- */}
          <TouchableOpacity onPress={HandelNavToListOfSponsors}>
            <View
              style={{
                backgroundColor: '#F1FAF6',
                borderWidth: 1,
                borderColor: '#dfe8e4',
                borderRadius: 3,
                shadowColor: 'black',
                elevation: 5,
                width: width / 3,
                height: height / 6,
                alignItems: 'center',
                justifyContent: 'center',
                marginStart: width * 0.1,
              }}>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                قائمة الرعاة
              </Text>
              <Text style={{ color: 'black', fontSize: 13, fontWeight: '300' }}>
                number
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* ---------------------- */}
        <View style={{ flexDirection: 'row', marginBottom: height * 0.04 }}>
          <TouchableOpacity onPress={HandelNavToListOfMembers}>
            <View
              style={{
                backgroundColor: '#F1FAF6',
                borderWidth: 1,
                borderColor: '#dfe8e4',
                borderRadius: 3,
                shadowColor: 'black',
                elevation: 5,
                width: width / 3,
                height: height / 6,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                قائمة الأعضاء
              </Text>
              <Text style={{ color: 'black', fontSize: 13, fontWeight: '300' }}>
                number
              </Text>
            </View>
          </TouchableOpacity>
          {/* ------------------- */}
          <TouchableOpacity onPress={HandelNavToBudget}>
            <View
              style={{
                backgroundColor: '#F1FAF6',
                borderWidth: 1,
                borderColor: '#dfe8e4',
                borderRadius: 3,
                shadowColor: 'black',
                elevation: 5,
                width: width / 3,
                height: height / 6,
                alignItems: 'center',
                justifyContent: 'center',
                marginStart: width * 0.1,
              }}>
              <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                الميزانية
              </Text>
              <Text style={{ color: 'black', fontSize: 13, fontWeight: '300' }}>
                number
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={HandelNavToAddMembers}>
          <View
            style={{
              backgroundColor: '#F1FAF6',
              borderWidth: 1,
              borderColor: '#dfe8e4',
              borderRadius: 3,
              shadowColor: 'black',
              elevation: 5,
              width: width / 1.3,
              height: height / 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {datauser?.role == 'vpfd' ? (
              <>
                <Text
                  style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                  إضافة تدريب
                </Text>
                <Text
                  style={{ color: 'black', fontSize: 13, fontWeight: '300' }}>
                  number
                </Text>
              </>
            ) : (
              <></>
            )}
            {datauser?.role == 'vppre' ? (
              <>
                <Text
                  style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                  إضافة حدث
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    fontWeight: '300',
                  }}>
                  number
                </Text>
              </>
            ) : (
              <></>
            )}
            {datauser?.role == 'president' ? (
              <>
                <Text
                  style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
                  إضافة أعضاء
                </Text>
                <Text
                  style={{ color: 'black', fontSize: 13, fontWeight: '300' }}>
                  number
                </Text>
              </>
            ) : (
              <></>
            )}
            {/* <Text style={{ color: 'black', fontSize: 16, fontWeight: '700' }}>
              إضافة أعضاء
            </Text>
            <Text style={{ color: 'black', fontSize: 13, fontWeight: '300' }}>
              number
            </Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default FilePage;

const styles = StyleSheet.create({});
