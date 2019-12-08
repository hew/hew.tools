/** @jsx jsx */

import {Global} from '@emotion/core';
import React, {memo} from 'react';
import {jsx, useThemeUI, ThemeProvider, Styled} from 'theme-ui';
import {swiss} from '@theme-ui/presets';

// Some styles are easier to just declare in an actual styles file
import './styles.css';

const theme = {
  ...swiss,
  styles: {
    ...swiss.styles,
    root: {},
    ol: {
      margin: 0,
      padding: 0,
      listStyleType: "none"
    },
    li: {
      display: 'inline-block',
      height: '100%',
      padding: '0.5em 0'
    }
  },
  layout: {
    main: {
      flex: '1 1 auto',
    },
    section: {
      flex: '1 1 auto', 
      overflow: 'hidden',
    },
    nav: {
      justifyContent: 'center', 
      width: '100%',
      minHeight: '50px',
      display: "flex"
    },
    footer: {
      minHeight: "50px",
      display: 'flex',
      minWwidth: 0
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
        margin: '0'
      },
      a: {textDecoration: 'none', color: swiss.colors.primary, fontWeight: 'bold'}
    }
  });

const CustomThemeProvider = memo(({children, ...props}) => (
  <ThemeProvider theme={theme} {...props}>
    <Reset />
    <Styled.root>{children}</Styled.root>
  </ThemeProvider>
));

export {useThemeUI as useTheme, CustomThemeProvider as default};
