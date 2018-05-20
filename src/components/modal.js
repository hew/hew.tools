import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Link from 'gatsby-link';
import '../styles';
import {Motion, spring} from 'react-motion';

// Wire up Redux
import {connect} from 'react-redux';
import {toggleModal} from '../state/modal-state.js';

const modalStyles = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },
  content: {
    top: '20px',
    left: '20px',
    right: '20px',
    bottom: '20px',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    background: 'transparent',
    padding: '20px',
    border: `3px solid ${color.purple[1]}`,
    overflow: 'none'
  }
};

class _Modal extends React.Component {
  state = {toggleAnimation: true};
  componentDidMount() {
    Modal.setAppElement(document.getElementById('___gatsby'));
    this.calculateDiameter();
    window.addEventListener('resize', this.calculateDiameter);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  calculateDiameter = () => {
    if (window.matchMedia('(min-width: 650px)').matches) {
      this.setState((state) => ({toggleAnimation: true}));
    } else {
      this.setState((state) => ({toggleAnimation: false}));
    }
  };
  render() {
    const {text, toggleModal, isModalOpen, Component = () => null} = this.props;

    const {toggleAnimation} = this.state;

    const underline = {textDecoration: `underline wavy ${color.purple[0]}`};

    const line = 500;
    // const basePerspective = line * 2;
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
      transformStyle: 'preserve-3d',
      outline: '2px solid #BEADD7'
    };

    const side1 = {
      ...side,
      border: `3px solid black`,
      backgroundColor: 'white',
      transform: `translateZ(150px)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 16px'
    };

    const side2 = {
      ...side,
      backgroundColor: `${color.purple[0]}`,
      transform: `rotateY(180deg) translateZ(150px)`,
      border: '3px solid black'
    };

    const closeButtonStyles = {
      position: 'absolute',
      cursor: 'pointer',
      top: toggleAnimation ? '0' : '-20px',
      right: toggleAnimation ? '20px' : '0px'
    };

    const mobileInnerStyles = {
      position: 'relative',
      width: '100%',
      height: '100%'
    };

    const motionDefaultStyle = {z: 0};
    const tween = {z: spring(355)};

    return (
      <Modal isOpen={isModalOpen} contentLabel="Modal" style={modalStyles}>
        {toggleAnimation ? (
          <Motion defaultStyle={motionDefaultStyle} style={tween}>
            {({z}) => (
              <div
                style={{
                  transform: `rotate3d(1, 1, 1, ${z}deg)`,
                  ...base
                }}>
                <div style={side2} />
                <div style={side1}>
                  <H3 style={closeButtonStyles} onClick={toggleModal}>
                    close
                  </H3>
                  <Box>
                    <P f={3} dangerouslySetInnerHTML={{__html: text}} />
                  </Box>
                </div>
              </div>
            )}
          </Motion>
        ) : (
          <Flex alignItems="center" style={mobileInnerStyles}>
            <H3 style={closeButtonStyles} onClick={toggleModal}>
              close
            </H3>
            <P f={3} dangerouslySetInnerHTML={{__html: text}} />
          </Flex>
        )}
      </Modal>
    );
  }
}

export default connect(
  (store) => ({isModalOpen: store.modal.show, text: store.modal.text}),
  (dispatch) => ({
    toggleModal: (i) => dispatch(toggleModal(i))
  })
)(_Modal);
