import React from 'react';
import {HeaderButton} from '../buttons';

export const HeaderRightMenu = props => (
  <HeaderButton name='menu' onPress={() => console.log('pressed right')}/>
);
