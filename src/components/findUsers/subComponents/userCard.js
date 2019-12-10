import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { USER_DEFAULT } from '../../../../assets/images';
import AddUser from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../shared/styles/colors';

export default function userCard({ user }) {
  const renderPhoto = () => {
    return user.photo
      ? <Image source={{ uri: user.photo }} style={styles.profilePhoto} resizeMode="cover" />
      : <Image source={USER_DEFAULT} style={styles.profilePhoto} resizeMode="cover" />
  };

  const renderUserIcon = () => {
    return (
      <TouchableOpacity>
        <AddUser name="user-plus" size={26} color={colors.main} />
      </TouchableOpacity>
    );
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
