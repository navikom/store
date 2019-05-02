import React from 'react';
import {HeaderButton} from '../buttons';

export const HeaderLeftMenu = props => (
  <HeaderButton name='menu' onPress={props.navigation.openDrawer}/>
);
