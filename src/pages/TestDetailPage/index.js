import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

const TestDetailPage = ({navigation, route}) => {
  const testing = route.params.testing;
  const {id, image, name, job} = testing;
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1" style={styles.container(insets.top)}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Text className="text-black m-5 text-base font-medium">Back</Text>
      </TouchableOpacity>
      <View className="flex-1 w-full items-center">
        <SharedElement id={`item.${id}.photo`}>
          <Image source={{uri: image}} className="w-56 h-56 rounded-md" />
        </SharedElement>
        <Text className="text-black mt-3 text-xl font-bold">{name}</Text>
        <Text className="text-black text-base font-light">{job}</Text>
      </View>
    </View>
  );
};

export default TestDetailPage;

const styles = StyleSheet.create({
  container: top => ({
    paddingTop: top,
  }),
});
