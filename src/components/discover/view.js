import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import Post from '../feed/subComponents/post';

export default function discoverView({ posts, scroll }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={post => post._id}
        showsVerticalScrollIndicator={false}
        onEndReached={scroll}
        onEndReachedThreshold={0}
        renderItem={post => (
          <Post
            post={post.item}
          />
        )}
      />
    </View>
  )
}
