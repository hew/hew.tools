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
    backgroundColor: 'transparent',
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
    height: '80%',
    maxWidth: '65em'
  }
};

const modalInnerStyles = {
  // position: 'absolute',
  // top: 0,
  // bottom: 0,
  // right: 0,
  // left: 0,
  // display: 'flex',
  height: '100px',
  width: '100px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  background: 'white',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  borderRadius: '4px',
  outline: `5px solid ${color.purple[0]}`,
  padding: '20px',
  maxWidth: '65em',
  perspective: '1000px'
};

const line = '500px';
const basePerspective = line + 50;
const sidePerspective = line / 2;
const squareSize = {width: line, height: line};

const side = {
  ...squareSize,
  ...sidePerspective,
  position: 'absolute',
  backfaceVisibility: 'inherit'
};

const base = {
  ...squareSize,
  ...basePerspective
};

const closeButtonStyles = {
  position: 'absolute',
  top: '0',
  cursor: 'pointer',
  right: '20px'
};

const _Modal = ({toggleModal, isModalOpen, Component = () => null}) => {
  const defaultStyle = {
    t: 0,
    z: 0,
    s: 0
  };
  const tween = {
    t: isModalOpen ? spring(1) : spring(0),
    z: isModalOpen ? spring(355) : spring(0),
    s: isModalOpen ? spring(50) : spring(0)
  };
  return (
    <Modal isOpen={isModalOpen} contentLabel="Modal" style={modalStyles}>
      <Motion defaultStyle={defaultStyle} style={tween}>
        {({t, z, s}) => (
          <div
            style={{
              transform: `rotate3d(1, 1, 1, ${z}deg)`,
              opacity: t,
              transformStyle: 'preserve-3d',
              outline: '2px solid #BEADD7',
              ...base
            }}>
            <div
              style={{
                ...side,
                // border: `4px solid ${color.purple[0]}`,
                 border: `4px solid black`,
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
                border: '2px solid black'
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
