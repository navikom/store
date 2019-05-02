import React from 'react';
import {HeaderButton} from '../buttons';
import {DrawerActions} from 'react-navigation';

export const HeaderRightMenu = props => (
  <HeaderButton name='menu' onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}/>
);
