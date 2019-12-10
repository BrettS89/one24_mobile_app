import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';
import colors from '../../../shared/styles/colors';
import { USER_DEFAULT, VADER } from '../../../../assets/images';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/SimpleLineIcons';

export default function post({ post }) {
  const renderProfilePhoto = () => {
    return post.profilePhoto
      ? <Image source={{ uri: post.profilePhoto }} resizeMode="cover" />
      :  <Image source={USER_DEFAULT} style={styles.profileImage} />
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        {renderProfilePhoto()}
        <Text style={styles.userName}>
          {post.firstName} {post.lastName}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          {post.text}
        </Text>
      </View>
      <View style={styles.icons}>
        <Like name="hearto" size={26} color={colors.main} />
        <Comment name="bubbles" size={28} color={colors.main} style={styles.middleIcon} />
      </View>
    </View>
  );
}
