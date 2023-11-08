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
  RefreshControl,
  SafeAreaView,
  Modal,
  Pressable,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProgressView } from '@react-native-community/progress-view';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Client from '../Api/Client';
import store from '../components/Store';
import Feather from 'react-native-vector-icons/Feather';
const { height, width } = Dimensions.get('window');
const Progress = () => {
  const currentOS = Platform.OS;
  const [Task, setTask] = store.useState('Task');
  const [datauser, setdatauser] = store.useState('datauser');
  useEffect(() => {
    //dataTask();
    Purcent();
  }, []);
  const [eventId, seteventId] = store.useState('eventId');
  const dataTask = async () => {
    await Client.get(`tasks/${eventId}`)
      .then(function (res) {
        setTask(res.data);
      })
      .catch(function (e) {
        console.log('error from get task by id', e);
      });
  };
  const [P, setP] = useState(0);
  let k = 0;
  const Purcent = () => {
    setP(0);
    Task.map((task, index) => {
      if (task.Done === true) {
        k = k + 100 / Task?.length;
        // P = P + 100 / Task?.length;
      }
      setP(k);
    });
  };
  const PlusProgress = async id => {
    setP(P + 100 / Task?.length);
    // P = P + 100 / Task?.length;
    await Client.put(`tasks/tasks/${id}`)
      .then(function (res) {
        dataTask();
      })
      .catch(function (e) {
        console.log('error from plus progress', e);
      });
  };
  const [modalVisible, setModalVisible] = useState(false);
  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   setTimeout(() => {
  //     setRefreshing(false);
  //     dataTask();
  //   }, 700);
  // }, []);
  const [DataTask, setDataTask] = useState({
    TaskTitle: '',
    TaskDescription: '',
    EventId: '',
  });
  const HandelSaveTask = () => {
    setModalVisible(!modalVisible);
  };
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView
    //     contentContainerStyle={styles.scrollView}
    //     refreshControl={
    //       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     }>  </ScrollView>
    //     </SafeAreaView>
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
        {datauser?.role === 'vppre' ? (
          <>
            <TouchableOpacity
              style={{ alignSelf: 'flex-end' }}
              onPress={() => setModalVisible(true)}>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: height / 30,
                  borderWidth: 1,
                  padding: width * 0.02,
                  borderRadius: width * 0.04,
                  borderColor: 'white',
                }}>
                <Feather name="edit-3" color="#FFFFFF" size={height * 0.034} />
                <Text
                  style={{
                    fontWeight: '900',
                    fontSize: 20,
                    color: 'white',
                    // textAlign: 'right',
                    textDecorationLine: 'underline',
                  }}>
                  تعديل
                </Text>
              </View>
            </TouchableOpacity>
          </>
        ) : (
          <View style={{ alignSelf: 'flex-end' }}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: height / 30,
              }}>
              <Text
                style={{
                  // fontWeight: '900',
                  fontSize: 20,

                  // textAlign: 'right',
                }}></Text>
            </View>
          </View>
        )}
        <Text
          style={{
            alignSelf: 'center',
            fontWeight: '900',
            fontSize: 18,
            color: 'black',
            marginVertical: height / 30,

            // position: 'absolute',
          }}>
          {Task[0]?.EventId.title}
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
            //marginBottom: height * 0.01,
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
          {P.toFixed(0)}%
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
            progress={P * 0.01}
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
      {/* ---------------modal--------------- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{
                color: 'black',
                fontSize: width * 0.06,
                marginBottom: height * 0.02,
              }}>
              "Task"اضف مهمة
            </Text>
            <TextInput
              style={{
                width: width / 1.3,
                borderColor: '#1596D0',
                borderRadius: 10,
                borderWidth: width * 0.004,
                height: height / 17,
                marginBottom: height * 0.01,
              }}
              placeholder="العنوان"
              placeholderTextColor={'#D3D3D3'}
              value={DataTask.TaskTitle}
              onChangeText={val => setDataTask({ ...DataTask, TaskTitle: val })}
            />

            <TextInput
              editable
              multiline
              numberOfLines={5}
              maxLength={195}
              style={{
                width: width / 1.3,
                borderColor: '#1596D0',
                borderRadius: 10,
                borderWidth: width * 0.004,
                height: height / 8,
                marginBottom: height * 0.03,
              }}
              placeholder="الوصف"
              placeholderTextColor={'#D3D3D3'}
              value={DataTask.TaskDescription}
              onChangeText={val =>
                setDataTask({ ...DataTask, TaskDescription: val })
              }
            />
            {/* <Pressable
              style={{}}
              onPress={() => setModalVisible(!modalVisible)}> */}

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ margin: width * 0.05 }}
                onPress={HandelSaveTask}>
                <View
                  style={{
                    padding: width * 0.03,
                    borderColor: '#00D100',
                    borderWidth: 1,
                    borderRadius: width * 0.04,
                  }}>
                  <Text
                    style={{
                      marginHorizontal: width * 0.03,
                      color: 'black',
                      fontSize: width * 0.05,
                      fontWeight: '600',
                    }}>
                    تم
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ margin: width * 0.05 }}
                onPress={() => setModalVisible(!modalVisible)}>
                <View
                  style={{
                    padding: width * 0.03,
                    borderColor: '#FF8A8A',
                    borderWidth: 1,
                    borderRadius: width * 0.04,
                  }}>
                  <Text
                    style={{
                      marginHorizontal: width * 0.02,
                      color: 'black',
                      fontSize: width * 0.05,
                      fontWeight: '600',
                    }}>
                    إلغاء
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* ----------tasks-------------- */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: height * 0.03 }}>
        {Task?.map((task, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor: '#F1FAF6',
                borderWidth: 1,
                borderColor: '#dfe8e4',
                borderRadius: 10,
                shadowColor: 'black',
                elevation: 5,
                width: width / 1.1,
                alignSelf: 'center',
                marginBottom: height * 0.02,
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
                    Task {index + 1}: {task.TaskTitle}
                  </Text>
                  <View style={{ flex: 1, alignItems: 'flex-end' }}>
                    {datauser?.role === 'vppre' ? (
                      <>
                        {task.Done == false ? (
                          <TouchableOpacity
                            onPress={() => PlusProgress(task._id)}>
                            <AntDesign
                              name="retweet"
                              size={22}
                              color={'#1596D0'}
                            />
                          </TouchableOpacity>
                        ) : (
                          <AntDesign name="check" size={22} color={'#1596D0'} />
                        )}
                      </>
                    ) : (
                      <>
                        {task.Done === false ? (
                          <AntDesign
                            name="retweet"
                            size={22}
                            color={'#1596D0'}
                          />
                        ) : (
                          <AntDesign name="check" size={22} color={'#1596D0'} />
                        )}
                      </>
                    )}
                    {/* <AntDesign name="check" size={22} color={'#1596D0'} /> */}
                  </View>
                </View>
                <Text style={{ color: 'black', fontWeight: '400' }}>
                  {task.TaskDescription}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};
export default Progress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
