import React from 'react';
import { AppLoading } from 'expo';

class Auth extends React.Component {
  componentDidMount() {
    this.props.actions.appLoad(this.navigate);
  }

  navigate = (status) => {
    if (status === 'success') {
      // this.props.navigation.navigate('Feed');
      this.props.navigation.navigate('Feed');
    } else if (status === 'noUsername') {
      this.props.navigation.navigate('AddUsername');
    } else {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <AppLoading />
    );
  }
}

export default Auth;
