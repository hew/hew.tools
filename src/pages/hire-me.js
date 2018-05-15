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
  border: 2px solid ${color.gray[0]};
  padding: 3em 0em;
  margin: 0.5em;
  width: 17em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border 0.2s ease-in-out;
  :hover {
    border: 2px solid ${color.purple[0]};
  }
`;

const HireMe = ({isModalOpen, toggleModal}) => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>hire me</H1>
      <Box>
        <h2>areas of specialty</h2>
        <Flex flexWrap="wrap">
          {hireMe.expertise.map((item) => (
            <Outline key={item.toString()} onClick={toggleModal}>
              <p>{item}</p>
            </Outline>
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
    <Modal component={null} open={isModalOpen} />
  </Container>
);

export default connect(
  (store) => ({isModalOpen: store.modal.show}),
  (dispatch) => ({
    toggleModal: (i) => dispatch(toggleModal(i))
  })
)(HireMe);
