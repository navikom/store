import React from 'react';
import {HeaderButton} from '../buttons';

export const HeaderLeftMenu = props => (
  <HeaderButton name='menu' onPress={() => console.log('pressed left')}/>
);
