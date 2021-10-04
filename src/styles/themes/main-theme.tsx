import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components/macro';

export const mainTheme: DefaultTheme = {
  palette: {
    primary: {
      default: '#000000',
      p700: '#1A1A1A',
    },
    secondary: {
      default: '#FFFFFF',
      s200: '#F7F7F7',
      s300: '#D6D6D6',
      s500: '#737373',
    },
    success: {
      s300: '#006611',
    },
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default Theme;
