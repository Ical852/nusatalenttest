import React from 'react';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {DetailPage, HomePage, SearchPage, SplashPage} from '../pages';

const Stack = createSharedElementStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="Search" component={SearchPage} />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
        sharedElements={(route, otherNavigation, showing) => {
          const {curName} = route.params;
          return [curName];
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        sharedElements={(navigation, otherNavigation, showing) => {
          if (showing && otherNavigation.name === 'Splash') {
            return ['pokeball', 'poketext'];
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
