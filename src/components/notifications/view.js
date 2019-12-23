import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import Notification from './subComponents/notificationCard';

export default function notificationsView({ notifications }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={notification => notification._id}
        showsVerticalScrollIndicator={false}
        renderItem={n => (
          <Notification
            notification={n.item}
          />
        )}
      />
    </View>
  );
}
