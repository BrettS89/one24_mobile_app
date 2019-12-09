import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles';
import { USER_DEFAULT, VADER } from '../../../../assets/images';
import Like from 'react-native-vector-icons/AntDesign';
import Comment from 'react-native-vector-icons/SimpleLineIcons';

export default function post(props) {

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={VADER} style={styles.profileImage} />
        <Text style={styles.userName}>
          Darth Vader
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </View>
      <View style={styles.icons}>
        <Like name="hearto" size={26} />
        <Comment name="bubbles" size={28} style={styles.middleIcon} />
      </View>
    </View>
  );
}
