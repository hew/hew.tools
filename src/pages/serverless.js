import React, {Component} from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import {hireMe} from '../data';
import {Motion, spring} from 'react-motion';

class Serverless extends React.Component {
  render() {

    return (
      <Container>
        <Box>
          <H1 f={7} color={color.purple[0]}>
            web hosting is essentially free
          </H1>
          <P>if you are still paying for Wordpress hosting, or Squarespace, you might want to reconsider a headless CMS with a static website. Get all of what you are used to, without the pain of worrying about scaling as your business grows.</P>
          <H2>benefits of static sites</H2>
          <ul>
            <li>No server costs!</li>
            <li>Instant website load times</li>
            <li>easy scaling</li>
          </ul>

          <H2>Serverless sites I build</H2>
          <ul>
            <li>Small business</li>
            <li>Landing pages</li>
            <li>Online stores</li>
            <li>Documentation</li>
          </ul>
          <H3>
            I can explain this further on a <a href="mailto:matt@hew.tools">free call</a>.
          </H3>
        </Box>
      </Container>
    );
  }
}

export default Serverless;
