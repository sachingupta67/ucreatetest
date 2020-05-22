import React from 'react';
import {View, StyleSheet} from 'react-native';
import MasterLayout from './src/Layout/MasterLayout';
import AddDog from './src/screens/AddDog';

const App = () => {
  return (
    <MasterLayout>
      <View style={styles.container}>
        <AddDog />
      </View>
    </MasterLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
export default App;
