import React, {useCallback, useEffect, useState} from 'react';

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {fullUrlAction} from '../../../services';
import {showError} from '../../../utils';
import {SharedElement} from 'react-navigation-shared-element';

const PokemonCard = ({item}) => {
  const navigation = useNavigation();

  const {name, url} = item?.pokemon ?? item;
  const [pokeDetail, setPokeDetail] = useState({});
  const [forms, setForms] = useState({});

  const fetchDetails = useCallback(async () => {
    try {
      const response = await fullUrlAction(url);
      setPokeDetail(response.data);
      const result = await fullUrlAction(response.data.forms[0].url);
      setForms(result.data);
    } catch (error) {
      showError('Cannot get the detail of ', name, ' Data');
    }
  }, [name, url]);
  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail', {pokeDetail, forms, curName: name});
      }}
      activeOpacity={0.5}
      style={styles.container}
      className="bg-white rounded-md p-1 justify-center items-center">
      <SharedElement id={name} className="h-3/5 w-full">
        <Image
          source={{uri: forms?.sprites?.front_default}}
          className="h-full w-full"
        />
      </SharedElement>
      <Text
        numberOfLines={1}
        className={'text-sm font-regular capitalize mt-1'}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width / 3 - 25,
    height: Dimensions.get('window').width / 3 - 25,
    marginHorizontal: 6,
    marginBottom: 6,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
});
