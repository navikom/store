import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {DrawerActions} from 'react-navigation';
import {i18n} from '../../service/localization';
import {withMainContext} from '../../contexts';

class Header extends React.Component{
  _renderLeft() {
    const {headerProps, navigation} = this.props;
    let options = headerProps.scene.descriptor.options;
    if(options.left === null) return null;

    const active = headerProps.scenes.filter(f => f.isActive)[0];
    if(active.index > 0) {
      return <Appbar.BackAction onPress={() => navigation.goBack()}/>
    }
    return <Appbar.Action icon='menu' onPress={navigation.openDrawer} />;
  }

  _renderTitle() {
    const {headerProps} = this.props;
    let options = headerProps.scene.descriptor.options;
    if(!options.title) return null;
    if(options.subTitle) {
      return <Appbar.Content title={i18n.value(options.title)} subtitle={options.subTitle}/>
    }
    return <Appbar.Content title={i18n.value(options.title)}/>
  }

  _renderSearch() {
    return <Appbar.Action icon='search' onPress={() => {}} />
  }

  _renderRest() {
    return <Appbar.Action icon='more-vert' onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} />
  }

  render() {
    const {context, headerProps} = this.props;
    const {theme} = context;
    let options = headerProps.scene.descriptor.options;
    if(options.header === null) return null;
    return <Appbar.Header style={[styles.screen, {backgroundColor: theme.colors.background}]}>
      {this._renderLeft()}
      {this._renderTitle()}
      {this._renderSearch()}
      {this._renderRest()}
    </Appbar.Header>
  }
}

const styles = StyleSheet.create({
  screen: {
    elevation: 0,       //remove shadow on Android
    shadowOpacity: 0,   //remove shadow on iOS
    shadowColor: 'transparent',
    borderBottomWidth: 0
  }
});
export default withMainContext(Header);
