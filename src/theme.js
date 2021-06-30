/** @jsx jsx */

import { Global } from '@emotion/core';
import { memo, createElement } from 'react';
import { jsx, useThemeUI, ThemeProvider, Styled } from 'theme-ui';
import { deep } from '@theme-ui/presets';

const Reset = () =>
  createElement(Global, {
    styles: {
      '*': { boxSizing: 'border-box' },
      body: { margin: '0' },
      a: { color: 'inherit' },
      img: {
        maxWidth: '100%',
      },
    },
  });

const theme = {
  ...deep,
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    text: 'Ubuntu',
    heading: 'Passion One',
  },
  styles: {
    ...deep.styles,
    root: {
      display: 'flex',
      flex: '1 1 auto',
      backgroundColor: 'background',
      fontFamily: 'text'
    },
    // @theme-ui/components
    Layout: {
      flex: '1 1 auto',
    },
    Header: {
      width: '100%',
    },
    Main: {},
    Container: {
      maxWidth: '72em',
      py: 0,
    },
    Footer: {
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    // native web elements
    ol: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    li: {
      display: 'inline-block',
    },
    h1: {
      color: 'secondary',
    },
    h4: {
      color: 'text',
      fontWeight: '200',
    },
    p: {
      fontSize: 2,
      color: 'text',
    },
  },
  layout: {
    portfolio: {
      article: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: ['column', 'row'],
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 0,
        px: 4,
        py: 5,
      },
      image: {
        mr: 4,
        img: {
          maxHeight: ['300px', '500px'],
        },
      },
    },
    nav: {
      ml: 'auto',
      py: 3,
    },
  },
  text: {
    portfolio: {
      title: {
        ...deep.styles.h1,
        color: 'highlight',
        m: 0,
      },
      platform: {
        ...deep.styles.h2,
        color: 'muted',
        m: 0,
      },
      url: {
        ...deep.styles.h3,
        m: 0,
      },
    },
    hero: {
      title: {
        fontSize: ['1.05em', '1.2em'],
        fontWeight: '800',
        textTransform: 'uppercase',
        lineHeight: '80px',
        color: 'inherit',
        margin: 0,
      },
    },
    about: {
      color: 'secondary',
      fontFamily: 'Ubuntu',
      fontWeight: '800',
      fontSize: ['2.0em', '2.75em'],
      m: 0,
    },
    link: {
      fontSize: 2,
      fontFamily: 'text',
      color: 'primary',
    },
  },
  icon: {
    display: 'block',
    width: 25,
    height: 25,
  },
};

const CustomThemeProvider = memo(({ children, ...props }) => (
  <ThemeProvider theme={theme} {...props}>
    <Reset />
    <Styled.root>{children}</Styled.root>
  </ThemeProvider>
));

export { theme, useThemeUI as useTheme, CustomThemeProvider as default };
