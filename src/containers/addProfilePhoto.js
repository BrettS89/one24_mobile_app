import AddProfilePhoto from '../components/addProfilePhoto';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../redux/actions/app';
import * as userActions from '../redux/actions/user';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...appActions,
    ...userActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AddProfilePhoto);
