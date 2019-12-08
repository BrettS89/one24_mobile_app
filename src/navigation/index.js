import React from 'react';
import { View, Text } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import colors from '../shared/styles/colors';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Foundation';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

// auth
import Login from '../containers/login';
import Register from '../containers/register';
import Auth from '../containers/auth';

// main
import Feed from '../containers/feed';

const mainNav = createBottomTabNavigator({
  Feed: {
    screen: createStackNavigator({
      Feed: {
        screen: Feed,
        navigationOptions: {
          headerLeft: <View><Text>Feed</Text></View>,
        },
      },
    }),
    navigationOptions: {
      title: 'Find Hunt',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="map-search-outline" size={28} color={tintColor}/>
      )
    }
  },
},
{
  tabBarOptions: {
    showIcon: true,
    activeTintColor: colors.main,
    style: {
      paddingVertical: 4,
    }
  },
});

const authNav = createBottomTabNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      title: 'Auth',
      activeTintColor: colors.main,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      title: 'Register',
      activeTintColor: colors.main,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
      activeTintColor: colors.main,
    },
  },
},
{
  tabBarOptions: {
    activeTintColor: colors.main,
    style: {
      display: 'none'
    },
    // initialRouteName: 'Login'
  },
});

const rootNavigator = createSwitchNavigator({
  Auth: authNav,
  // NoBottomNav: noBottomNav,
  Main: mainNav,
}, {
  initialRouteName: 'Auth',
});

export default createAppContainer(rootNavigator);
