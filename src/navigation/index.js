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
import Add from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/Foundation';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

// auth
import Login from '../containers/login';
import Register from '../containers/register';
import Auth from '../containers/auth';

// main
import Feed from '../containers/feed';
import AddPost from '../containers/addPost';

const mainNav = createBottomTabNavigator({
  Feed: {
    screen: createStackNavigator({
      Feed: {
        screen: Feed,
        navigationOptions: {
          headerLeft: <View style={{ paddingHorizontal: 15 }}><Text style={{ fontWeight: '700', color: colors.main, fontSize: 22 }}>Daily</Text></View>,
        },
      },
    }),
    navigationOptions: {
      title: 'Feed',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="message-bulleted" size={28} color={tintColor}/>
      )
    }
  },
  AddPost: {
    screen: createStackNavigator({
      AddPost: {
        screen: AddPost,
        navigationOptions: {
          headerLeft: <View style={{ paddingHorizontal: 15 }}><Text style={{ fontWeight: '700', color: colors.main, fontSize: 22 }}>Baller app</Text></View>,
        },
      },
    }),
    navigationOptions: {
      title: 'Add Post',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Add name="marker" size={20} color={tintColor}/>
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
