/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Container} from './styles';

export default function Genders() {
  return (
    <Container>
      <Text
        style={{
          position: 'absolute',
          margin: 12,
          color: '#fff',
          fontSize: 17,
          fontFamily: 'Roboto-Italic',
        }}>
        Gêneros
      </Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.text}>AÇÃO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.input}>
          <Text style={styles.text}>COMÉDIA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.input}>
          <Text style={styles.text}>AVENTURA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.input}>
          <Text style={styles.text}>DRAMA</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#9897B5',
    top: '6%',
    width: 130,
    height: 100,
    backgroundColor: '#525579',
    borderRadius: 24,
    margin: 10,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    fontSize: 19,
    fontFamily: 'Roboto-BlackItalic',
  },
});
