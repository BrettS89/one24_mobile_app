import React from 'react';
import View from './view';

class Feed extends React.Component {
  componentDidMount() {
    this.props.actions.getPosts();
  }

  render() {
    return (
      <View
        posts={this.props.state.posts}
      />
    );
  }
}

export default Feed;
