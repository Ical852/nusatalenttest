import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NextButton, PreviousButton} from '../../atoms';

const PaginateButton = ({data, onAction}) => {
  const {next, previous} = data;

  if (next === undefined && previous === undefined) {
    return <View />;
  }

  return (
    <View className="flex-row items-center">
      <PreviousButton
        disabled={previous === null}
        onPress={() => {
          onAction(previous);
        }}
      />
      <View className="mr-2" />
      <NextButton
        disabled={next === null}
        onPress={() => {
          onAction(next);
        }}
      />
    </View>
  );
};

export default PaginateButton;

const styles = StyleSheet.create({});
