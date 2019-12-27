import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles';
import colors from '../../../shared/styles/colors';
import { USER_DEFAULT } from '../../../../assets/images';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/SimpleLineIcons';
import Options from 'react-native-vector-icons/Entypo';
import AddUser from 'react-native-vector-icons/FontAwesome5';
import { likePost as apiLikePost } from '../../../lib/api';

export default function post({ post, goToComments, followUser }) {
  const [following, setFollowing] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);
  
  const renderProfilePhoto = () => {
    return post.profilePhoto
      ? <Image source={{ uri: post.profilePhoto }} style={styles.profileImage} resizeMode="cover" />
      : <Image source={USER_DEFAULT} style={styles.profileImage} />
  };

  const renderPhoto = () => {
    if (post.photo) {
      return (
        <View style={{ marginBottom: 10 }}>
          <Image source={{ uri: post.photo }} style={{ aspectRatio: 1/1 }} />
        </View>  
      );
    }
  };

  const renderFollow = () => {
    if (!following && !post.following) {
      return (
        <TouchableOpacity onPress={follow}>
          <AddUser name="user-plus" size={16} color={colors.main} style={styles.userIcon} />
        </TouchableOpacity>
      );
    }
  };

  const renderLikeIcon = () => {
    if (!liked && !post.liked) {
      return (
        <TouchableOpacity onPress={likePost}>
          <Like name="hearto" size={26} color={colors.main} />
        </TouchableOpacity>
      );
    }
    return (
      <View>
        <Like name="heart" size={26} color={colors.main} />
      </View>
    );
  };

  const renderLikes = () => {
    if (likes) {
      return (
        <View>
          <Text style={styles.likes}>
            {likes} likes
          </Text>
        </View>
      );
    }
  };

  const renderViewComments = () => {
    if (post.comments) {
      return (
        <TouchableOpacity
          style={styles.viewCommentsButton}
          onPress={() => goToComments(post._id)}
        >
          <Text style={styles.viewComments}>
            View comments
          </Text>
        </TouchableOpacity>
      );
    }
  };

  const likePost = () => {
    setLiked(true);
    setLikes(likes + 1);
    apiLikePost({ post: post._id });
  };

  const follow = () => {
    setFollowing(true);
    followUser(post.userId);
  };

  return (
    <View style={styles.postContainer}>

      <View style={styles.optionsButtonContainer}>
        <TouchableOpacity>
          <Options name="dots-three-horizontal" size={24} color="lightgray"  />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        {renderProfilePhoto()}
        <Text style={styles.userName}>
          {post.fullName}
        </Text>
        {renderFollow()}
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          {post.text}
        </Text>
      </View>
      
      {renderPhoto()}

      <View style={[styles.icons, { marginBottom: post.likes || post.comments ? 5 : 0 }]}>
        {renderLikeIcon()}
        <TouchableOpacity onPress={() => goToComments(post._id)}>
          <Comment name="bubbles" size={28} color={colors.main} style={styles.middleIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.likesAndComments}>
        {renderLikes()}
        {renderViewComments()}
      </View>

    </View>
  );
}
