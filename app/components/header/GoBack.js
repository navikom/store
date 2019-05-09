import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {TabBarIcon} from '../icons';

export const GoBack = props => {
  return <View style={styles.container}>
    <TabBarIcon
      focused={true}
      name={ Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back' }
    />
  </View>
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
