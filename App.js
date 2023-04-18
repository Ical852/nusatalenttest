import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';

import Router from './src/router';
import store from './src/redux/store';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position={'top'} />
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
