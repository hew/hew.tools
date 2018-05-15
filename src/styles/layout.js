import React from 'react';
import styled from 'styled-components';
import {max_width} from './sizes';
import tag from 'clean-tag'
import {
  space,
  width,
  fontSize,
  boxShadow,
  color,
  backgroundColor,
  flex,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
  borderWidth,
  borderColor,
  removeProps,
  responsiveStyle,
} from 'styled-system';

// Custom helper
const display = responsiveStyle({
  prop: 'display',
  cssProperty: 'display',
});

export const Box = styled(tag)(
  [],
  width,
  fontSize,
  space,
  color,
  backgroundColor,
  borderWidth,
  borderColor,
  boxShadow,
  display,
  flex,
  alignItems,
  justifyContent,
  flexWrap,
  flexDirection,
  backgroundColor
);

// Here we have a duplicate display because the first is effective a default.
export const Flex = Box.extend`
  display: flex;
  ${display};
`;

export const Container = styled.div`
  max-width: ${max_width};
  margin: 0 auto;
  width: 100%;
`;

export const Row = ({children, ...props}) => (
  <Flex wrap justify="center" align="center" {...props}>
    {children}
  </Flex>
);
