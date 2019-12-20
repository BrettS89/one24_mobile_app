import React from 'react';
import View from './view';

class Feed extends React.Component {
  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.props.actions.getPosts();
  };

  goToComments = postId => {
    this.props.actions.setPostId(postId);
    this.props.navigation.navigate('Comments');
  };

  render() {
    return (
      <View
        posts={this.props.state.posts}
        scroll={this.getPosts}
        goToComments={this.goToComments}
      />
    );
  }
}

export default Feed;
