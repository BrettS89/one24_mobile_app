import React from 'react';
import View from './view';

class Notifications extends React.Component {
  componentDidMount() {
    this.props.actions.getNotifications();
  }

  render() {
    return (
      <View
        notifications={this.props.state.notifications}
      />
    );
  }
}

export default Notifications;
