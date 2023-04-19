import {StyleSheet, View} from 'react-native';
import React from 'react';
import {generateTypeColor} from '../../../utils';

const BarPercentage = ({percentage, type}) => {
  return (
    <View>
      <View
        style={styles.contColor(type)}
        className="w-full rounded-full opacity-30"
      />
      <View
        style={styles.contColor2(type, percentage)}
        className="rounded-full absolute"
      />
    </View>
  );
};

export default BarPercentage;

const styles = StyleSheet.create({
  contColor: type => ({
    backgroundColor: generateTypeColor(type),
    height: 4,
    marginBottom: 14.5,
  }),
  contColor2: (type, percent) => ({
    backgroundColor: generateTypeColor(type),
    height: 4,
    marginBottom: 14.5,
    width: `${percent}%`,
  }),
});
