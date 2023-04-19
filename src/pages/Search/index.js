import React, {useState} from 'react';

import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SearchHeader} from '../../components';

const SearchPage = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState('');

  return (
    <View className="bg-white flex-1" style={styles.container(insets.top)}>
      <SearchHeader
        navigation={navigation}
        value={search}
        onChangeText={text => setSearch(text)}
      />
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: top => ({
    paddingTop: top,
  }),
});
