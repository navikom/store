import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {I18nManager} from 'react-native';
import routes, {newsRoutes, profileRoutes} from './routes';
import {CATALOG_SCREEN, HOME_SCREEN, POSTS_SCREEN} from '../constants';
import {LeftSideMenu, RightSideMenu} from '../screens';
import Layout from '../constants/Layout';
import {Header} from '../components';

let flatRoutes = routes.reduce((routes, route) => {
  routes[route.id] = route;
  return routes;
}, {});

const stackNavigator = props => {
  const stack = createStackNavigator(flatRoutes,
    {
      initialRouteName: props.id,
      headerMode: 'screen',
      cardStyle: {backgroundColor: 'transparent'},
      defaultNavigationOptions: ({navigation}) => ({
        header: headerProps => {
          return <Header navigation={ navigation } headerProps={ headerProps }/>
        }
      })
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
      drawerPosition: I18nManager.isRTL ? 'right' : 'left',
      contentComponent: (props) => <LeftSideMenu { ...props } tab={ label }/>,
    });
  return {
    screen: createDrawerNavigator({
      Home: {
        screen: LeftMenu,
      },
    }, {
      drawerPosition: I18nManager.isRTL ? 'left' : 'right',
      drawerOpenRoute: 'RightSideMenu',
      drawerCloseRoute: 'RightSideMenuClose',
      drawerToggleRoute: 'RightSideMenuToggle',
      drawerWidth: Math.min(Layout.window.height, Layout.window.width) * 0.85,
      contentComponent: (props) => <RightSideMenu { ...props } tab={ label }/>,
    }),
    label,
    icon
  }
};

const tabs = [
  {
    initialRouteName: CATALOG_SCREEN,
    index: 1,
    routes: routes.reduce((routes, props) => {
      routes[props.id] = stackNavigator(props);
      return routes;
    }, {}),
    label: 'Catalog',
    icon: {
      ios: 'ios-cart',
      android: 'md-cart'
    },
  },
  {
    initialRouteName: HOME_SCREEN,
    index: 2,
    routes: profileRoutes.reduce((routes, props) => {
      routes[props.id] = stackNavigator(props);
      return routes;
    }, {}),
    label: 'Profile',
    icon: {
      ios: 'ios-person',
      android: 'md-person'
    },
  },
  {
    initialRouteName: POSTS_SCREEN,
    index: 3,
    routes: newsRoutes.reduce((routes, props) => {
      routes[props.id] = stackNavigator(props);
      return routes;
    }, {}),
    label: 'News',
    icon: {
      ios: 'ios-book',
      android: 'md-book'
    },
  }];

export default tabs.map(tab => makeDrawer(tab));
