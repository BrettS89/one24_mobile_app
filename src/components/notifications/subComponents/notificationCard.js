import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';
import { USER_DEFAULT } from '../../../../assets/images';

export default function notificationCard({ notification }) {
  const renderProfilePhoto = () => {
    return notification.otherUserId.photo
      ? <Image source={{ uri: notification.otherUserId.photo }} resizeMode="cover" />
      : <Image source={USER_DEFAULT} style={styles.profileImage} />
  };

  return (
    <View style={styles.cardContainer}>
      <View>
        {renderProfilePhoto()}
      </View>
      <View>
        <Text style={styles.mainText}>
          {notification.text}
        </Text>
      </View>
    </View>
  );
}
