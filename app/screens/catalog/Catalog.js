import React from 'react';
import {View, StyleSheet} from 'react-native';
import {withTheme} from 'react-native-paper';
import {HeaderLeftMenu, HeaderRightMenu, Title} from '../../components/header';
import {i18n} from '../../service';

class Catalog extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: <Title text={i18n.value('Catalog')} />,
    headerLeft: <HeaderLeftMenu navigation={navigation}/>,
    headerRight: <HeaderRightMenu navigation={navigation}/>,
  });
  render() {
    return (
      <View style={styles.screen}/>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default withTheme(Catalog);
