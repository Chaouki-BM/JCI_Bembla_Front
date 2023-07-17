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
import { ProgressView } from '@react-native-community/progress-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { height, width } = Dimensions.get('window');
const Progress = () => {
  const currentOS = Platform.OS;
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
      <View style={{ marginHorizontal: width * 0.05 }}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 18,
            color: 'white',
            textAlign: 'right',
            marginVertical: height / 20,
            textDecorationLine: 'underline',
          }}>
          11/03/2024
        </Text>
        <Text
          style={{
            alignSelf: 'flex-end',
            fontWeight: '900',
            fontSize: 18,
            color: 'black',
            marginVertical: height / 30,

            // position: 'absolute',
          }}>
          معرض بنبلة للصناعات التقليدية
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#F1FAF6',
          borderWidth: 1,
          borderColor: '#dfe8e4',
          borderRadius: 12,
          shadowColor: 'black',
          elevation: 5,
          width: width / 1.2,
          alignSelf: 'center',
          height: height / 8,
          marginBottom: height * 0.02,
        }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '600',
            marginHorizontal: width * 0.03,
            color: '#000000',
            marginBottom: height * 0.01,
          }}>
          التقدم
        </Text>
        <Text
          style={{
            color: '#000000',
            position: 'absolute',
            fontSize: 17,
            fontWeight: '500',
            marginHorizontal: width * 0.04,
          }}>
          35%
        </Text>
        <View
          style={{
            borderBottomColor: '#000000',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderWidth: 1,
            marginBottom: height * 0.03,
          }}
        />
        <View
          style={
            {
              //height: height / 16,
              //justifyContent: 'flex-end',
            }
          }>
          <ProgressView
            progressTintColor="#1596D0"
            trackTintColor="#0066FF"
            progress={35 * 0.01}
            style={{
              width: width / 1.5,
              alignSelf: 'center',
            }}
          />
        </View>
      </View>
      {/* -----------cometee------ */}
      <View style={{ backgroundColor: '#97D0EA', marginBottom: height * 0.02 }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 17,
            color: 'black',
            marginHorizontal: width * 0.05,
            marginTop: height * 0.01,
          }}>
          لجنة:
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: '#F1FAF6',
              borderWidth: 1,
              borderColor: '#dfe8e4',
              borderRadius: width * 0.02,
              shadowColor: 'black',
              elevation: 5,
              width: width / 2.8,
              // height: height / 8,
              marginBottom: height * 0.02,
              marginHorizontal: height * 0.01,
            }}>
            <Text
              style={{
                textAlign: 'center',
                marginBottom: height * 0.01,
                color: '#000000',
                fontSize: 14,
              }}>
              hamza ben aicha
            </Text>
            <View
              style={{
                borderBottomColor: '#000000',
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderWidth: 1,
                marginBottom: height * 0.01,
              }}
            />
            <Text
              style={{
                textAlign: 'center',
                marginBottom: height * 0.01,
                color: '#000000',
                fontSize: 14,
              }}>
              role
            </Text>
          </View>
        </ScrollView>
      </View>
      {/* ----------tasks-------------- */}
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#F1FAF6',
            borderWidth: 1,
            borderColor: '#dfe8e4',
            borderRadius: 10,
            shadowColor: 'black',
            elevation: 5,
            width: width / 1.1,
            alignSelf: 'center',
          }}>
          <View
            style={{
              marginHorizontal: width * 0.05,
              marginVertical: height * 0.01,
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  marginBottom: height * 0.02,
                  color: 'black',
                  fontWeight: '800',
                  fontSize: 15,
                }}>
                Task 1:
              </Text>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity>
                  {/* <AntDesign name="retweet" size={22} color={'#1596D0'} /> */}
                  <AntDesign name="check" size={22} color={'#1596D0'} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ color: 'black', fontWeight: '400' }}>
              text 1---------------------------
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Progress;

const styles = StyleSheet.create({});
