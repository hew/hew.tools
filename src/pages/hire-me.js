import React, {Component} from 'react';
import color from '../styles/color';
import {hireMe} from '../data';
import {Motion, spring} from 'react-motion';

const base = {
  outline: '1px solid black',
  height: '100px',
  width: '100px'
};

class Card extends Component {
  state = {isOpen: false};
  handleClick = (evt) => {
    this.setState((state) => ({isOpen: !state.isOpen}));
  };
  render() {
    // const check = (_open) => _open ? spring(180) : spring(0);

    const defaultStyle = {
      transform: 0
    };
    const tween = {
      transform: spring(180)
    };
    return (
      <Motion defaultStyle={defaultStyle} style={tween}>
        {(animationStyle) => (
          <div
            style={{
              transform: `translateX(${animationStyle.transform}px)`,
              ...base
            }}
            onClick={this.handleClick}>
            {animationStyle.transform}
          </div>
        )}
      </Motion>
    );
  }
}

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
        <h2>i am a quick-learning software generalist</h2>
        <P>
          <Span fontWeight="bold">skillset: </Span>
          <Span style={underline}>building user interfaces</Span>
        </P>
        <P>
          <Span fontWeight="bold">experience: </Span>
          <Span style={underline}>three years</Span>
        </P>
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

        <Flex flexWrap="wrap">
          {hireMe.expertise.map((item) => (
            <Box style={outline} key={item.toString()}>
              <Card />
              <P fontWeight="bold">{item}</P>
            </Box>
          ))}
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
