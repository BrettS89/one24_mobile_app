import React from 'react';
import View from './view';

class Discover extends React.Component {
  componentDidMount() {
    this.props.actions.discoverPosts();
  }

  render() {
    return (
      <View
        posts={this.props.state.posts}
      />
    );
  }
}

export default Discover;
