import React from 'react';
import {Platform, Text} from 'react-native';
import {createStackNavigator, createBottomTabNavigator, BottomTabBar} from 'react-navigation';

import {TabBarIcon, MonoText} from '../components';

import Drawers from './MainDrawerNavigator';
import {Footer} from '../components/footer';

const stackNavigator = props => {
  const stackItem = createStackNavigator({
    Screen: props.screen,
  }, {
    headerMode: 'none'
  });

  stackItem.navigationOptions = {
    tabBarLabel: labelProps => <MonoText {...labelProps} text={props.label}/>,
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
  return stackItem;
};


const TabRoutes = Drawers.reduce((tabs, props) => {
  tabs[props.label] = stackNavigator(props);
  return tabs;
}, {});


export default createBottomTabNavigator({
    ...TabRoutes
  },
  {
    tabBarComponent: props => <Footer {...props}/>,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true
  });

