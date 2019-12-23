import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import View from './view';

class AddProfilePhoto extends React.Component {
  state = {
    profilePhoto: null,
    uploaded: false,
  };

  uploadProfilePhoto = async () => {
    try {
      await this.getPermissionAsync();
      const image = await this.pickImage();
      const res = await fetch(image.uri);
      const blob = await res.blob();
      console.log(blob);
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

  uploadImage = (image) => {

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
