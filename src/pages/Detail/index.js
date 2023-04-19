import React from 'react';

import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const DetailPage = ({ navigation, route }) => {
  const testing = route.params.testing;
  const { id, image, name, job } = testing;

  return (
    <View className='flex-1'>
      <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
        <Text className='text-black m-5 text-base font-medium'>Back</Text>
      </TouchableOpacity>
      <View className='flex-1 w-full items-center'>
        <SharedElement id={id}>
          <Image
            source={{ uri: image }}
            className='w-44 h-44 rounded-md'
          />
        </SharedElement>
        <Text className='text-black mt-3 text-xl font-bold'>{name}</Text>
        <Text className='text-black text-base font-light'>{job}</Text>
      </View>
    </View>
  );
};

DetailPage.sharedElements = (route) => {
  const testing = navigation.getParam('testing');
  return [{
    id: testing.id,
    animation: 'fade'
  }];
}

export default DetailPage;

const styles = StyleSheet.create({});