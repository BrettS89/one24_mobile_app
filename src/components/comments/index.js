import React from 'react';
import View from './view';
import { BackHandler } from 'react-native';

class Comments extends React.Component {
  state = {
    comment: '',
  };

  componentDidMount() {
    this.props.actions.getComments();
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonPress,
    );
  }

  componentWillUnmount() {
    
  }

  addComment = () => {
    this.props.actions.addComment({ comment: this.state.comment });
  };

  onTextChange = text => {
    this.setState({ comment: text });
  };

  handleBackButtonPress = () => {
    this.props.navigation.navigate(this.props.state.prevScreen);
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonPress
    );
    return true;
  };

  render() {
    return (
      <View
        comments={this.props.state.comments}
        addComment={this.addComment}
        onTextChange={this.onTextChange}
      />
    );
  }
}

export default Comments;
