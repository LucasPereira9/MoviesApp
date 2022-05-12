/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Container} from './styles';
import LoginBox from '../../components/loginBox';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor={'#1e4d5cf6'} />
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.text}>M</Text>
          <Text style={styles.text}>OVIES</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.text}>A</Text>
          <Text style={styles.text}>PP</Text>
        </View>
        <LoginBox />
        <View
          style={{
            backgroundColor: '#ffffff',
            opacity: 0.1,
            width: 900,
            height: 750,
            borderBottomLeftRadius: 900,
            bottom: '70%',
            left: 130,
            zIndex: -44,
          }}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#AFEFFB',
    top: '48%',
    fontSize: 47,
    alignSelf: 'center',
    fontFamily: 'Roboto-BlackItalic',
    textAlign: 'center',
  },
});
