import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const HistoryItem = ({name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border-b border-gray-200 py-3">
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({});
