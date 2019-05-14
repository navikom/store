import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';

class Catalog extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Catalog',
    right: true,
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
    flex: 1,
  }
});

export default withTheme(Catalog);
