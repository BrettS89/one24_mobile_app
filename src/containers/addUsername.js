import AddUsername from '../components/addUsername';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/user';

function mapStateToProps({ user: { usernameInput, usernameError } }) {
  return {
    state: {
      username: usernameInput,
      usernameError,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...userActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUsername);
