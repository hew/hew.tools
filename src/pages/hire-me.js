import React from 'react';
import color from '../styles/color';

const underline = {textDecoration: `underline wavy ${color.purple[0]}`};
const outline = {
  border: `2px solid ${color.purple[0]}`,
  padding: `0.5em`,
  margin: `0 0.5em`,
  width: `4em`
};

const HireMe = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>hire me</H1>
      <Box w={[1, 2 / 3]}>
        <h2>about me</h2>
        <P>
          i have been writing software for the past three years, mostly
          javascript: Node, React, React Native, and Reason/OCaml. most of my
          time currently is spent building{' '}
          <a href="http://startupleague.io">startupleague.io</a>, where I am one
          of the co-founders and CTO.
        </P>
        <P>
          I hack on <a href="https://github.com/hew">open source</a> and{' '}
          <a href="https://medium.com/@tahini">write</a> stuff in my spare time.
          I also do freelance, which is maybe why you are here.
        </P>

        <h2>areas of specialty</h2>

        <P>
          <Span fontWeight="bold" style={underline}>
            Core
          </Span>: my core skillset is UI development: fetching data, mapping
          that data to a list. Placing boxes within other boxes - sometimes
          centering them. State architecture stores. All that fun stuff.
        </P>

        <Flex flexWrap='wrap'>
          <Box style={outline}>
            <Span fontWeight="bold">Node</Span>
          </Box>

          <Box style={outline}>
            <Span fontWeight="bold">Salesforce</Span>
          </Box>

          <Box style={outline}>
            <Span fontWeight="bold">Style Systems</Span>
          </Box>

          <Box style={outline}>
            <Span fontWeight="bold">React</Span>
          </Box>

          <Box style={outline}>
            <Span fontWeight="bold">React Native</Span>
          </Box>

          <Box style={outline}>
            <Span fontWeight="bold">Rails</Span>
          </Box>

          <Box style={outline}>
            <Span fontWeight="bold">Wordpress/Static CMS</Span>
          </Box>
        </Flex>
      </Box>
      <H2>
        <a href="/resume">My resume</a>
      </H2>
      <H2 mb={4}>
        <a href="mailto:matt@hew.tools">Let&apos;s work together.</a>
      </H2>
    </Box>
  </Container>
);

export default HireMe;
