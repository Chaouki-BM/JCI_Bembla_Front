import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
const { height, width } = Dimensions.get('window');
const PresencePage = () => {
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

      <View style={{ marginVertical: height / 6 }}>
        <TextInput
          placeholder="بحث"
          style={{
            backgroundColor: '#E8E8E8',
            width: width / 1.2,
            height: height / 16,
            borderRadius: width * 0.06,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: '#bdbdbd',
            marginBottom: height * 0.03,
          }}
        />
        {/* ----------------------histori presense------------------- */}
        <ScrollView>
          <TouchableOpacity>
            <View
              style={{
                marginHorizontal: width * 0.1,
                marginBottom: height * 0.01,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}>
                meet number 1
              </Text>
              <Text style={{ color: '#347C84' }}>11/03/2023</Text>
              <Text style={{ color: '#959595', fontSize: 12 }}>
                Click here to see more details about the meet
              </Text>
              <View
                style={{
                  borderBottomColor: '#000000',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  borderWidth: 0.1,
                  marginBottom: height * 0.03,
                }}
              />
            </View>
          </TouchableOpacity>
          {/* ---------------2---------------------- */}
          <View
            style={{
              marginHorizontal: width * 0.1,
              marginBottom: height * 0.05,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}>
              meet number 2
            </Text>
            <Text style={{ color: '#347C84' }}>11/03/2023</Text>
            <Text style={{ color: '#959595', fontSize: 12 }}>
              Click here to see more details about the meet
            </Text>
            <View
              style={{
                borderBottomColor: '#000000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 0.1,
                marginBottom: height * 0.03,
              }}
            />
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          alignSelf: 'flex-end',
          marginVertical: height / 1.25,
        }}>
        <Entypo
          name="add-to-list"
          size={26}
          style={{ padding: width * 0.05 }}
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default PresencePage;

const styles = StyleSheet.create({});
