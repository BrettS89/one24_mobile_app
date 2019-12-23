import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';
import { USER_DEFAULT } from '../../../../assets/images/';

export default function comment({ comment }) {
  const renderPhoto = () => {
    return comment.userId.photo
      ? <Image source={{ uri: comment.userId.photo }} style={styles.profilePhoto} resizeMode="cover" />
      : <Image source={USER_DEFAULT} style={styles.profilePhoto} resizeMode="cover" />
  };

  return (
    <View style={styles.commentContainer}>
      <View style={styles.userHeader}>
        {renderPhoto()}
        <Text style={styles.name}>
          {comment.userId.fullName}
        </Text>
      </View>
      <View>
        <Text style={styles.content}>
          {comment.text}
        </Text>
      </View>
    </View>
  );
}
