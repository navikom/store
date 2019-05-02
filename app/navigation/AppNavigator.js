import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import {Loader} from '../screens';

const App = createStackNavigator({
  First: {
    screen: Loader
  },
  Home: MainTabNavigator,
}, {
  headerMode: 'none',
});

export default createAppContainer(App);
