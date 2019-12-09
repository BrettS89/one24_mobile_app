import React from 'react';
import { ScrollView, Text } from 'react-native';
import styles from './styles';

import Post from './subComponents/post';

export default function feedView(props) {
  return (
    <ScrollView style={styles.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
}
