import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MapView, Location, Permissions} from 'expo';

export class Map extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    this.setState({mapRegion});
  };

  _getLocationAsync = async () => {
    let {status} = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({hasLocationPermissions: true});
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({locationResult: JSON.stringify(location)});

    // Center the map on the location we just fetched.
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    });
  };

  render() {
    return (
      <View style={ styles.container }>
        {
          this.state.locationResult === null ?
            <Text>Finding your current location...</Text> :
            this.state.hasLocationPermissions === false ?
              <Text>Location permissions are not granted.</Text> :
              this.state.mapRegion === null ?
                <Text>Map region doesn't exist.</Text> :
                <MapView
                  style={ {alignSelf: 'stretch', height: '100%'} }
                  region={ this.state.mapRegion }
                  onRegionChange={ this._handleMapRegionChange }
                >
                  <MapView.Marker
                    coordinate={ this.state.mapRegion }
                  />
                </MapView>
        }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
