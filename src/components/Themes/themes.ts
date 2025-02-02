import {
  RaThemeOptions,
  defaultDarkTheme,
  defaultLightTheme,
  houseDarkTheme,
  houseLightTheme,
  nanoDarkTheme,
  nanoLightTheme,
  radiantDarkTheme,
  radiantLightTheme,
} from 'react-admin';

import { chiptuneTheme } from './chiptunerTheme';
import { softDarkTheme, softLightTheme } from './softTheme';

export type ThemeName =
  | 'soft'
  | 'default'
  | 'nano'
  | 'radiant'
  | 'house'
  | 'chiptune';

export interface Theme {
  name: ThemeName;
  light: RaThemeOptions;
  dark?: RaThemeOptions;
}

export const themes: Theme[] = [
  { name: 'soft', light: softLightTheme, dark: softDarkTheme },
  { name: 'default', light: defaultLightTheme, dark: defaultDarkTheme },
  { name: 'nano', light: nanoLightTheme, dark: nanoDarkTheme },
  { name: 'radiant', light: radiantLightTheme, dark: radiantDarkTheme },
  { name: 'house', light: houseLightTheme, dark: houseDarkTheme },
  { name: 'chiptune', light: chiptuneTheme },
];
