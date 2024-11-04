'use client';

import { generateColors } from '@mantine/colors-generator';
import { Button, colorsTuple, createTheme, DEFAULT_THEME, DefaultMantineColor, MantineColorsTuple, CSSVariablesResolver, Container } from '@mantine/core';
import { cx } from './functions';
//import { GilroyFont } from '@/utils/GilroyFont';
import classes from './styles.module.css';

type ExtendedCustomColors =
  | 'primaryColorName'
  | 'secondaryColorName'
  | DefaultMantineColor;

export const theme = createTheme({
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  //fontFamily: `${GilroyFont.style.fontFamily}`,
  //primaryColor: 'Gilroy-blue',
  //primaryShade: 7,
  colors: {
    'my-blue': colorsTuple('#054ada'),
    'my-dark-blue': colorsTuple('#003FC1'),
    'my-orange': colorsTuple('#ff8800'), // rgb(255,136,0)
    'white-transparent': colorsTuple('rgba(255, 255, 255, 0.6)'),
    silver: colorsTuple('#EFEFEF'),
    myPurple: colorsTuple('#E500C3'),
    'error-red': generateColors('#C84545'),
    // 'my-blue': ['#00ff00', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000', '#ff0000'],
  },
  other: { /* custom variables for any style attribute, including color */
    GilroyOrange: '#ff8800',
    whiteTransparent: 'rgba(255, 255, 255, 0.6)',
    deepOrangeLight: '#E17900',
    myCyan: '#66d9e8',
    fontRoboto: 'Georgia, serif'
  },
  defaultRadius: 2,
  components: {
  // Button: Button.extend({
  // classNames: classes,
  // }),
  // https://mantine.dev/core/container/
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === 'responsive' }),
      }),
    }),
  },
  headings: {
    // Use default theme if you want to provide default Mantine fonts as a fallback
    // fontFamily: `${GilroyFont.style.fontFamily}, ${DEFAULT_THEME.fontFamily}`,
    // fontFamily: `${GilroyFont.style.fontFamily}`,

    // https://mantine.dev/theming/typography/#h1-h6-styles
    sizes: {
      h1: {
        // fontWeight: '100',
        fontSize: '20px',
        lineHeight: '1.4',
      },
    }
  },
});

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--mantine-color-deep-orange': theme.other.deepOrangeLight,
    '--mantine-color-my-cyan': theme.other.myCyan,
    '--mantine-font-roboto': theme.other.fontRoboto,
  },
  light: {},
  dark: {},
});
