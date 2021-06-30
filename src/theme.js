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
      height: '100%',
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'center',
      backgroundColor: 'background',
    },
    // @theme-ui/components
    Layout: {
      flex: '1 1 auto',
      display: 'flex',
    },
    Header: {
      width: '100%',
    },
    Main: {
      position: 'relative',
    },
    Container: {
      width: '100%',
      maxWidth: '72em',
      display: 'flex',
      flexDirection: 'column',
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
      fontFamily: 'text',
      fontSize: 2,
      color: 'text',
    },
  },
  layout: {
    square: {
      display: 'flex',
      width: '100%',
      height: 'auto',
      minHeight: '400px',
    },
    fill: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      minWidth: 0,
    },
    portfolio: {
      article: {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 0,
        px: 4,
        py: 5,
      },
      image: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: ['275px', '350px'],
        mb: [2, 0],
        px: [0, 5],
        img: {
          maxHeight: ['250px', 'none'],
        },
      },
    },
    info: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: ['column', 'row'],
      alignItems: 'center',
      justifyContent: 'center',
    },
    nav: {
      display: 'flex',
      flex: 1,
      justifyContent: 'flex-end',
      width: '100%',
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
      textLink: {
        textDecoration: '2px solid underline !important',
        textDecorationColor: 'white',
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
        // lineHeight: ['50px', '80px'],
        lineHeight: '80px',
        margin: 0,
        color: 'inherit',
      },
    },
    about: {
      color: 'secondary',
      fontFamily: 'Ubuntu',
      fontWeight: '800',
      fontSize: ['1.5em', '2.75em'],
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
