import Comments from '../components/comments';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../redux/actions/comments';
import * as commentsActions from '../redux/actions/comments';

function mapStateToProps({ comments: { comments } }) {
  return {
    state: {
      comments,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...commentActions,
    ...commentsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
