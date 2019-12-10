import AddPost from '../components/addPost';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../redux/actions/post';

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...postActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(AddPost);
