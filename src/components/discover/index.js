import React from 'react';
import View from './view';

class Discover extends React.Component {
  componentDidMount() {
    this.props.actions.discoverPosts();
  }

  scroll = () => {
    this.props.actions.discoverScroll();
  };

  render() {
    return (
      <View
        posts={this.props.state.posts}
        scroll={this.scroll}
      />
    );
  }
}

export default Discover;
