/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Dimensions,
} from 'react-native';
import {Container} from './styles';
import LoginBox from '../../components/loginBox';

export default function App() {
  const moveAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: Dimensions.get('window').width / 1.8,
        delay: 0,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        duration: 2000,
        toValue: 0,
        delay: 0,
        useNativeDriver: false,
      }),
    ]).start();
    Animated.timing(fadeAnim, {
      duration: 2000,
      toValue: 1,
      delay: 2400,
      useNativeDriver: false,
    }).start();
  }, [moveAnim, fadeAnim]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor={'#1e4d5cf6'} />
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: moveAnim,
          }}>
          <Text style={styles.text}>M</Text>
          <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>
            OVIES
          </Animated.Text>
        </Animated.View>
        <Animated.View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginLeft: moveAnim,
          }}>
          <Text style={styles.text}>A</Text>
          <Animated.Text style={[styles.text, {opacity: fadeAnim}]}>
            PP
          </Animated.Text>
        </Animated.View>
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
