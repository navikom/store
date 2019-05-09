import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {HeaderLeftMenu, HeaderRightMenu, Title} from '../../components';
import {i18n} from '../../service';
import {withTheme} from 'react-native-paper';

class Home extends React.Component {
  static navigationOptions = (props) => {
    return {
      headerTitle: <Title text='Home' />,
      headerLeft: <HeaderLeftMenu navigation={props.navigation}/>,
      headerRight: <HeaderRightMenu navigation={props.navigation}/>
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
});


export default withTheme(Home)
