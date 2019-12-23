import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import Back from 'react-native-vector-icons/Ionicons';

function headerBack(props) {
  const goBack = () => {
    props.navigation.navigate(props.state.prevScreen);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={goBack}>
      <Back name="ios-arrow-round-back" size={40} />
    </TouchableOpacity>
  );
}

function mapStateToProps({ app: { prevScreen } }) {
  return {
    state: {
      prevScreen,
    },
  };
}

export default connect(mapStateToProps)(withNavigation(headerBack));

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 15,
  }
});
