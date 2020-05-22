import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomTextInput = ({title, placeholder, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        onChangeText={onChangeText}
        blurOnSubmit={false}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: '2%',
  },
  title: {
    fontSize: 16,
    marginVertical: 5,
  },
  textInput: {},
});

export default CustomTextInput;
