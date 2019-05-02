import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

export class RightSideMenu extends React.Component{

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <Text>Right Menu</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
