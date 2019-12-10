import FindUsers from '../components/findUsers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function mapStateToProps({ users: { users } }) {
  return {
    state: {
      users,
    },
  };
}

export default connect(mapStateToProps)(FindUsers);
