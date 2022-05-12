/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-svg';

export default function Home({navigation}: any) {
  function teste() {
    navigation.navigate('Login');
  }
  return (
    <View style={{flex: 1, backgroundColor: '#00fff2'}}>
      <TouchableOpacity
        style={{width: 100, height: 100, backgroundColor: '#fff'}}
        onPress={teste}>
        <Text>TESTE</Text>
      </TouchableOpacity>
    </View>
  );
}
