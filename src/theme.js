/** @jsx jsx */

import {Global} from '@emotion/core';
import React, {memo} from 'react';
import {jsx, useThemeUI, ThemeProvider as TP, Styled} from 'theme-ui';
import {base} from '@theme-ui/presets';

const custom = {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#9a67e1',
    secondary: '#05a',
    accent: '#609',
    muted: '#f6f6f6f'
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 800
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  }
};

const theme = Object.assign(base, custom);

const ThemeProvider = memo(({children, ...props}) => (
  <TP theme={theme} {...props}>
    <Styled.root>{children}</Styled.root>
  </TP>
));

const Reset = () =>
  React.createElement(Global, {
    styles: {
      body: {
        margin: '0',
        backgroundColor: 'lightGray'
      },
      'h1, h2, h3, h4, h5, h6': {
        margin: 0
      },
      small: {
        fontSize: '100%'
      },
      a: {
        textDecoration: 'none'
      },
      button: {
        border: 0,
        padding: 0,
        fontSize: '100%',
        backgroundColor: 'transparent'
      }
    }
  });

export {useThemeUI as useTheme, Reset, ThemeProvider as default};
