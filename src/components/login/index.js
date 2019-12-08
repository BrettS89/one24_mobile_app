import React from 'react';
import View from './view';
import { SplashScreen } from 'expo';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  componentDidMount() {
    SplashScreen.hide();
  }

  onTextChange = (val, type) => {
    this.setState({ [type]: val });
  };

  onLogin = () => {
    this.props.actions.onLogin({ form: this.state, navigate: this.navigate });
  };

  navigate = () => {
    this.props.navigation.navigate('Feed');
  };

  goRegister = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View
        onTextChange={this.onTextChange}
        onLogin={this.onLogin}
        error={this.props.state.user.loginError}
        goRegister={this.goRegister}
      />
    );
  }
}

export default Login;
