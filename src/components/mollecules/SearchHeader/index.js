import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {IcBack, IcSearch} from '../../../assets';

const SearchHeader = ({navigation, onChangeText, value, onEndEditing}) => {
  return (
    <View className="flex-row items-center h-16 px-5">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <IcBack fill={'#636363'} />
      </TouchableOpacity>
      <View
        id="searchbar"
        className="ml-5 border border-gray-300 rounded-md flex-1 p-2 flex-row items-center h-10">
        <IcSearch />
        <TextInput
          className="flex-1 ml-2 text-xs"
          placeholder="Search Pokemon Here..."
          onChangeText={onChangeText}
          value={value}
          onEndEditing={onEndEditing}
        />
      </View>
    </View>
  );
};

export default SearchHeader;
