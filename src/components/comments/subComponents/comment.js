import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function comment({ comment }) {
  return (
    <View style={styles.commentContainer}>
      <Text>
        Comment
      </Text>
    </View>
  );
}
