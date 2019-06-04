import {Home} from '../screens/main';
import {Loader, Settings} from '../screens/others';
import {Map} from '../screens/map';
import {
  CATALOG_SCREEN,
  HOME_SCREEN,
  LOADER_SCREEN,
  MAP_SCREEN,
  POSTS_SCREEN,
  SEARCH_SCREEN,
  SETTINGS_SCREEN
} from '../constants';
import {Catalog} from '../screens/catalog';
import {Posts} from '../screens/news';
import {Search} from '../screens/search';

const catalogRoutes = [
  {
    id: CATALOG_SCREEN,
    label: 'Catalog',
    screen: Catalog,
    icon: 'shopping-cart'
  }
];

export const profileRoutes = [
  {
    id: HOME_SCREEN,
    label: 'Home',
    screen: Home,
    icon: 'home'
  },
  {
    id: MAP_SCREEN,
    label: 'Map',
    screen: Map,
    icon: 'map'
  },
  {
    id: SETTINGS_SCREEN,
    label: 'Settings',
    screen: Settings,
    icon: 'settings'
  }
];

export const newsRoutes = [
  {
    id: POSTS_SCREEN,
    label: 'Posts',
    screen: Posts,
    icon: 'art-track'
  }
];

const routes = {
  Catalog: catalogRoutes,
  Profile: profileRoutes,
  News: newsRoutes
};

export const Menus = {
  Customer: key => routes[key],
  Anonymous: key => routes[key]
};

export default [
  {
    id: LOADER_SCREEN,
    screen: Loader,
  },
  {
    id: SEARCH_SCREEN,
    screen: Search
  },
  ...catalogRoutes,
  ...profileRoutes,
  ...newsRoutes
];
