import React from 'react';

import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {
  DetailPage,
  HomePage,
  SearchPage,
  SplashPage,
  TestDetailPage,
  TestPage,
} from '../pages';

const Stack = createSharedElementStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashPage} />
      <Stack.Screen name="Detail" component={DetailPage} />
      <Stack.Screen name="TestPage" component={TestPage} />
      <Stack.Screen name="Search" component={SearchPage} />
      <Stack.Screen
        name="Home"
        component={HomePage}
        sharedElements={(navigation, otherNavigation, showing) => {
          if (showing && otherNavigation.name === 'Splash') {
            return ['pokeball', 'poketext'];
          }
        }}
      />
      <Stack.Screen
        name="TestDetailPage"
        component={TestDetailPage}
        sharedElements={route => {
          const {testing} = route.params;
          return [`item.${testing.id}.photo`];
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
