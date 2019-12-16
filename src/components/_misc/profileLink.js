import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Gear from 'react-native-vector-icons/Ionicons';
import colors from '.././../shared/styles/colors';

class CitySearchBar extends React.Component {
  _navigateToProfile = () => {
    this.props.navigation.navigate('MyProfile');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={this._navigateToProfile}>
            <Gear name="ios-settings" size={32} color={colors.main}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  backButton: {
    alignItems: 'center',
  },
});

export default withNavigation(CitySearchBar);