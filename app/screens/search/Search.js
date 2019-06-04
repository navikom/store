import React from 'react';
import {View} from 'react-native';
import {withMainContext} from '../../contexts';

class Search extends React.Component {
  static navigationOptions = {
    title: null,
  };
  render() {
    return <View/>
  }
}

export default withMainContext(Search);
