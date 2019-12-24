import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import View from './view';
import { getSignedUrl as apiGetSignedUrl, addProfilePhoto as apiAddProfilePhoto } from '../../lib/api';
import s3Upload from '../../utils/uploadFileToS3';

class AddProfilePhoto extends React.Component {
  state = {
    profilePhoto: null,
    uploaded: false,
  };

  uploadProfilePhoto = async () => {
    try {
      await this.getPermissionAsync();
      const image = await this.pickImage();
      // start spinner
      const res = await fetch(image.uri);
      const blob = await res.blob();
      const fileType = blob.data.type;
      const fileExtension = fileType.split('/')[1];
      const { data: { url, key } } = await apiGetSignedUrl(fileExtension);
      await s3Upload(url, blob, fileType);
      await apiAddProfilePhoto(key);
      this.setState({ uploaded: true, profilePhoto: key });
    } catch(e) {
      console.log(e);
    }
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

    return result;
  };

  render() {
    return (
      <View
        uploaded={this.state.uploaded}
        profilePhoto={this.state.profilePhoto}
        uploadProfilePhoto={this.uploadProfilePhoto}
      />
    );
  }
}

export default AddProfilePhoto;
