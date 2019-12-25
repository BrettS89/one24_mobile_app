import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AddInput from '../../shared/components/addInput';
import Photo from 'react-native-vector-icons/Ionicons';
import Check from 'react-native-vector-icons/FontAwesome5';
import colors from '../../shared/styles/colors';

export default function addPostView({ onTextChange, addPost, text, photo, pickImage, removeImage }) {
  const renderPhotoIcon = () => {
    if (!photo) {
      return (
        <TouchableOpacity style={styles.multiButton} onPress={pickImage}>
          <Photo name="md-images" size={32} color={colors.main} />
          <Text style={styles.multiText}>
            Add photo
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.multiButton2}>
        <View style={styles.imageAddedRow}>
          <Check name="check" size={25} color={colors.main} style={{ paddingVertical: 4 }} />
          <Text style={styles.multiText}>
            Photo added
          </Text>
        </View>
          <TouchableOpacity onPress={removeImage}>
            <Text style={styles.removeText}>
              Remove
            </Text>
          </TouchableOpacity>
      </View>
    )
  };

  return (
    <View style={styles.container}>
      <View style={styles.multiMedia}>
       {renderPhotoIcon()}
      </View>
      <AddInput
        placeholder="Your daily post ..."
        onChangeText={onTextChange}
        value={text}
        onSubmitHandler={addPost}
      />
      <TouchableOpacity style={styles.addPostButton} onPress={addPost}>
        <Text style={styles.addPostText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}
