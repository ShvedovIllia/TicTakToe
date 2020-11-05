import {ThemeProps} from 'styled-components';
import * as styledComponents from 'styled-components/native';

import {theme, ITheme} from './theme';

const {
  default: styled,
  css,
  withTheme,
  ThemeProvider,
} = (styledComponents as unknown) as styledComponents.ReactNativeThemedStyledComponentsModule<
  ITheme
>;

export type IThemeProps = ThemeProps<ITheme>;
export {styled, css, ThemeProvider, withTheme, theme};
