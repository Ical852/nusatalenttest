import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {PokeBall, PokeText} from '../../assets';
import {SharedElement} from 'react-navigation-shared-element';

const SplashPage = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View className="bg-white w-full h-full flex-1 justify-center items-center">
      <SharedElement id="pokeball">
        <Image source={PokeBall} className="h-40 w-40" />
      </SharedElement>
      <SharedElement id="poketext">
        <Image source={PokeText} className="h-36 w-72" />
      </SharedElement>
    </View>
  );
};

export default SplashPage;

const styles = StyleSheet.create({});
