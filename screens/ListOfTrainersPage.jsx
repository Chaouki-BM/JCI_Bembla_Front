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
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');
import { Table, Row, Rows } from 'react-native-table-component';
const ListOfTrainersPage = () => {
  const [f, setf] = useState({
    ff: ['head1', 'head2'],
    rf: [
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body1', 'body2'],
      ['body15', 'body2'],
      ['body1', 'body2'],
      ['body15', 'body2'],
      ['body122', 'body2'],
    ],
  });
  const [count, setCount] = useState(0);
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
      {/* ------------tab----------------- */}
      <View style={{ marginVertical: height / 7 }}>
        <Table borderStyle={{ borderWidth: 3, borderColor: '#badcf3' }}>
          <Row
            data={f.ff}
            style={{
              height: height / 15,
            }}
            textStyle={{
              // marginHorizontal: width * 0.05,
              textAlign: 'center',
              fontWeight: '800',
              fontSize: 17,
            }}
          />
        </Table>

        <ScrollView style={{ marginTop: -1 }}>
          <Table borderStyle={{ borderWidth: 1.5, borderColor: '#badcf3' }}>
            <Rows
              data={f.rf}
              textStyle={{
                textAlign: 'center',
              }}
              style={{ height: height / 20 }}
            />
          </Table>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ListOfTrainersPage;

const styles = StyleSheet.create({});
