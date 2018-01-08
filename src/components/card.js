import React, {Component} from 'react';
import {Forks, Stars} from '../components/svg';
import styled from 'styled-components';

const CardFlex = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 2em 0;
`;

export default class Card extends Component {
  render() {
    const {name = '', desc = '', href = '', stars = 0, forks = 0} = this.props;
    return (
      <a href={href}>
        <CardFlex>
          <Box>
            <h5>{name}</h5>
            <p fontSize={5}>{desc}</p>
            <div>
              <Flex>
                <Flex mr={1}>
                  <Box mr={1}>
                    <Stars fill={color.gray[4]} />
                  </Box>
                  <span>{stars}</span>
                </Flex>
                <Flex ml={1}>
                  <Box mr={1} style={{transform: 'translateY(2px)'}}>
                    <Forks fill={color.gray[4]} />
                  </Box>
                  <span>{forks}</span>
                </Flex>
              </Flex>
            </div>
          </Box>
        </CardFlex>
      </a>
    );
  }
}
