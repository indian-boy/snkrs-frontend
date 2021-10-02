import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        default: string;
        p700: string;
      };
      secondary: {
        default: string;
        s200: string;
        s300: string;
        s500: string;
      };
      success: {
        s300: string;
      };
    };
  }
}
