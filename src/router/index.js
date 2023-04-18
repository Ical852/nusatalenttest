import React from 'react';

import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailPage, HomePage, SearchPage, SplashPage } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
        initialRouteName='Splash'
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splash' component={SplashPage} />
        <Stack.Screen name='Home' component={HomePage} />
        <Stack.Screen name='Detail' component={DetailPage} />
        <Stack.Screen name='Search' component={SearchPage} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});