import { ThemeProvider } from 'styled-components';
import { mainTheme } from './main-theme';

const ThemeProviderWrapper = ({ children }) => {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
