import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Next from 'react-native-vector-icons/Ionicons';
import colors from '../../shared/styles/colors';
import * as userActions from '../../redux/actions/user';

function addUsernameHeader(props) {

  const next = () => {
    props.actions.addUsername(navigate);
  };

  const navigate = () => {
    props.navigation.navigate('AddProfilePhoto');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={next}>
      <Text style={styles.finishText}>
        Next
      </Text>
      <Next name="ios-arrow-round-forward" size={40} color={colors.main} style={styles.icon} />
    </TouchableOpacity>
  );
}

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...userActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(withNavigation(addUsernameHeader));

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  finishText: {
    color: colors.main,
    fontWeight: '700',
    fontSize: 18,
    marginRight: 5,
  },
  icon: {
    paddingTop: 2,
  }
});
