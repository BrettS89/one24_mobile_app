import React from 'react';
import View from './view';

class Comments extends React.Component {
  state = {
    comment: '',
  };

  componentDidMount() {
    this.props.actions.getComments();
  }

  addComment = () => {
    this.props.actions.addComment({ comment: this.state.comment });
  };

  onTextChange = text => {
    this.setState({ comment: text });
  };

  render() {
    return (
      <View
        comments={this.props.state.comments}
        addComment={this.addComment}
        onTextChange={this.onTextChange}
      />
    );
  }
}

export default Comments;
