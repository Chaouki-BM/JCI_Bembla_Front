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
import { useState } from 'state-pool';
import store from '../components/Store';
import Client from '../Api/Client';
const { height, width } = Dimensions.get('window');

const AddRestInformationPage = ({ navigation }) => {
  const [datauser, setdatauser] = store.useState('datauser');
  const [Event, setEvent] = useState({
    Responsible: '',
    title: '',
    Description: '',
  });

  let clear = {};
  const HandelCreateEvent = async () => {
    if (Event.Description != '' && Event.title != '' && Event.title != '') {
      await Client.post('events/', Event)
        .then(function (res) {
          console.log(res.data);
          setEvent(clear);
          navigation.navigate('Commite');
        })
        .catch(function (e) {
          console.log('error from creat event', e);
        });
    }
  };
  const [Formation, setFormation] = useState({
    NameFormer: '',
    DateT: '',
    Description: '',
  });
  const HandelCreateTraining = async () => {
    await Client.post('trainings/', Formation)
      .then(function (res) {
        setFormation(clear);
      })
      .catch(function (e) {
        console.log('error from handel create training');
      });
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
      {datauser?.role === 'vppre' ? (
        <View
          style={{
            alignItems: 'center',
            marginVertical: height * 0.2,
          }}>
          <TextInput
            style={{
              width: width / 1.2,
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: width * 0.004,
              height: height / 17,
              marginBottom: height * 0.03,
            }}
            placeholder="المسؤول عن الحدث"
            placeholderTextColor={'black'}
            //#C0C0C0
            value={Event.Responsible}
            onChangeText={val => setEvent({ ...Event, Responsible: val })}
          />
          <TextInput
            style={{
              width: width / 1.2,
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: width * 0.004,
              height: height / 17,
              marginBottom: height * 0.03,
            }}
            placeholder=" العنوان "
            placeholderTextColor={'black'}
            //#C0C0C0
            value={Event.title}
            onChangeText={val => setEvent({ ...Event, title: val })}
          />
          <TextInput
            editable
            multiline
            numberOfLines={5}
            maxLength={195}
            style={{
              width: width / 1.2,
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: width * 0.004,
              height: height / 8,
              marginBottom: height * 0.03,
            }}
            placeholder="الوصف "
            placeholderTextColor={'black'}
            //#C0C0C0
            value={Event.Description}
            onChangeText={val => setEvent({ ...Event, Description: val })}
          />
          <TouchableOpacity onPress={HandelCreateEvent}>
            <View style={{ marginVertical: height * 0.05 }}>
              <View
                style={{
                  borderBlockColor: '#1596D0',
                  // borderWidth: width * 0.002,
                  backgroundColor: '#1596D0',
                  borderRadius: width * 0.03,
                  // width: width * 0.3,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: width * 0.06,
                    fontWeight: '400',
                    marginHorizontal: width * 0.19,
                    marginVertical: height * 0.007,
                  }}>
                  تم
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
      {/* ---------------VPFD---------------- */}
      {datauser?.role === 'vpfd' ? (
        <View
          style={{
            alignItems: 'center',
            marginVertical: height * 0.2,
          }}>
          <TextInput
            style={{
              width: width / 1.2,
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: width * 0.004,
              height: height / 17,
              marginBottom: height * 0.03,
            }}
            placeholder="اسم المدرب"
            placeholderTextColor={'black'}
            //#C0C0C0
            value={Formation.NameFormer}
            onChangeText={val =>
              setFormation({ ...Formation, NameFormer: val })
            }
          />
          <TextInput
            style={{
              width: width / 1.2,
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: width * 0.004,
              height: height / 17,
              marginBottom: height * 0.03,
            }}
            placeholder="موعد التدريب"
            placeholderTextColor={'black'}
            //#C0C0C0
            value={Formation.DateT}
            onChangeText={val => setFormation({ ...Formation, DateT: val })}
          />
          <TextInput
            editable
            multiline
            numberOfLines={5}
            maxLength={195}
            style={{
              width: width / 1.2,
              borderColor: 'black',
              borderRadius: 10,
              borderWidth: width * 0.004,
              height: height / 8,
              marginBottom: height * 0.03,
            }}
            placeholder="وصف التدريب"
            placeholderTextColor={'black'}
            //#C0C0C0
            value={Formation.Description}
            onChangeText={val =>
              setFormation({ ...Formation, Description: val })
            }
          />
          <TouchableOpacity onPress={HandelCreateTraining}>
            <View style={{ marginVertical: height * 0.05 }}>
              <View
                style={{
                  borderBlockColor: '#1596D0',
                  // borderWidth: width * 0.002,
                  backgroundColor: '#1596D0',
                  borderRadius: width * 0.03,
                  // width: width * 0.3,
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: width * 0.06,
                    fontWeight: '400',
                    marginHorizontal: width * 0.19,
                    marginVertical: height * 0.007,
                  }}>
                  تم
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </ImageBackground>
  );
};

export default AddRestInformationPage;

const styles = StyleSheet.create({});
