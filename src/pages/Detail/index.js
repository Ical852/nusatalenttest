import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';

import {IcBack, IcHeight, IcWeight, PokeBallBg} from '../../assets';
import {generateStatText, generateTypeColor} from '../../utils';
import {BarPercentage, TypeTags} from '../../components';

const DetailPage = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const params = route.params;

  const {pokeDetail, forms, curName} = params;
  const {sprites} = forms;
  const {front_default} = sprites;
  const {name, types, abilities, weight, height, moves, stats} = pokeDetail;

  const type = forms.types[0].type.name;

  return (
    <View
      style={styles.container(insets.top, insets.bottom, type)}
      className="bg-white flex-1">
      <View className="p-5 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack fill={'#FFFFFF'} />
        </TouchableOpacity>
        <Text className="text-xl text-white font-bold capitalize ml-5">
          {name}
        </Text>
      </View>

      <View
        className={'flex-1 mt-40 pt-14 bg-white rounded-3xl items-center px-5'}>
        <View className="flex-row items-center">
          {types.map((dtype, index) => {
            return <TypeTags key={index} types={dtype} />;
          })}
        </View>

        <Text className="my-5 text-xl font-bold" style={styles.colorText(type)}>
          About
        </Text>

        <View className="flex-row items-center">
          <View className="items-center flex-1">
            <View className="flex-row items-center">
              <IcWeight />
              <Text className="ml-2">{weight} Kg</Text>
            </View>
            <Text className="mt-3 text-gray-400">Weight</Text>
          </View>

          <View className="h-12 w-px bg-gray-300 mx-5" />

          <View className="items-center flex-1">
            <View className="flex-row items-center">
              <IcHeight />
              <Text className="ml-2">{height} Cm</Text>
            </View>
            <Text className="mt-3 text-gray-400">Height</Text>
          </View>

          <View className="h-12 w-px bg-gray-300 mx-5" />

          <View className="items-center flex-1">
            <Text className="ml-2">{moves[0].move.name} Cm</Text>
            <Text className="mt-0 text-gray-400">Moves</Text>
          </View>
        </View>

        <Text
          numberOfLines={3}
          className="text-center mt-5 text-black font-regular">
          {name} have some abilites, there are{' '}
          {abilities.map(abl => {
            return `${abl.ability.name} `;
          })}
        </Text>

        <Text className="mt-8 text-xl font-bold" style={styles.colorText(type)}>
          Base Stats
        </Text>

        <View className="flex-row mt-5">
          <View>
            {stats.map((sts, index) => {
              return (
                <Text
                  key={index}
                  className="uppercase font-bold"
                  style={styles.colorText(type)}>
                  {generateStatText(sts.stat.name)}
                </Text>
              );
            })}
          </View>
          <View className="h-26 w-px bg-gray-300 mx-3" />
          <View>
            {stats.map((sts, index) => {
              return (
                <View key={index} className="flex-row items-center">
                  <Text>{sts.base_stat}</Text>
                </View>
              );
            })}
          </View>
          <View className="h-26 w-px mx-1" />
          <View className="flex-1">
            {stats.map((sts, index) => {
              return (
                <BarPercentage
                  key={index}
                  percentage={sts.base_stat}
                  type={type}
                />
              );
            })}
          </View>
        </View>
      </View>

      <View className="h-52 w-full absolute top-32 items-center">
        <SharedElement id={curName}>
          <Image source={{uri: front_default}} className="w-52 h-52" />
        </SharedElement>
      </View>

      <Image
        style={styles.pokeBall(insets.top)}
        source={PokeBallBg}
        className="h-52 w-52 opacity-10 absolute"
      />
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: (top, bottom, type) => ({
    paddingTop: top,
    backgroundColor: generateTypeColor(type),
  }),
  pokeBall: top => ({
    top: top,
    right: 10,
  }),
  colorText: type => ({
    color: generateTypeColor(type),
  }),
});
