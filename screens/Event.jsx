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
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Client from '../Api/Client';
import store from '../components/Store';
const { height, width } = Dimensions.get('window');
const Event = ({ navigation }) => {
  const [datauser, setdatauser] = store.useState('datauser');
  useEffect(() => {
    getEvents();
    getdata();
  }, []);
  const getdata = () => {
    try {
      AsyncStorage.getItem('DataUser').then(Value => {
        let data = JSON.parse(Value);
        datauser.email = data.email;
        datauser.fullname = data.fullname;
        datauser.role = data.role;
      });
    } catch (e) {
      console.log(e);
    }
  };
  const [EevntTree, setEevntTree] = useState([]);
  const getEvents = async () => {
    await Client.get('events/')
      .then(function (res) {
        setEevntTree(res.data);
      })
      .catch(function (e) {
        console.log('error from creat event', e);
      });
  };
  const [Task, setTask] = store.useState('Task');
  const handelshowstat = async eventId => {
    await Client.get(`tasks/${eventId}`)
      .then(function (res) {
        setTask(res.data);
      })
      .catch(function (e) {
        console.log('error from get task by id', e);
      });
    navigation.navigate('Progress');
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      getEvents();
    }, 700);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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
                {EevntTree?.map((event, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handelshowstat(event._id)}>
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
                          marginBottom: height * 0.01,
                        }}>
                        <View
                          style={{
                            flexDirection: 'row-reverse',
                            marginHorizontal: width * 0.05,
                          }}>
                          <FontAwesome5 name="tasks" size={30} />
                          <Text
                            style={{
                              marginHorizontal: width * 0.05,
                              fontWeight: '700',
                              fontSize: 17,
                              color: 'black',
                            }}>
                            {event?.title}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Event;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
