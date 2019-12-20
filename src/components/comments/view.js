import React from 'react';
import { View, Text, FlatList, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import styles from './styles';
import CommentCard from './subComponents/comment';
import SendIcon from 'react-native-vector-icons/Ionicons';
import colors from '../../shared/styles/colors';

export default function commentsView({ comments }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
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
            />
          </View>
          <View>
            <TouchableOpacity>
              <SendIcon name="md-send" size={38} color={colors.main} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
