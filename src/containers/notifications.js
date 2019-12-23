import Notifications from '../components/notifications';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as notificationsActions from '../redux/actions/notifications';

function mapStateToProps({ notifications: { notifications } }) {
  return {
    state: {
      notifications
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...notificationsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
