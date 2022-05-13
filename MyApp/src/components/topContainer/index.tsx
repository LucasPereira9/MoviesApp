/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Search, User} from 'react-native-feather';
import {Container} from './styles';

export default function TopContainer() {
  return (
    <Container>
      <User style={{margin: 22}} width={26} height={32} color={'#fff'} />
      <TouchableOpacity>
        <Search style={{margin: 22}} width={32} height={32} color={'#fff'} />
      </TouchableOpacity>
    </Container>
  );
}
