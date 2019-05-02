import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import routes from './routes';
import {HOME_SCREEN} from '../constants';
import {LeftSideMenu, RightSideMenu} from '../screens';
import Layout from '../constants/Layout';

let flatRoutes = routes.reduce((routes, route) => {
  routes[route.id] = route;
  return routes;
}, {});


const stackNavigator = props => {
  const stack = createStackNavigator(flatRoutes,
    {
      initialRouteName: props.id,
      headerMode: 'screen',
      cardStyle: {backgroundColor: 'transparent'}
    });
  return stack;
};

const makeDrawer = (tab) => {
  const {initialRouteName, routes, label, icon} = tab;
  const LeftMenu = createDrawerNavigator({
      ...routes,
    },
    {
      initialRouteName,
      drawerOpenRoute: 'LeftSideMenu',
      drawerCloseRoute: 'LeftSideMenuClose',
      drawerToggleRoute: 'LeftSideMenuToggle',
      drawerPosition: 'left',
      contentComponent: (props) => <LeftSideMenu { ...props }/>,
    });
  return {
    screen: createDrawerNavigator({
      Home: {
        screen: LeftMenu,
      },
    }, {
      drawerPosition: 'right',
      drawerOpenRoute: 'RightSideMenu',
      drawerCloseRoute: 'RightSideMenuClose',
      drawerToggleRoute: 'RightSideMenuToggle',
      drawerWidth: Math.min(Layout.window.height, Layout.window.width) * 0.85,
      contentComponent: (props) => <RightSideMenu { ...props }/>,
    }),
    label,
    icon
  }
};

const tabs = [{
  initialRouteName: HOME_SCREEN,
  routes: routes.reduce((routes, props) => {
    routes[props.id] = stackNavigator(props);
    return routes;
  }, {}),
  label: 'Products',
  icon: {
    ios: 'ios-cart',
    android: 'md-cart'
  }
},
  {
    initialRouteName: HOME_SCREEN,
    routes: routes.reduce((routes, props) => {
      routes[props.id] = stackNavigator(props);
      return routes;
    }, {}),
    label: 'Profile',
    icon: {
      ios: 'ios-person',
      android: 'md-person'
    }
  },
  {
    initialRouteName: HOME_SCREEN,
    routes: routes.reduce((routes, props) => {
      routes[props.id] = stackNavigator(props);
      return routes;
    }, {}),
    label: 'News',
    icon: {
      ios: 'ios-book',
      android: 'md-book'
    }
  }];

export default tabs.map(tab => makeDrawer(tab));
