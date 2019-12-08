import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input = ({ labelText, value, onChangeText, placeholder, secureTextEntry, onSubmitHandler, email, clear }) => {

  const displayIcon = () => {
    if(labelText === 'email') {
      return <Icon name="user-circle" size={26} color="lightgray" />;
    }
    if(labelText === 'password') {
      return <View style={{ marginLeft: 2 }}><Icon name="unlock-alt" size={28} color="lightgray" /></View>;
    }
    if(labelText === 'firstname') {
      return <Icon name="vcard-o" size={24} color="lightgray" />
    }
    if(labelText === 'lastname') {
      return <Icon name="vcard-o" size={24} color="lightgray" />
    }
  };

  const { label, textInput, container } = styles;
  return (
    <View style={container}>
      <View style={[styles.label, { flex: labelText ? 1 : 0 }]}>
        {displayIcon()}
      </View>
      <TextInput
        secureTextEntry={secureTextEntry}
        style={textInput}
        value={clear ? '' : value}
        keyboardType={email ? 'email-address' : 'default'}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        autoCapitalize={'none'}
        underlineColorAndroid="transparent"
        onSubmitEditing={() => onSubmitHandler()}
      />
    </View>  
  );
};

const styles = StyleSheet.create({
  label: {
    // fontSize: 15,
    // fontWeight: '500',
    flex: 1
  },
  textInput: {
    color: '#000',
    paddingRight: 3,
    fontSize: 15,
    lineHeight: 23,
    flex: 5
  },
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    marginBottom: 15
  }
});

export default Input;
