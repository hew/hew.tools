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
    alignItems: 'center'
  },
  content: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    background: 'transparent',
    width: '80%',
    height: '100%',
    maxWidth: '65em'
  }
};

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
  ...squareSize,
  // perspective: `${basePerspective}px`
};

const closeButtonStyles = {
  position: 'absolute',
  top: '0',
  cursor: 'pointer',
  right: '20px'
};

const _Modal = ({toggleModal, isModalOpen, Component = () => null}) => {
  const defaultStyle = { z: 0 };
  const tween = { z: isModalOpen ? spring(355) : spring(0) };
  return (
    <Modal isOpen={isModalOpen} contentLabel="Modal" style={modalStyles}>
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
                transform: `translateZ(150px)`
              }}>
              <H3 style={closeButtonStyles} onClick={toggleModal}>
                close
              </H3>
              {Component()}
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
    </Modal>
  );
};

export default connect(
  (store) => ({isModalOpen: store.modal.show}),
  (dispatch) => ({
    toggleModal: (i) => dispatch(toggleModal(i))
  })
)(_Modal);
