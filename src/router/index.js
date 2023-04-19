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
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen
        name="Detail"
        component={DetailPage}
        sharedElements={route => {
          const {testing} = route.params;
          return [`item.${testing.id}.photo`];
        }}
      />
      <Stack.Screen name="Search" component={SearchPage} />
    </Stack.Navigator>
  );
};

export default Router;
