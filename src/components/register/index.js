import React from 'react';
import View from './view';

class Register extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  onTextChange = (val, type) => {
    this.setState({ [type]: val });
  };

  onRegister = () => {
    this.props.actions.onRegister({ form: this.state, navigate: this.navigate});
  };

  navigate = () => {
    this.props.navigation.navigate('Feed');
  };

  toLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View
        onTextChange={this.onTextChange}
        onRegister={this.onRegister}
        error={this.props.state.user.registrationError}
        toLogin={this.toLogin}
      />
    );
  }
}

export default Register;
