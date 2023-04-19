import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

const TestItem = ({ testing }) => {
  const navigation = useNavigation();
  const { id, image, name, job } = testing;

  return (
    <TouchableOpacity
      key={id}
      className='mb-3'
      onPress={() => {
        navigation.navigate('Detail', { testing })
      }}>
      <SharedElement id={id}>
        <Image
          source={{ uri: image }}
          className='w-44 h-44 rounded-md'
        />
      </SharedElement>
      <Text className='text-xl text-black font-bold mt-3'>{name}</Text>
      <Text className='text-base text-black font-light'>{job}</Text>
    </TouchableOpacity>
  );
};

export default TestItem;

const styles = StyleSheet.create({});