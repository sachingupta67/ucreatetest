import React from 'react';
import {View, Text} from 'react-native';
import MasterLayout from './src/Layout/MasterLayout';
const App = () => {
  return (
    <MasterLayout>
      <View style={{borderWidth: 1}}>
        <Text>App</Text>
      </View>
    </MasterLayout>
  );
};
export default App;
