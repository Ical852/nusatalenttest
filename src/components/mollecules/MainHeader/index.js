import React from 'react';
import {Image, TextInput, View} from 'react-native';

import {IcSearch, PokeBall, PokeText} from '../../../assets';
import {SharedElement} from 'react-navigation-shared-element';

const MainHeader = ({onPressIn}) => {
  return (
    <View className="flex-row items-center h-16 px-5">
      <View className="flex-row items-center">
        <SharedElement id="pokeball">
          <Image source={PokeBall} className="w-8 h-8" />
        </SharedElement>
        <SharedElement id="poketext">
          <Image source={PokeText} className="h-12 w-24 ml-1" />
        </SharedElement>
      </View>
      <View
        id="searchbar"
        className="ml-5 border border-gray-300 rounded-md flex-1 p-2 flex-row items-center h-10">
        <IcSearch />
        <TextInput
          editable={false}
          className="flex-1 ml-2 text-xs"
          placeholder="Search Pokemon Here..."
          onPressIn={onPressIn}
        />
      </View>
    </View>
  );
};

export default MainHeader;
