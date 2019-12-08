import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import Spinner from './spinner';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
});

class LoadingModal extends React.Component {
  render() {
    return (
      <Modal
        transparent 
        visible={this.props.state.loading} 
        animationType="fade"
      >
        <View style={styles.modalContainer}>
          <Spinner />
        </View>
      </Modal>
    );
  }
}

const mapStateToProps = ({ app: { loading } }) => ({
  state: {
    loading,
  },
});

export default connect(mapStateToProps)(LoadingModal);
