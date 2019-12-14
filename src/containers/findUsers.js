import FindUsers from '../components/findUsers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/user';
import * as usersActions from '../redux/actions/users';

function mapStateToProps({ users: { users } }) {
  return {
    state: {
      users,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...userActions,
    ...usersActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(FindUsers);
