import Discover from '../components/discover';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postsActions from '../redux/actions/posts';
import * as commentsActions from '../redux/actions/comments';

function mapStateToProps({ posts: { discoverPosts } }) {
  return {
    state: {
      posts: discoverPosts,
    },
  };
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...postsActions,
    ...commentsActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
