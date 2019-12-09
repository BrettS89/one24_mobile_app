import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({ labelText, value, onChangeText, placeholder, secureTextEntry, onSubmitHandler, email, clear }) => {

  // const displayIcon = () => {
  //   if(labelText === 'email') {
  //     return <Icon name="user-circle" size={26} color="lightgray" />;
  //   }
  //   if(labelText === 'password') {
  //     return <View style={{ marginLeft: 2 }}><Icon name="unlock-alt" size={28} color="lightgray" /></View>;
  //   }
  //   if(labelText === 'firstname') {
  //     return <Icon name="vcard-o" size={24} color="lightgray" />
  //   }
  //   if(labelText === 'lastname') {
  //     return <Icon name="vcard-o" size={24} color="lightgray" />
  //   }
  // };

  // const { textInput } = styles;
  return (
    <View style={styles.container}>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.textInput}
        value={clear ? '' : value}
        keyboardType={email ? 'email-address' : 'default'}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        autoCapitalize={'none'}
        underlineColorAndroid="transparent"
        onSubmitEditing={() => onSubmitHandler()}
        multiline = {true}
        numberOfLines = {10}

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
    // height: 40,
    // flexDirection: 'row',
    // alignItems: 'center',
  }
});

export default Input;
