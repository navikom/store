import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import {TabBarIcon} from '../components';

import Drawers from './MainDrawerNavigator';

const stackNavigator = props => {
  const stack = createStackNavigator({
    Screen: props.screen,
  }, {
    headerMode: 'none',
  });

  stack.navigationOptions = {
    tabBarLabel: props.label,
    tabBarIcon: ({focused}) => (
      <TabBarIcon
        focused={ focused }
        name={
          Platform.OS === 'ios'
            ? typeof props.icon.ios === 'function' ? props.icon.ios(focused) : props.icon.ios
            : typeof props.icon.android === 'function' ? props.icon.android(focused) : props.icon.android
        }
      />
    )
  };
  return stack;
};

const TabRoutes = Drawers.map(props => stackNavigator(props));

export default createBottomTabNavigator({
  ...TabRoutes
});
