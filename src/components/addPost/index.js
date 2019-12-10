import React from 'react';
import View from './view';

class AddPost extends React.Component {
  state = {
    photo: null,
    text: null,
  };

  onTextChange = (val, type) => {
    this.setState({ text: val });
  };

  addPost = () => {
    if (!this.state.text && !this.state.photo) return;
    this.props.actions.addPost({ form: this.state, navigate: this.navigate });
    this.setState({ text: null, photo: null });
  };

  navigate = () => {
    this.props.navigation.navigate('Feed');
  };

  render() {
    return (
      <View
        addPost={this.addPost}
        onTextChange={this.onTextChange}
        text={this.state.text}
      />
    );
  }
}

export default AddPost;
