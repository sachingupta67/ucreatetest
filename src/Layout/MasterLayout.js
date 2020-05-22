import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
const MasterLayout = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>{props.children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
});
export default MasterLayout;
