import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import UserCard from './subComponents/userCard';

export default function findUsers({ users }) {
  return (
    <View style={styles.container}>
      <UserCard user={{ firstName: 'Brett', lastName: 'Sodie' }} />
      <FlatList
        data={users}
        keyExtractor={user => user._id}
        showsVerticalScrollIndicator={false}
        renderItem={user => (
          <UserCard user={user} />
        )}  
      />
    </View>
  );
}
