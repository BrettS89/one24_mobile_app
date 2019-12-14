import React from 'react';
import View from './view';

class FindUsers extends React.Component {
  componentDidMount() {
    this.props.actions.getUsers();
  }

  follow = (userId) => {
    this.props.actions.follow({ id: userId });
  };

  unFollow = (userId) => {
    this.props.actions.unfollow(userId);
  };

  scroll = () => {
    this.props.actions.onUsersScroll();
  };

  render() {
    return (
      <View
        users={this.props.state.users}
        follow={this.follow}
        unfollow={this.unFollow}
        scroll={this.scroll}
      />
    );
  }
}

export default FindUsers;
