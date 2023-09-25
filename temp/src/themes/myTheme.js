import { createTheme } from '@mui/material/styles';

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#23429C',
    },
    secondary: {
      main: '#FF6F61',
    },
    background: {
      default: '#F9FAFC',
    },
    text: {
      primary: '#23429C',
    },
  },
  // Add other theme properties as needed
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#2A2A2A',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  // Add other theme properties as needed
});
