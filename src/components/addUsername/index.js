import React from 'react';
import View from './view';

class AddUsername extends React.Component {
  onTextChange = (val, type) => {
    if (val.length < 16) {
      this.props.actions.setUsername(val);
    }
  };

  render() {
    return (
      <View
        onTextChange={this.onTextChange}
        username={this.props.state.username}
        error={this.props.state.usernameError}
      />
    );
  }
}

export default AddUsername;
