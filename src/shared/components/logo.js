
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LOGO } from '../../../assets/images';

export default function logo(props) {
  return (
    <View>
      <Image source={LOGO} resizeMode="contain" style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 110,
    marginLeft: 13,
  }
});
