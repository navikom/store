import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Colors from '../../constants/Colors';

export class Loader extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      clearInterval(this.interval);
      this._navigate();
    }, 1000)
  }

  _navigate() {
    const screen = 'Home';
    let toHome = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: screen})]
    });
    this.props.navigation.dispatch(toHome);
  }
  render() {
    return (
      <View style={[styles.container, styles.center]}>
        <Text>Loader</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen.base
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
