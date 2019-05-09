import React from 'react';
import {StyleSheet, View} from 'react-native';
import {i18n} from '../../service/localization';
import {HeaderLeftMenu, HeaderRightMenu, Title} from '../../components/header';

export class Posts extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: <Title text='Posts' />,
    headerLeft: <HeaderLeftMenu navigation={navigation}/>,
    headerRight: <HeaderRightMenu navigation={navigation}/>
  });
  render() {
    return (
      <View style={styles.screen}/>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
