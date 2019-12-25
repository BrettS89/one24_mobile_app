import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../shared/styles/colors';

export default function addUsernameView({ onTextChange, username, error }) {
  const displayError = () => {
    if (error) {
      return (
        <Text style={{ textAlign: 'center', color: 'red' }}>{error}</Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pick your username
      </Text>
      <View style={{ width: '100%', flex: 1 }}>
        <View style={styles.inputContainer}>
          <Icon name="ios-at" size={40} color={colors.main} />
          <TextInput
            placeholder={'your-username'}
            style={styles.textInput}
            onChangeText={onTextChange}
            value={username}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={{ height: 40 }}>
          {displayError()}
        </View>
      </View>
    </View>
  );
}
