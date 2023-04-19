import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import MansoryList from '@react-native-seoul/masonry-list';

import {MainHeader, PaginateButton, PokemonCard} from '../../components';
import {pokeCategory} from '../../utils';
import {
  getNextPrevPokemons,
  getPokemons,
  getPokemonsCategory,
} from '../../redux/actTypes';

const HomePage = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.homeReducers.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const pageAction = url => {
    dispatch(getNextPrevPokemons(url));
  };

  const categoryAction = item => {
    const {id} = item;
    if (item.id > 0) {
      dispatch(getPokemonsCategory(id));
    } else {
      dispatch(getPokemons());
    }
  };

  const renderItem = ({item}) => <PokemonCard item={item} />;

  return (
    <View className="flex-1 bg-white" style={styles.container(insets.top)}>
      <MainHeader
        onPressIn={() => {
          navigation.navigate('Search');
        }}
      />
      <ScrollView className="mx-5 mt-3" showsVerticalScrollIndicator={false}>
        <Text className="mb-3 text-sm text-black font-bold">
          Pokemon Category :
        </Text>

        <SelectDropdown
          data={pokeCategory}
          onSelect={categoryAction}
          buttonTextAfterSelection={selectedItem => {
            return selectedItem.name;
          }}
          rowTextForSelection={item => {
            return item.name;
          }}
          buttonStyle={styles.dropBtn}
          buttonTextStyle={styles.valueText}
          rowTextStyle={styles.valueText}
          defaultButtonText="All"
        />

        {pokemons?.results?.length < 1 && (
          <Text className="text-center font-bold text-base mt-5">
            No Data Yet
          </Text>
        )}

        <MansoryList
          key={item => item.id}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          numColumns={3}
          data={pokemons?.results}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.mansoryList}
        />

        <View className="w-full items-center mt-10">
          <PaginateButton data={pokemons} onAction={pageAction} />
        </View>

        <View className="h-20" />
      </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: top => ({
    paddingTop: top,
  }),
  dropBtn: {
    width: Dimensions.get('window').width - 40,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
  },
  valueText: {
    fontSize: 14,
  },
  mansoryList: {
    marginTop: 16,
  },
});
