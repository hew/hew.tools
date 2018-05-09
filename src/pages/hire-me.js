import React, {Component} from 'react';
import color from '../styles/color';
import {hireMe} from '../data';
import {Motion, spring} from 'react-motion';

const underline = {textDecoration: `underline wavy ${color.yellow[0]}`};
const outline = {
  border: `1px solid ${color.gray[0]}`,
  padding: `3em 6em`,
  margin: `0.5em`,
  width: `10em`,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`
};

const HireMe = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>hire me</H1>
      <Box w={[1, 1, 2 / 3]}>
        <h2>areas of specialty</h2>
        <Flex flexWrap="wrap">
          {hireMe.expertise.map((item) => (
            <Box style={outline} key={item.toString()}>
              {item}
            </Box>
          ))}
        </Flex>
      </Box>
      <H4>
        <a href="/resume">My resume</a>
      </H4>
      <H2 mb={4}>
        <a href="mailto:matt@hew.tools">Let&apos;s work together</a>
      </H2>
    </Box>
  </Container>
);

export default HireMe;
