import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { USER_DEFAULT } from '../../../../assets/images';
import AddUser from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../shared/styles/colors';

export default function userCard({ user, follow, unfollow }) {
  const [isFollowing, setFollowing] = useState(false);

  const renderPhoto = () => {
    return user.photo
      ? <Image source={{ uri: user.photo }} style={styles.profilePhoto} resizeMode="cover" />
      : <Image source={USER_DEFAULT} style={styles.profilePhoto} resizeMode="cover" />
  };

  const renderUserIcon = () => {
    if (!isFollowing) {
      return (
        <TouchableOpacity onPress={() => setIsFollowing(user._id)}>
          <AddUser name="user-plus" size={26} color={colors.main} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onPress={() => setUnfollowing(user._id)}>
        <AddUser name="user-times" size={26} color={colors.red} />
      </TouchableOpacity>
    );
  };

  const setIsFollowing = (id) => {
    follow(id);
    setFollowing(true);
  };

  const setUnfollowing = (id) => {
    unfollow(id);
    setFollowing(false);
  };

  return (
    <View style={styles.userCardContainer}>
      <View style={styles.content}>
        <View>
          {renderPhoto()}
        </View>
        <Text style={styles.userName}>
          {user.firstName} {user.lastName}
        </Text>
      </View>
      {renderUserIcon()}
    </View>
  );
}
