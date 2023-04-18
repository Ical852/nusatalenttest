import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { getPokemons } from '../../redux/actTypes';

const SplashPage = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.homeReducers.pokemons);

  return (
    <View>
      {pokemons?.results?.map((data, id) => {
        return <Text key={id}>{data.name}</Text>
      })}
      <TouchableOpacity onPress={() => {
        dispatch(getPokemons());
      }}>
        <Text>TEST DONG</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SplashPage;

const styles = StyleSheet.create({});