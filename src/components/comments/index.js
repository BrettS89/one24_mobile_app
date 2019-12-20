import React from 'react';
import View from './view';

class Comments extends React.Component {
  componentDidMount() {
    this.props.actions.getComments();
  }

  addComment = comment => {
    this.props.actions.addComment({ comment });
  };

  render() {
    return (
      <View
        comments={this.props.state.comments}
      />
    );
  }
}

export default Comments;
