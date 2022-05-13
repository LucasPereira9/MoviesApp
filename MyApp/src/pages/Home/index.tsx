/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Container} from './styles';
import {StatusBar, Text} from 'react-native';
import Genders from '../../components/genderContainer/index';
import Top from '../../components/topContainer/index';

export default function Home() {
  return (
    <Container>
      <StatusBar backgroundColor={'#212334'} />
      <Top />
      <Genders />
      <Text
        style={{
          margin: 12,
          color: '#fff',
          fontSize: 17,
          fontFamily: 'Roboto-Italic',
        }}>
        Destaques
      </Text>
    </Container>
  );
}
