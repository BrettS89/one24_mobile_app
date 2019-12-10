import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Input from '../../shared/components/Input';

export default function registrationView(props) {
  function showError() {
    return props.error
      ? props.error
      : '';
  }

  return (
    <View style={styles.container}>
      <View style={styles.signupFormContainer}>

        <View style={styles.logoContainer}>
          {/* <Image source={LOGO5} resizeMode="contain" style={{ width: 160, height: 50 }} /> */}
          <Text>Signup</Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <View style={styles.inputContainer}>
          <Input
              name="firstname"
              labelText="firstname"
              email={false}
              placeholder="First name"
              onChangeText={email => props.onTextChange(email, 'firstName')}
              onSubmitHandler={props.onRegister}
            />
            <Input
              name="lastname"
              labelText="lastname"
              email={false}
              placeholder="Last name"
              onChangeText={email => props.onTextChange(email, 'lastName')}
              onSubmitHandler={props.onRegister}
            />
            <Input
              name="email"
              labelText="email"
              email={true}
              placeholder="Email"
              onChangeText={email => props.onTextChange(email, 'email')}
              onSubmitHandler={props.onRegister}
            />
          </View>
          <View>
            <Input
              name="password"
              labelText="password"
              placeholder="Password"
              secureTextEntry
              onChangeText={password => props.onTextChange(password, 'password')}
              onSubmitHandler={props.onRegister}
            />
          </View> 
        </View>

        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {showError()}
          </Text>
        </View>

        <View>
          <TouchableOpacity  
            style={styles.button}
            onPress={props.onRegister}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>

          <View style={{ width: '100%', alignItems: 'center', marginVertical: 5 }}>
            <Text>or</Text>
          </View>
          {/* {facebookOrSpinner()} */}
        </View>

      </View>
    </View>
  );
}
