import React from 'react';
import { Platform, View, Text, FlatList, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';
import CommentCard from './subComponents/comment';
import SendIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../shared/styles/colors';

export default function commentsView({ comments, addComment, onTextChange }) {
  console.log(Platform);
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 120 : 0}>
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start' }}>
        <FlatList
          data={comments}
          keyExtractor={comment => comment._id}
          showsVerticalScrollIndicator={false}
          renderItem={comment => (
            <CommentCard
              comment={comment.item}
            />
          )}
        />
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              placeholder="Comment..."
              multiline={true}
              onChangeText={onTextChange}
            />
          </View>
          <View>
            <TouchableOpacity onPress={addComment}>
              <SendIcon name="md-send" size={38} color={colors.main} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
