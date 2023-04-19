import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {generateTypeColor} from '../../../utils';

const TypeTags = ({types}) => {
  return (
    <View
      className="py-1 px-2.5 rounded-full mx-1"
      style={styles.container(types.type.name)}>
      <Text className="text-white font-bold capitalize">{types.type.name}</Text>
    </View>
  );
};

export default TypeTags;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor: generateTypeColor(type),
  }),
});
