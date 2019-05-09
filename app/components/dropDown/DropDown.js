import React from 'react';
import {Button, Menu} from 'react-native-paper';

export const Select = props => (
  <Menu
    {...props}
    anchor={<Button onPress={props.anchorPress}>{props.selected}</Button>}
  >
    {
      props.items.map((item, i) => (
        <Menu.Item key={i} title={item} onPress={() => props.onSelected(item)}/>
      ))
    }
  </Menu>
);
