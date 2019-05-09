import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, withTheme} from 'react-native-paper';
import {i18n} from '../../service/localization';

export class MonoText extends React.Component {
  render() {
    const {theme, focused, text} = this.props;
    return <Text
      style={[styles.text, {color: focused ? theme.colors.tabIconSelected : theme.colors.tabIconDefault}]}>
      {i18n.value(text)}
    </Text>;
  }
}

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    fontSize: 12
  }
});

export default withTheme(MonoText);
