import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import Post from './subComponents/post';

export default function feedView({ posts }) {
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
  );
}
