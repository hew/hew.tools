import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Link from 'gatsby-link';
import Icon from 'react-geomicons';
import '../styles';
import {Motion, spring} from 'react-motion';

// Wire up Redux
import {connect} from 'react-redux';
import {toggleModal} from '../state/modal-state.js';

// Not sure how to SC this one, so we stick with js styles
const modalStyles = {
  overlay: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  content: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    background: 'transparent',
    padding: 0
  }
};

const _Modal = ({
  text,
  toggleModal,
  isModalOpen,
  toggleAnimation,
  Component = () => null
}) => {
  const line = 500;
  const basePerspective = line * 2;
  const sidePerspective = line;
  const squareSize = {width: line, height: line};

  const side = {
    ...squareSize,
    perspective: `${sidePerspective}px`,
    position: 'absolute',
    backfaceVisibility: 'inherit'
  };

  const base = {
    ...squareSize
    // perspective: `${basePerspective}px`
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '0',
    cursor: 'pointer',
    right: toggleAnimation ? '20px' : '0px'
  };

  const defaultStyle = {z: 0};
  const tween = {z: isModalOpen ? spring(355) : spring(0)};

  console.log(text, 'text');
  return (
    <Modal isOpen={isModalOpen} contentLabel="Modal" style={modalStyles}>
      {toggleAnimation ? (
        <Motion defaultStyle={defaultStyle} style={tween}>
          {({z}) => (
            <div
              style={{
                transform: `rotate3d(1, 1, 1, ${z}deg)`,
                transformStyle: 'preserve-3d',
                outline: '2px solid #BEADD7',
                ...base
              }}>
              <div
                style={{
                  ...side,
                  // border: `4px solid ${color.purple[0]}`,
                  border: `3px solid black`,
                  backgroundColor: 'white',
                  transform: `translateZ(150px)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <H3 style={closeButtonStyles} onClick={toggleModal}>
                  close
                </H3>
                <p>{text}</p>
              </div>
              <div
                style={{
                  ...side,
                  backgroundColor: `${color.purple[0]}`,
                  transform: `rotateY(180deg) translateZ(150px)`,
                  border: '3px solid black'
                }}
              />
            </div>
          )}
        </Motion>
      ) : (
        <Flex
          alignItems="center"
          style={{position: 'relative', width: '100%', height: '100%'}}>
          <H3 style={closeButtonStyles} onClick={toggleModal}>
            close
          </H3>
          <p>{text}</p>
        </Flex>
      )}
    </Modal>
  );
};

export default connect(
  (store) => ({isModalOpen: store.modal.show, text: store.modal.text}),
  (dispatch) => ({
    toggleModal: (i) => dispatch(toggleModal(i))
  })
)(_Modal);
