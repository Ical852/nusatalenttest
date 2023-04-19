import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NextButton, PreviousButton} from '../../atoms';

const PaginateButton = () => {
  return (
    <View className="flex-row items-center">
      <PreviousButton />
      <View className="mr-2" />
      <NextButton />
    </View>
  );
};

export default PaginateButton;

const styles = StyleSheet.create({});
