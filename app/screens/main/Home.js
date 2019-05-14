import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {withTheme} from 'react-native-paper';

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Home',
      right: true
    }
  };

  render() {
    const {theme} = this.props;
    return (
      <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
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
