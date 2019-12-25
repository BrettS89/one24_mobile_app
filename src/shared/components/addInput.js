import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, onSubmitHandler, email, clear }) => {

  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
        value={clear ? '' : value}
        keyboardType={email ? 'email-address' : 'default'}
        onChangeText={onChangeText}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onSubmitEditing={() => onSubmitHandler()}
        multiline = {true}
      />
    </View>  
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: '#000',
    fontSize: 20,
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
  }
});

export default Input;
