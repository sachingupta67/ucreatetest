/*
Purpose : Using this MasterLayout f
           or common handling like (error handling,loading,SafeAreaView)
           can easily apply to all component

Author : Sachin Gupta
*/

import React from 'react';
import {View, SafeAreaView} from 'react-native';
const MasterLayout = props => {
  return (
    <SafeAreaView>
      <View>{props.children}</View>
    </SafeAreaView>
  );
};

export default MasterLayout;
