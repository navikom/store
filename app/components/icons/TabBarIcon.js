import React from 'react';
import { Icon } from 'expo';
import {withTheme} from 'react-native-paper';

export class TabBarIcon extends React.Component {
  render() {
    const {theme, name, focused} = this.props
    return (
      <Icon.Ionicons
        name={name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? theme.colors.tabIconSelected : theme.colors.tabIconDefault}
      />
    );
  }
}

export default withTheme(TabBarIcon);
