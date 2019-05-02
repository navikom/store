import React from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Menus} from '../../navigation/routes';
import Colors from '../../constants/Colors';

export class LeftSideMenu extends React.Component{
  _menu() {
    return Menus.Anonymous.map(item => (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate(item.id)}
        key={item.id}
        style={styles.row}>
        <Text>{item.label}</Text>
      </TouchableOpacity>
    ))
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          {this._menu()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.screen.base
  },
  row: {
    paddingVertical: 3,
    paddingLeft: 10
  }
});
