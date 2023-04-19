import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {customColors} from '../../../utils';

const GlobalLoading = () => {
  return (
    <View className="w-full h-full absolute justify-center items-center bg-black opacity-30">
      <ActivityIndicator size={'large'} color={customColors.pokePrimary} />
    </View>
  );
};

export default GlobalLoading;
