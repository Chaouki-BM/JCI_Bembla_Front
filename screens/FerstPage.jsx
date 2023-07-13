import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect } from 'react';
import IcSimpleLineIconson from 'react-native-vector-icons/SimpleLineIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { height, width } = Dimensions.get('window');

const FerstPage = ({ navigation }) => {
  const nextscreen = async () => {
    try {
      AsyncStorage.getItem('DataUser').then(Value => {
        let user = JSON.parse(Value);
        console.log('valuser', user);
        if (user.email === '' || user.password === '') {
          navigation.navigate('LoginPage');
        } else {
          navigation.navigate('AddRestInformationPage');
        }
      });
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
          onPress={nextscreen}
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
            التالي
          </Text>
          <IcSimpleLineIconson
            name="arrow-right-circle"
            color="#FFFFFF"
            size={height * 0.034}
            style={{ alignSelf: 'center', marginEnd: width * 0.03 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginHorizontal: width * 0.05,
          marginVertical: height * 0.42,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: width * 0.05,
            color: '#1596D0',
          }}>
          ميثــاق الغرفــة الفتيــة
        </Text>
        <Text
          style={{
            fontWeight: '200',
            fontSize: width * 0.05,
            color: '#1596D0',
          }}>
          نحــن نعتقــد :
        </Text>
        <Text
          style={{
            fontWeight: '200',
            fontSize: width * 0.05,
            color: '#1596D0',
          }}>
          • أن الإيمان بالله يعطي للحياة معناها الحقيقي.
        </Text>
        <Text
          style={{
            fontWeight: '200',
            fontSize: width * 0.05,
            color: '#1596D0',
          }}>
          • أن التآخي البشري يفوق سيادة الدول.
        </Text>
        <Text
          style={{
            fontWeight: '200',
            fontSize: width * 0.05,
            color: '#1596D0',
          }}>
          • أن الاجتهاد وحرية الأفراد يضمنان العدالة الاجتماعية والاقتصادية.
        </Text>
        <Text
          style={{
            fontWeight: '200',
            fontSize: width * 0.05,
            color: '#1596D0',
          }}>
          • أن قيادة الشعوب تعتمد القانون وترفض التعسف والحيف.
        </Text>
        <Text
          style={{
            fontWeight: '200',
            fontSize: width * 0.05,
            color: '#1596D0',
          }}>
          • أن الذات البشرية هي أهم المكاسب وأغناها،
        </Text>
        <Text
          style={{
            fontWeight: '200',
            fontSize: width * 0.05,
            color: '#1596D0',
          }}>
          • أن خدمة الإنسان هي أنبل عمل في الحياة
        </Text>
      </View>
    </ImageBackground>
  );
};

export default FerstPage;

const styles = StyleSheet.create({});
