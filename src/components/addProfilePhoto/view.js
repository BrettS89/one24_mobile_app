import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { USER_DEFAULT } from '../../../assets/images/index';

export default function addProfilePhotoView({ uploaded, profilePhoto, uploadProfilePhoto }) {
  const renderProfilePhoto = () => {
    return uploaded
      ? <Image source={{ uri: profilePhoto }} style={styles.profileImage} resizeMode="cover" />
      : <Image source={USER_DEFAULT} style={styles.profileImage} />
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Add a profile photo?
      </Text>
      <View style={styles.content}>
        {renderProfilePhoto()}

        <TouchableOpacity style={styles.uploadBtn} onPress={async () => await uploadProfilePhoto()}>
          <Text style={styles.btnText}>
            Upload
          </Text> 
        </TouchableOpacity>

      </View>
    </View>
  );
}
