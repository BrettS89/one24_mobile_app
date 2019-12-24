import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import View from './view';
import { getSignedUrl as apiGetSignedUrl } from '../../lib/api';
import s3Upload from '../../utils/uploadFileToS3';

class AddPost extends React.Component {
  state = {
    photo: null,
    text: null,
  };

  onTextChange = (val, type) => {
    this.setState({ text: val });
  };

  addPost = async () => {
    // start spinner
    let key = null
    if (this.state.photo) {
      key = await this.uploadImage();
    }
    if (!this.state.text && !this.state.photo) return;
    this.props.actions.addPost({ form: { text: this.state.text, photo: key }, navigate: this.navigate });
    this.setState({ text: null, photo: null });
  };

  navigate = () => {
    this.props.navigation.navigate('Feed');
  };

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.2,
    });

    this.setState({ photo: result.uri });
  };

  uploadImage = async () => {
    const res = await fetch(this.state.photo);
    const blob = await res.blob();
    const fileType = blob.data.type;
    const fileExtension = fileType.split('/')[1];
    const { data: { url, key } } = await apiGetSignedUrl(fileExtension);
    await s3Upload(url, blob, fileType);
    return key;
  };

  render() {
    return (
      <View
        addPost={this.addPost}
        onTextChange={this.onTextChange}
        text={this.state.text}
        photo={this.state.photo}
        pickImage={this.pickImage}
      />
    );
  }
}

export default AddPost;
