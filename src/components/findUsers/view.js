import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import UserCard from './subComponents/userCard';

export default function findUsers({ users, follow, unfollow, scroll }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={user => user._id}
        showsVerticalScrollIndicator={false}
        onEndReached={scroll}
        onEndReachedThreshold={0}
        initialNumToRender={12}
        renderItem={user => (
          <UserCard
            user={user.item}
            follow={follow}
            unfollow={unfollow}
          />
        )}  
      />
    </View>
  );
}
