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
import UserIcon from 'react-native-vector-icons/FontAwesome5';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchIcon from 'react-native-vector-icons/FontAwesome5';

import Logo from '../shared/components/logo';
import UserSearchBar from '../components/_misc/userSearchBar';
import PostSearchBar from '../components/_misc/postSearchBar';
import ProfileLink from '../components/_misc/profileLink';

// auth
import Login from '../containers/login';
import Register from '../containers/register';
import Auth from '../containers/auth';

// main
import Feed from '../containers/feed';
import AddPost from '../containers/addPost';
import FindUsers from '../containers/findUsers';
import Discover from '../containers/discover';
import MyProfile from '../containers/myProfile';

const mainNav = createBottomTabNavigator({
  Feed: {
    screen: createStackNavigator({
      Feed: {
        screen: Feed,
        navigationOptions: {
          headerLeft: <Logo />,
          headerRight: <ProfileLink />,
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
  Discover: {
    screen: createStackNavigator({
      Discover: {
        screen: Discover,
        navigationOptions: {
          headerLeft: <PostSearchBar />,
          headerRight: <ProfileLink />,
        },
      },
    }),
    navigationOptions: {
      title: 'Discover',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <UserIcon name="search" size={24} color={tintColor}/>
      )
    }
  },
  AddPost: {
    screen: createStackNavigator({
      AddPost: {
        screen: AddPost,
        navigationOptions: {
          headerLeft: <Logo />,
          headerRight: <ProfileLink />,
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
  FindUsers: {
    screen: createStackNavigator({
      FindUsers: {
        screen: FindUsers,
        navigationOptions: {
          headerLeft: <UserSearchBar />,
          headerRight: <ProfileLink />,
        },
      },
    }),
    navigationOptions: {
      title: 'Users',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <UserIcon name="users" size={24} color={tintColor}/>
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

const noBottomNav = createBottomTabNavigator({
  MyProfile: {
    screen: createStackNavigator({
      MyProfile: {
        screen: MyProfile,
        navigationOptions: {

        },
      },
    }),
    navigationOptions: {
      title: 'Profile',
      activeTintColor: colors.main,
      tabBarIcon: ({ tintColor }) => (
        <Icon2 name="message-bulleted" size={28} color={tintColor}/>
      )
    }
  },
},
{
  tabBarOptions: {
    showIcon: true,
    activeTintColor: colors.main,
    style: {
      display: 'none',
    }
  },
});

const rootNavigator = createSwitchNavigator({
  Auth: authNav,
  NoBottomNav: noBottomNav,
  Main: mainNav,
}, {
  initialRouteName: 'Auth',
});

export default createAppContainer(rootNavigator);
