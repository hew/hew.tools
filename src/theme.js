/** @jsx jsx */

import {Global} from '@emotion/core';
import React, {memo} from 'react';
import {jsx, useThemeUI, ThemeProvider, Styled} from 'theme-ui';
import {deep} from '@theme-ui/presets';

// Some styles are easier to just declare in an actual styles file
import './styles.css';

const theme = {
  ...deep,
  breakpoints: ['40em', '52em', '64em'],
  fonts: {
    text: 'Helvetica Neue',
    heading: 'Passion One'
  },
  styles: {
    ...deep.styles,
    root: {
      height: '100%',
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'center',
    },
    Layout: {
      flex: '1 1 auto',
      display: 'flex',
    },
    Header: {
      width: '100%',
    },
    Main: {
      position: 'relative'
    },
    Container: {
      width: '100%',
      maxWidth: '72em',
      display: 'flex',
      flexDirection: 'column',
      py: 0
    },
    Footer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'flex-end',
      alignItems: 'center',
      py: 4
    },
    ol: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
      display: 'flex',
      alignItems: 'center'
    },
    li: {
      display: 'inline-block',
    },
    h1: {
      color: 'secondary'
    },
    h4: {
      color: 'text',
      fontWeight: '200'
    },
    p: {
      fontFamily: 'text',
      fontSize: 2,
      color: 'text'
    }
  },
  layout: {
    square: {
      height: ['auto', '800px'],
      minHeight: '400px',
      width: '100%',
      display: 'flex'
    },
    fill: {
      height: '100%',
      width: '100%',
      minWidth: 0,
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    portfolio: {
      article: {
        display: 'flex',
        flex: '1 1 auto',
        flexDirection: ['column', 'row'],
        minWidth: 0,
        alignItems: 'center',
        justifyContent: 'center', 
        px: 4, 
        py: 5, 
      },
      image: {
        width: ['275px', '350px'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: [2, 0],
        px: [0, 5]
      }
    },
    info: {
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: ['column', 'row'],
      alignItems: 'center',
      justifyContent: 'center',
    },
    nav: {
      justifyContent: 'flex-end',
      width: '100%',
      display: 'flex',
      py: 4
    },
  },
  text: {
    portfolio: {
      title: {
        ...deep.styles.h1,
        color: 'highlight',
        m: 0
      },
      platform: {
        ...deep.styles.h2,
        color: 'muted',
        m: 0
      },
      url: {
        ...deep.styles.h3,
        m: 0
      }
    },
    hero: {
      title: {
        fontSize: ['0.7em', '1.2em'],
        fontWeight: '800',
        textTransform: 'uppercase',
        lineHeight: ['40px', '80px'],
        margin: 0,
        color: 'inherit',
      }
    },
    link: {
      ...deep.styles.h3,
      color: 'muted',
      textDecoration: 'none',
      borderBottom: '1px solid white',
    }
  }
};

const Reset = () =>
  React.createElement(Global, {
    styles: {
      body: {
        margin: '0',
        backgroundColor: deep.colors.background
      },
      a: {textDecoration: 'none', color: deep.colors.primary, fontWeight: 'bold', fontSize: 20}
    }
  });

  console.log("theme", theme)

const CustomThemeProvider = memo(({children, ...props}) => (
  <ThemeProvider theme={theme} {...props}>
    <Reset />
    <Styled.root>{children}</Styled.root>
  </ThemeProvider>
));

export {theme, useThemeUI as useTheme, CustomThemeProvider as default};
