import React from 'react';
import {BottomTabBar} from 'react-navigation';
import {withMainContext} from '../../contexts';

const Footer = props => {
  const {context, ...rest} = props;
  return <BottomTabBar style={{backgroundColor: context.theme.colors.background}} {...rest}/>;
};

export default withMainContext(Footer);
