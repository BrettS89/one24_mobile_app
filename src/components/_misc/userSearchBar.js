import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withNavigation } from 'react-navigation';
import * as usersActions from '../../redux/actions/users';
import SearchIcon from 'react-native-vector-icons/FontAwesome5';

class UserSearchBar extends React.Component {
  _onSearch = ({ nativeEvent: { text } }) => {
      this.props.actions.searchUsers(text);
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchIcon name="search" size={26} style={styles.searchIcon} />
        <View>
          <TextInput 
            placeholder="Search for users..."
            onChange={this._onSearch}
            underlineColorAndroid="transparent"
            style={styles.searchText}
          />
        </View>
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
  searchText: {
    fontSize: 18,
  },
  searchIcon: {
    marginRight: 10,
  },
});

function mapDispatchToProps(dispatch) {
  const allActions = {
    ...usersActions,
  };

  return {
    actions: bindActionCreators(allActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(withNavigation(UserSearchBar));