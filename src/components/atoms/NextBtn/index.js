import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {customColors} from '../../../utils';
import {IcNext} from '../../../assets';

const NextButton = ({disabled, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.5}
      style={styles.container}
      className={`flex-row items-center py-1 px-2 rounded-md ${
        disabled ? 'opacity-30' : ''
      }`}>
      <Text className="text-white mr-1">Next</Text>
      <IcNext />
    </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: customColors.pokePrimary,
  },
});
