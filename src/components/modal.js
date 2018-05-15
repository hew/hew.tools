import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import Link from 'gatsby-link'
import Icon from 'react-geomicons'
import '../styles'

// Wire up Redux
import { connect } from 'react-redux'
import { toggleModal } from '../state/modal-state.js'

// Not sure how to SC this one, so we stick with js styles
const modalStyles = {
  overlay: { backgroundColor: 'rgba(25, 20, 82, 0.47)' },
  content: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    top: '40px',
    left: '30px',
    right: '40px',
    bottom: '40px',
    border: 'none',
    background: 'white',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
}

const _Modal = ({toggleModal, isModalOpen, Component = () => null}) => {
  
    return (
      <Modal isOpen={isModalOpen} contentLabel="Modal" style={modalStyles}>
        <H3 style={{position: 'absolute', top: '2em'}} onClick={toggleModal}>Back</H3>
        {Component()}
        <span>hey</span>
      </Modal>
    )

}

export default connect(
  (store) => ({isModalOpen: store.modal.show }),
  (dispatch) => ({
    toggleModal: (i) => dispatch(toggleModal(i)),
  })
)(_Modal);
