import React, {Component} from 'react';
import styled from 'styled-components';
import color from '../styles/color';
import {hireMe} from '../data';
import {Motion, spring} from 'react-motion';

// Wire it up to the modal
import Modal from '../components/modal';
import {connect} from 'react-redux';
import {toggleModal} from '../state/modal-state';


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

  h3 {
    transition: transform 0.2s ease-in-out;
  }
  :hover {
    border: 3px solid ${color.purple[0]};

    h3 {
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
          <P>I'm a javascript specialist available for contract work. click the boxes to learn more.</P>
          <Box>
            <Flex flexWrap="wrap" ml="-8px">
              {hireMe.expertise.map((item) => (
                <Outline
                  key={item.short.toString()}
                  onClick={() => toggleModal({text: item.long})}>
                  <H3>{item.short}</H3>
                </Outline>
              ))}
            </Flex>
          </Box>
          <H3>
            <a href="mailto:matt@hew.tools">let's chat</a>
          </H3>
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
