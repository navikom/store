import React from 'react';
import {Text} from 'react-native'
import {BottomTabBar} from 'react-navigation';
import {withMainContext} from '../../contexts';

const Footer = props => {
  const {context, ...rest} = props;
  console.log(rest)
  return <BottomTabBar style={{backgroundColor: context.theme.colors.background}} {...rest}/>;
};

export default withMainContext(Footer);
