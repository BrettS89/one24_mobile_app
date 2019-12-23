
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LOGO2 } from '../../../assets/images';

export default function logo(props) {
  return (
    <View>
      <Image source={LOGO2} resizeMode="contain" style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 110,
    marginLeft: 13,
  }
});
