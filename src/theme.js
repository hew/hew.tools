/** @jsx jsx */

import {Global} from '@emotion/core';
import React, {memo} from 'react';
import {jsx, useThemeUI, ThemeProvider, Styled} from 'theme-ui';
import {deep} from '@theme-ui/presets';

// Some styles are easier to just declare in an actual styles file
import './styles.css';

const theme = {
  ...deep,
  fonts: {
    text: 'Helvetica Neue',
    heading: 'Passion One'
  },
  styles: {
    ...deep.styles,
    root: {},
    ol: {
      margin: 0,
      padding: 0,
      listStyleType: 'none'
    },
    li: {
      display: 'inline-block',
      height: '100%',
      padding: '0.5em 0'
    },
    h1: {
      ...deep.styles.h1,
      color: 'secondary'
    },
    h4: {
      ...deep.styles.h4,
      color: 'primary'
    },
    p: {
      ...deep.styles.p,
      fontFamily: "text",
      fontSize: 3,
      color: 'text'
    }
  },
  layout: {
    main: {
      flex: '1 1 auto'
    },
    section: {
      minHeight: '500px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    header: {
      minHeight: '5em'
    },
    nav: {
      justifyContent: 'flex-end',
      width: '100%',
      minHeight: '50px',
      display: 'flex'
    },
    footer: {
      mt: 6,
      minHeight: '50px',
      display: 'flex',
      justifyContent: 'flex-end',
    }
  },
  text: {
    link: {
      color: 'red',
      textDecoration: 'none',
      fontWeight: 'bold',
      minWwidth: 0,
      display: 'flex'
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

const CustomThemeProvider = memo(({children, ...props}) => (
  <ThemeProvider theme={theme} {...props}>
    <Reset />
    <Styled.root>{children}</Styled.root>
  </ThemeProvider>
));

export {theme, useThemeUI as useTheme, CustomThemeProvider as default};
