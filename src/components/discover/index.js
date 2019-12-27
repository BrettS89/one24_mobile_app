import React from 'react';
import View from './view';

class Discover extends React.Component {
  componentDidMount() {
    this.props.actions.discoverPosts();
  }

  scroll = () => {
    this.props.actions.discoverScroll();
  };

  followUser = userId => {
    this.props.actions.follow({ id: userId });
  };

  goToComments = postId => {
    this.props.actions.setPostId(postId);
    this.props.actions.setPrevScreen('Discover');
    this.props.navigation.navigate('Comments');
  };

  render() {
    return (
      <View
        posts={this.props.state.posts}
        scroll={this.scroll}
        goToComments={this.goToComments}
        followUser={this.followUser}
      />
    );
  }
}

export default Discover;
