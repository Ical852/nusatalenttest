import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';

import Router from './src/router';
import store from './src/redux/store';
import {GlobalLoading} from './src/components';

const MainApp = () => {
  const isLoading = useSelector(state => state.homeReducers.isLoading);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position={'top'} />
      {isLoading && <GlobalLoading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
