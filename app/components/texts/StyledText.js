import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, withTheme} from 'react-native-paper';
import {i18n} from '../../service/localization';
import {withMainContext} from '../../contexts';

export class MonoText extends React.Component {
  render() {
    const {context, focused, text} = this.props;
    if(!context.tabLabel) return null;
    return <Text
      style={[styles.text, {color: focused ? context.theme.colors.tabIconSelected : context.theme.colors.tabIconDefault}]}>
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

export default withMainContext(MonoText);
