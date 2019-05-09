import {DarkTheme, DefaultTheme} from 'react-native-paper';

const MainTheme = {
  colors: {
    blue: '#007bff',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#e83e8c',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#28a745',
    teal: '#20c997',
    cyan: '#17a2b8',
    white: '#fff',
    gray: '#6c757d',
    grayDark: '#343a40',
    primary: '#08c',
    secondary: '#6c757d',
    success: '#47a447',
    info: '#5bc0de',
    warning: '#ed9c28',
    danger: '#d2322d',
    light: '#f8f9fa',
    dark: '#1d2127',
    text: '#323232'
  },
  border: {
    base: '#cccccc'
  },
  fonts: {
    light: "Roboto-Regular",
    medium: "Roboto-Bold",
    regular: "Roboto-Medium",
    thin: "Roboto-Light"
  }
};

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...MainTheme.colors,
    tabIconSelected: MainTheme.colors.primary,
    tabIconDefault: '#b3b3b3'
  },
  fonts: {
    ...MainTheme.fonts
  }
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...MainTheme.colors,
    tabIconSelected: MainTheme.colors.primary,
    tabIconDefault: '#b3b3b3'
  },
  fonts: {
    ...MainTheme.fonts
  }
};
