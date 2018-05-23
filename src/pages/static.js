import React, {Component} from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import {hireMe} from '../data';
import {Motion, spring} from 'react-motion';

class Static extends React.Component {
  render() {

    return (
      <Container>
        <Box>
          <H1 f={7} color={color.purple[0]}>
            static is the next evolution of cms
          </H1>
          <P>if you are still paying for Wordpress hosting, or Squarespace, you might want to reconsider a headless CMS with a static website.</P>
          <H2>benefits of static sites</H2>
          <ul>
            <li>free hosting forever</li>
            <li>only pay anything when profitable</li>
            <li>instant page load times</li>
            <li>easy scaling</li>
          </ul>

          <H2>static CMS sites I build</H2>
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

export default Static;
