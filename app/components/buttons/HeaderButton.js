import React from 'react';
import {StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {TabBarIcon} from '../icons';


export const HeaderButton = props => (
  <TouchableOpacity style={styles.container} {...props}>
    <TabBarIcon
      focused={true}
      name={Platform.OS === 'ios' ? `ios-${props.name}` : `md-${props.name}`}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
