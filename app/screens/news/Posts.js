import React from 'react';
import {StyleSheet, View} from 'react-native';
import {withTheme} from 'react-native-paper';

class Posts extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Posts',
    right: true
  });
  render() {
    const {theme} = this.props;
    return (
      <View style={[styles.screen, {backgroundColor: theme.colors.background}]}/>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default withTheme(Posts)
