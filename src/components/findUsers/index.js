import React from 'react';
import View from './view';

class FindUsers extends React.Component {
  render() {
    return (
      <View
        users={this.props.state.users}
      />
    );
  }
}

export default FindUsers;
