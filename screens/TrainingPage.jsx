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
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Client from '../Api/Client';
const { height, width } = Dimensions.get('window');
import store from '../components/Store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const TrainingPage = () => {
  useEffect(() => {
    trainings();
  }, []);
  const [datauser, setdatauser] = store.useState('datauser');
  const [Training, setTraining] = useState([]);
  const trainings = async () => {
    await Client.get('trainings/')
      .then(function (res) {
        console.log('res', res.data);
        setTraining(res.data);
      })
      .catch(function (e) {
        console.log('error from get trainings', e);
      });
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      trainings();
    }, 700);
  }, []);
  const createTwoButtonAlert = id => {
    Alert.alert('تنبيه', 'هل أنت متأكد من أنك تريد حذف', [
      {
        text: 'لا',

        style: 'cancel',
      },
      { text: 'متأكد', onPress: () => HandelDeleteTraining(id) },
    ]);
  };
  const HandelDeleteTraining = async id => {
    await Client.delete(`trainings/${id}`)
      .then(function (res) {
        trainings();
      })
      .catch(function (e) {
        console.log('error from Handel delete Trainig', e);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
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
            <ScrollView
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}>
              {Training?.slice(0)
                .reverse()
                .map((Train, index) => {
                  return (
                    <TouchableOpacity key={index}>
                      <View
                        style={{
                          marginHorizontal: width * 0.1,
                          marginBottom: height * 0.01,
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                          {datauser?.role === 'vpfd' ? (
                            <TouchableOpacity
                              onPress={() => createTwoButtonAlert(Train._id)}>
                              <MaterialIcons
                                name="cancel"
                                size={22}
                                color={'#1596D0'}
                              />
                            </TouchableOpacity>
                          ) : null}
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 15,
                              fontWeight: 'bold',
                              textTransform: 'uppercase',
                            }}>
                            {Train.Description} 1
                          </Text>
                        </View>
                        <Text style={{ color: '#347C84' }}>{Train.DateT}</Text>
                        <Text style={{ color: '#959595', fontSize: 12 }}>
                          {Train.NameFormer}
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
                  );
                })}
            </ScrollView>
            {/* ---------------2---------------------- */}
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};
export default TrainingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // alignItems: 'center',
    //justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
