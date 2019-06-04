import React from 'react';
import {View, StyleSheet, Image, I18nManager} from 'react-native';
import {i18n} from '../../service/localization';
import {withTheme, Title, Divider, Switch} from 'react-native-paper';
import {Select} from '../../components/dropDown';
import {MainContext} from '../../contexts';
import {SETTINGS_SCREEN} from '../../constants';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  state = {
    languageVisible: false,
    languageSelected: i18n.locale
  };

  _onLanguageSelected = (cb, lg) => {
    cb(lg);
    this.setState({languageVisible: false});
    this.props.navigation.navigate(SETTINGS_SCREEN);
  };

  _renderLanguageIcon() {
    return (
      <Image style={styles.image} source={i18n.flags[this.state.languageSelected]}/>
    )
  }

  render() {
    const {languageVisible} = this.state;

    return (
      <MainContext.Consumer>
        {
          ({changeLocale, rtl, toggleRTL, toggleTheme, isDark, theme, tabLabel, toggle}) => {
            return (
            <View style={[styles.screen, {backgroundColor: theme.colors.background}]}>
              <Divider/>
              <View style={[styles.row]}>
                <Title>{i18n.value('Language')}</Title>
                <Select
                  visible={languageVisible}
                  selected={this._renderLanguageIcon()}
                  anchorPress={() => this.setState({languageVisible: true})}
                  onDismiss={() => this.setState({languageVisible: false})}
                  items={Object.keys(i18n.flags)}
                  onSelected={value => this._onLanguageSelected(changeLocale, value)}
                />
              </View>
              <View style={styles.row}>
                <Title>{i18n.value('RTL')}</Title>
                <Switch value={rtl} onValueChange={toggleRTL}/>
              </View>
              <View style={styles.row}>
                <Title>{i18n.value('DarkTheme')}</Title>
                <Switch value={isDark} onValueChange={toggleTheme}/>
              </View>
              <View style={styles.row}>
                <Title>{i18n.value('TabLabels')}</Title>
                <Switch value={tabLabel} onValueChange={() => toggle('tabLabel')}/>
              </View>
              <Divider/>
            </View>
          )}
        }
      </MainContext.Consumer>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  image: {
    width: 40,
    height: 25
  }
});

export default withTheme(SettingsScreen);
