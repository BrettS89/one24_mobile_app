import Login from '../components/login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/user';

function mapStateToProps({ user }) {
  return {
    state: {
      user,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
