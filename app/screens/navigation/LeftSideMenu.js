import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Drawer, withTheme, Text, Divider} from 'react-native-paper';
import {Menus} from '../../navigation/routes';
import config from '../../../app.json';
import {i18n} from '../../service/localization';

class LeftSideMenu extends React.Component{
  _header() {
    const {theme} = this.props;
    return (
      <View style={styles.header}>

        <Text style={{color: theme.colors.accent}}>{config.expo.name.toUpperCase()}</Text>
      </View>
    )
  }

  _menu() {
    const {navigation} = this.props;
    return Menus.Anonymous(this.props.tab).map(item => (
      <Drawer.Item
        label={i18n.value(item.label)}
        onPress={() => this.props.navigation.navigate(item.id)}
        key={item.id}
        icon={item.icon}
        style={styles.row}/>
    ))
  }

  render() {
    const {theme} = this.props;
    return (
      <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
        {this._header()}
        <Divider/>
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
  },
  row: {
    paddingVertical: 3,
    paddingLeft: 10
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  }
});

export default withTheme(LeftSideMenu);
