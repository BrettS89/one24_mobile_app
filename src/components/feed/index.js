import React from 'react';
import View from './view';

class Feed extends React.Component {
  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    this.props.actions.getPosts();
  };

  render() {
    return (
      <View
        posts={this.props.state.posts}
        scroll={this.getPosts}
      />
    );
  }
}

export default Feed;
