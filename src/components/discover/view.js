import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import Post from '../feed/subComponents/post';

export default function discoverView({ posts }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={post => post._id}
        showsVerticalScrollIndicator={false}
        renderItem={post => (
          <Post
            post={post.item}
          />
        )}
      />
    </View>
  )
}
