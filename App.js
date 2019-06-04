import React from 'react';
import {Platform, StatusBar, StyleSheet, SafeAreaView, I18nManager, AsyncStorage} from 'react-native';
import {AppLoading, Asset, Font, Icon, Updates} from 'expo';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './app/navigation/AppNavigator';
import {MainContext} from './app/contexts';
import * as themes from './app/config/theme';
import {i18n} from './app/service/localization';
import {DARK_THEME, LIGHT_THEME} from './app/constants';

const getStorageValue = (array, key) => array.filter(f => f[0] === key)[0][1] === key;

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingComplete: false,
      theme: themes[LIGHT_THEME],
      rtl: false,
      isDark: false,
      locale: i18n.locale,
      toggleTheme: this._toggleTheme,
      toggleRTL: this._toggleRTL,
      changeLocale: this._changeLocale,
      toggle: this._toggle,
      currentScreen: null,
      tabLabel: true
    };
  }

  async componentWillMount() {
    const settings = await AsyncStorage.multiGet(['rtl', 'isDark']);
    const rtl = getStorageValue(settings, 'rtl');
    const isDark = getStorageValue(settings, 'isDark');
    this.setState(
      {rtl, isDark, theme: themes[isDark ? DARK_THEME : LIGHT_THEME]},
      () => {
        I18nManager.forceRTL(rtl);
      });
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./app/assets/images/robot-dev.png'),
        require('./app/assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        'Righteous-Regular': require('./app/assets/fonts/Righteous-Regular.ttf'),
        'Roboto-Bold': require('./app/assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Medium': require('./app/assets/fonts/Roboto-Medium.ttf'),
        'Roboto-Regular': require('./app/assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Light': require('./app/assets/fonts/Roboto-Light.ttf')
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true});
  };

  _toggleTheme = value => {
    const key = value ? DARK_THEME : LIGHT_THEME;
    this.setState({theme: themes[key], isDark: value});
    AsyncStorage.setItem('isDark', key === DARK_THEME ? 'isDark' : 'none');
  };

  _toggleRTL = () => {
    this.setState(
      {rtl: !this.state.rtl},
      () => {
        I18nManager.forceRTL(this.state.rtl);
        AsyncStorage.setItem('rtl', this.state.rtl ? 'rtl' : 'none');
        Updates.reload();
      });

  };

  _changeLocale = locale => {
    i18n.setLocale(locale);
    this.setState({locale});
  };

  _toggle = key => {
    this.setState({[key]: !this.state[key]});
  };

  render() {
    const {theme} = this.state;
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={ this._loadResourcesAsync }
          onError={ this._handleLoadingError }
          onFinish={ this._handleFinishLoading }
        />
      );
    } else {
      return (
        <SafeAreaView style={ [styles.container, {backgroundColor: theme.colors.background}] }>
          { Platform.OS === 'ios' && <StatusBar barStyle="default"/> }
          <PaperProvider theme={theme}>
            <MainContext.Provider value={this.state}>
              <AppNavigator
                onNavigationStateChange={ (prevState, currentState, action) => {
                  const currentScreen = getCurrentRouteName(currentState);
                  const prevScreen = getCurrentRouteName(prevState);
                  currentScreen !== prevScreen && this.setState({currentScreen});
                } }
              />
            </MainContext.Provider>
          </PaperProvider>
        </SafeAreaView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
