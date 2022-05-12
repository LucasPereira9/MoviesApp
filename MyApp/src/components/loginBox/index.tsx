/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {InputContainer, Footer} from './styles';
import {User, Lock} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

export default function LoginBox() {
  const [user, setUser] = useState('');
  const [color, setColor] = useState('#B2B5B4');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const setToastMessage = (msg: string) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  };

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

  function Logado() {
    if (user === '' && password === '') {
      navigation.navigate('Home');
      setUser('');
      setPassword('');
    } else {
      Alert.alert('usuario ou senha incorretos!');
      setColor('#ff0000');
    }
  }
  function NewPassword() {
    setToastMessage('Tente "123"');
  }
  function NewRegistrer() {
    setToastMessage('Novos registros indisponíveis');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={[styles.boxView, {opacity: fadeAnim}]}>
        <Text />
        <InputContainer style={{borderWidth: 2.2, borderColor: color}}>
          <View style={styles.IconView}>
            <User
              style={{alignSelf: 'center'}}
              width={32}
              height={30}
              color={color}
            />
          </View>

          <TextInput
            value={user}
            onChangeText={value => setUser(value)}
            style={styles.input}
            placeholder="Nome de Usuário"
          />
        </InputContainer>

        <InputContainer style={{borderWidth: 2.2, borderColor: color}}>
          <View style={styles.IconView}>
            <Lock
              style={{alignSelf: 'center'}}
              width={32}
              height={30}
              color={color}
            />
          </View>

          <TextInput
            value={password}
            onChangeText={value => setPassword(value)}
            style={styles.input}
            placeholder="Senha"
            keyboardType="numeric"
            secureTextEntry={true}
          />
        </InputContainer>

        <TouchableOpacity onPress={Logado} style={styles.loginButton}>
          <Text
            style={{
              alignSelf: 'center',
              fontFamily: 'Roboto-Bold',
              fontSize: 20,
            }}>
            LOGAR
          </Text>
        </TouchableOpacity>

        <Footer>
          <TouchableOpacity onPress={NewPassword} style={styles.FooterInput}>
            <Text style={styles.FooterText}>esqueci a senha</Text>
          </TouchableOpacity>
          <View
            style={{
              borderRightWidth: 0.3,
              borderColor: '#ffffff',
              height: '80%',
              marginTop: 10,
            }}
          />
          <TouchableOpacity onPress={NewRegistrer} style={styles.FooterInput}>
            <Text style={styles.FooterText}>registrar</Text>
          </TouchableOpacity>
        </Footer>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    borderRadius: 20,
    paddingLeft: 80,
    fontFamily: 'Roboto-Italic',
  },
  boxView: {
    backgroundColor: '#2453636',
    width: '80%',
    elevation: 120,
    shadowColor: '#000000',
    height: '44%',
    alignSelf: 'center',
    top: '28%',
    borderRadius: 6,
  },
  IconView: {
    width: 60,
    height: '80%',
    top: '10%',
    borderRightWidth: 0.2,
    borderColor: '#000000',
    position: 'absolute',
    zIndex: 10,
    justifyContent: 'center',
  },
  loginButton: {
    borderRadius: 10,
    backgroundColor: '#FC715A',
    marginTop: 30,
    height: 60,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  FooterInput: {
    margin: 20,
  },
  FooterText: {
    color: '#fff',
    fontSize: 15,
  },
});
