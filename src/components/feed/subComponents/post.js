import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import colors from '../../../shared/styles/colors';
import { USER_DEFAULT, VADER } from '../../../../assets/images';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/SimpleLineIcons';
import Options from 'react-native-vector-icons/Entypo';
import AddUser from 'react-native-vector-icons/FontAwesome5';

export default function post({ post }) {
  const [following, setFollowing] = useState(false);
  
  const renderProfilePhoto = () => {
    return post.profilePhoto
      ? <Image source={{ uri: post.profilePhoto }} resizeMode="cover" />
      :  <Image source={USER_DEFAULT} style={styles.profileImage} />
  };

  const renderFollow = () => {
    if (!following && !post.following) {
      return (
        <TouchableOpacity>
          <AddUser name="user-plus" size={16} color={colors.main} style={styles.userIcon} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.postContainer}>

      <View style={{ position: 'absolute', top: 1, flexDirection: 'row', width: '100%', paddingTop: 15, justifyContent: 'flex-end', zIndex: 50 }}>
        <TouchableOpacity>
          <Options name="dots-three-horizontal" size={24} color="lightgray"  />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        {renderProfilePhoto()}
        <Text style={styles.userName}>
          {post.firstName} {post.lastName}
        </Text>
        {renderFollow()}
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
