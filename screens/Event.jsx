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
import AntDesign from 'react-native-vector-icons/AntDesign';
const { height, width } = Dimensions.get('window');
const Event = ({ navigation }) => {
  const handelshowstat = () => {
    navigation.navigate('Progress');
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
        <ScrollView>
          <View style={{ alignSelf: 'center' }}>
            <TouchableOpacity onPress={handelshowstat}>
              <View
                style={{
                  width: width / 1.1,
                  backgroundColor: '#F1FAF6',
                  height: height / 8.5,
                  borderWidth: 1,
                  borderColor: '#dfe8e4',
                  borderRadius: width * 0.04,
                  shadowColor: 'black',
                  elevation: 5,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    marginHorizontal: width * 0.05,
                  }}>
                  <AntDesign name="piechart" size={30} />
                  <Text
                    style={{
                      marginHorizontal: width * 0.05,
                      fontWeight: '700',
                      fontSize: 17,
                      color: 'black',
                    }}>
                    معرض بنبلة للصناعات التقليدية
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Event;

const styles = StyleSheet.create({});
