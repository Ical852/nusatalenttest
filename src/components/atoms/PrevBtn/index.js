import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {customColors} from '../../../utils';
import {IcPrevious} from '../../../assets';

const PreviousButton = ({disabled, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.5}
      style={styles.container}
      className={`flex-row items-center py-1 px-2 rounded-md ${
        disabled ? 'opacity-30' : ''
      }`}>
      <IcPrevious />
      <Text className="text-white ml-1 text-base font-bold">Prevs</Text>
    </TouchableOpacity>
  );
};

export default PreviousButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: customColors.pokePrimary,
  },
});
