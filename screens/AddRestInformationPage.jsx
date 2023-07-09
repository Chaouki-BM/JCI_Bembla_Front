import { StyleSheet, Text, View , Dimensions,ImageBackground,Image,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
const {height,width} =Dimensions.get('window')

const AddRestInformationPage = () => {
  return (
    <ImageBackground source={require("../assets/backgroundSecondPage.png")} resizeMode='cover'
    style={{ width:width,height:height,}} >
      <Image
       style={{width:width*0.4,height:height*0.1,position:"absolute",marginHorizontal:width*0.06,marginVertical:height*0.02}}
        source={require('../assets/logo.png')}
      />
       </ImageBackground> 
  )
}

export default AddRestInformationPage

const styles = StyleSheet.create({})