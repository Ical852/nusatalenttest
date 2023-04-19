import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {HistoryItem, SearchHeader} from '../../components';
import {deleteAll, getData, storeData} from '../../utils';
import {getPokemonsByName} from '../../redux/actTypes';

const SearchPage = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [histories, setHistories] = useState([]);

  useState(() => {
    getData('histories').then(res => {
      if (res !== null) {
        setHistories(res);
      }
    });
  }, []);

  const addHistory = async () => {
    if (search !== '') {
      const newData = [...histories];
      newData.push(search);
      if (newData.filter(data => data === search).length <= 1) {
        storeData('histories', newData);
      }
      await searchName(search.toLowerCase());
    }

    navigation.goBack();
  };

  const pressHistory = async history => {
    await searchName(history.toLowerCase());
    navigation.goBack();
  };

  const searchName = async name => {
    dispatch(getPokemonsByName(name));
  };

  const clearHistories = async () => {
    deleteAll().then(() => {
      navigation.goBack();
    });
  };

  return (
    <View className="bg-white flex-1" style={styles.container(insets.top)}>
      <SearchHeader
        navigation={navigation}
        value={search}
        onChangeText={text => setSearch(text)}
        onEndEditing={addHistory}
      />

      {histories.length > 0 && (
        <View className="mx-5 mt-5">
          <Text className="text-xs text-gray-400 font-bold">
            Search History
          </Text>

          {histories.map((history, index) => {
            return (
              <HistoryItem
                key={index}
                name={history}
                onPress={() => pressHistory(history)}
              />
            );
          })}

          <TouchableOpacity onPress={clearHistories}>
            <Text className="text-center mt-3">Clear Histories</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: top => ({
    paddingTop: top,
  }),
});
