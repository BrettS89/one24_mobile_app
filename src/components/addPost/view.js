import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import AddInput from '../../shared/components/addInput';
import Photo from 'react-native-vector-icons/Ionicons';
import colors from '../../shared/styles/colors';

export default function addPostView(props) {
  return (
    <View style={styles.container}>
      <View style={styles.multiMedia}>
        <TouchableOpacity style={styles.multiButton}>
          <Photo name="md-images" size={32} color={colors.main} />
          <Text style={styles.multiText}>Add photo</Text>
        </TouchableOpacity>
      </View>
      <AddInput
        placeholder="Your daily post ..."
      />
      <TouchableOpacity style={styles.addPostButton}>
        <Text style={styles.addPostText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
}
