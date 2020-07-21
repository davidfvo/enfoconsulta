import React from 'react';
import { Text, View } from 'react-native';
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './app/components/error-loading/Loading';
import rootSaga from './app/sagas';
import configureStore from './app/stores';
import RootScreen from './app/containers/root/RootScreen'

useScreens ();

const {runSaga, store, persistor} = configureStore ();
runSaga (rootSaga);

export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <RootScreen />
    </PersistGate>
  </Provider>
);
