import AddProfilePhoto from '../components/addProfilePhoto';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../redux/actions/app';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...appActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapDispatchToProps)(AddProfilePhoto);
