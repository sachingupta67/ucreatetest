import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MasterLayout from './src/Layout/MasterLayout';
import AddDog from './src/screens/AddDog';

import {Provider} from 'react-redux';
import store from './src/redux/store';
import Records from './src/screens/Records';

const App = () => {
  return (
    <Provider store={store}>
      <MasterLayout>
        <View style={styles.container}>
          <AddDog />
          <Records />
        </View>
      </MasterLayout>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
export default App;
