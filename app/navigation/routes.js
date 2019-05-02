import {HomeScreen, LinksScreen, SettingsScreen} from '../screens/main';
import {Loader} from '../screens/others';
import {Map} from '../screens/map';
import {HOME_SCREEN, LINKS_SCREEN, LOADER_SCREEN, MAP_SCREEN, SETTINGS_SCREEN} from '../constants';

export const routes = [
  {
    id: HOME_SCREEN,
    label: 'Home',
    screen: HomeScreen,
    icon:  {
      ios: focused => `ios-information-circle${focused ? '' : '-outline'}`,
      android: 'md-information-circle'
    }
  },
  {
    id: LINKS_SCREEN,
    label: 'Links',
    screen: LinksScreen,
    icon:  {
      ios: 'ios-link',
      android: 'md-link'
    }
  },
  {
    id: SETTINGS_SCREEN,
    label: 'Settings',
    screen: SettingsScreen,
    icon:  {
      ios: 'ios-options',
      android: 'md-options'
    }
  },
  {
    id: MAP_SCREEN,
    label: 'Map',
    screen: Map,
    icon:  {
      ios: 'ios-map',
      android: 'md-map'
    }
  }
];

export const Menus = {
  Customer: routes,
  Anonymous: routes
};

export default [
  {
    id: LOADER_SCREEN,
    screen: Loader,
  },
  ...routes
];
