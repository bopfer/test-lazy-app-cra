import * as styledComponents from 'styled-components';

interface ITheme {
  primary: string;
  background: string;
}

const lightTheme: ITheme = {
  primary: '#000',
  background: '#fff'
};

const darkTheme: ITheme = {
  primary: 'fff',
  background: '#000'
};

const themes: Record<string, ITheme> = {
  dark: darkTheme,
  light: lightTheme
};

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

export {
  styled,
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
  themes
};
