import React, {Component} from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import {hireMe} from '../data';
import {Motion, spring} from 'react-motion';

// Wire it up to the modal
import Modal from '../components/modal';
import {connect} from 'react-redux';
import {toggleModal} from '../state/modal-state';

const underline = {textDecoration: `underline wavy ${color.yellow[0]}`};

const Outline = styled.div`
  border: 3px solid ${color.purple[1]};
  padding: 3em 0em;
  margin: 0.5em;
  width: 17em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s ease-in-out;
  position: relative;
  cursor: pointer;

  h4 {
    transition: transform 0.2s ease-in-out;
  }
  :hover {
    border: 3px solid ${color.purple[0]};

    h4 {
      transform: translateY(-0.5em);
    }
  }
  :after {
    content: '';
    position: absolute;
    border: 1px solid gray;
  }
`;

class HireMe extends React.Component {
  render() {
    const {isModalOpen, toggleModal} = this.props;

    return (
      <Container>
        <Box>
          <H1 f={7} color={color.purple[0]}>
            hire me
          </H1>
          <P>I'm a javascript generalist with a focus on the front end. I've been writing software for around three years. previous to that, I was a writer/marketer. Depending on what you need, I might be the right fit for your company or product. click the boxes below for more info. feel free to also check out the ol&apos; <a href="/resume">rezzy</a>.</P>
          <H3>
            <a href="mailto:matt@hew.tools">contact me</a>
          </H3>
          <Box>
            <Flex flexWrap="wrap" ml="-8px">
              {hireMe.expertise.map((item) => (
                <Outline
                  key={item.short.toString()}
                  onClick={() => toggleModal({text: item.long})}>
                  <H4>{item.short}</H4>
                </Outline>
              ))}
            </Flex>
          </Box>
        </Box>
        <Modal open={isModalOpen} />
      </Container>
    );
  }
}

export default connect(
  (store) => ({isModalOpen: store.modal.show}),
  (dispatch) => ({
    toggleModal: (i) => dispatch(toggleModal(i))
  })
)(HireMe);
