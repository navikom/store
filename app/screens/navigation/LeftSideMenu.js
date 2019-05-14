import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Drawer, withTheme, Text, Divider} from 'react-native-paper';
import {Menus} from '../../navigation/routes';
import config from '../../../app.json';
import {i18n} from '../../service/localization';
import {withMainContext} from '../../contexts';

class LeftSideMenu extends React.Component{
  _header() {
    const {context} = this.props;
    return (
      <View style={styles.header}>

        <Text style={{color: context.theme.colors.accent}}>{config.expo.name.toUpperCase()}</Text>
      </View>
    )
  }

  _menu() {
    const {activeItemKey} = this.props;
    return Menus.Anonymous(this.props.tab).map(item => (
      <Drawer.Item
        active={activeItemKey === item.id}
        label={i18n.value(item.label)}
        onPress={() => this.props.navigation.navigate(item.id)}
        key={item.id}
        icon={item.icon}
        style={styles.row}/>
    ))
  }

  render() {
    const {context} = this.props;
    return (
      <View style={[styles.container, {backgroundColor: context.theme.colors.background}]}>
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

export default withMainContext(LeftSideMenu);
