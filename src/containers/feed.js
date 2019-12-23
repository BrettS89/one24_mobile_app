import Feed from '../components/feed';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../redux/actions/posts';
import * as commentsActions from '../redux/actions/comments';
import * as appActions from '../redux/actions/app';

function mapStateToProps({ posts: { posts } }) {
  return {
    state: {
      posts,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...postsActions,
    ...commentsActions,
    ...appActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
