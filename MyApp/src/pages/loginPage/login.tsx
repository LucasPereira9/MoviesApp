/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StatusBar, StyleSheet} from 'react-native';
import {Container} from './styles';

export default function App() {
  return (
    <Container>
      <StatusBar backgroundColor={'#245363'} />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.text}>M</Text>
        <Text style={styles.text}>OVIES</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={styles.text}>A</Text>
        <Text style={styles.text}>PP</Text>
      </View>
      <View
        style={{
          backgroundColor: '#000000b3',
          opacity: 0.1,
          width: 900,
          height: 730,
          borderBottomLeftRadius: 900,
          bottom: 220,
          left: 130,
          zIndex: -44,
        }}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#AFEFFB',
    top: 200,
    fontSize: 57,
    alignSelf: 'center',
    fontFamily: 'Roboto-BlackItalic',
    textAlign: 'center',
  },
});
