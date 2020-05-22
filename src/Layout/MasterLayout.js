/*
Purpose : Using this MasterLayout f
           or common handling like (error handling,loading,SafeAreaView)
           can easily apply to all component

Author : Sachin Gupta
*/

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
