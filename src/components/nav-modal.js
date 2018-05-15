import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Link from 'gatsby-link';
import Icon from 'react-geomicons';
import '../styles';

// Wire up Redux
import {connect} from 'react-redux';
import {toggleModal} from '../state/nav-modal-state.js';

// Not sure how to SC this one, so we stick with js styles
const modalStyles = {
  overlay: {backgroundColor: 'white'},
  content: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '40px',
    left: '30px',
    right: '40px',
    bottom: '40px',
    border: 'none',
    background: 'transparent',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px'
  }
};

const NavModal = ({open = false, items}) => {
  const handleClick = (evt) => {
    evt.persist();
    toggleModal();
  };

  return (
    <Modal isOpen={open} contentLabel="Modal" style={modalStyles}>
      <ul style={{padding: 0}}>
        {items.map((x, i) => (
          <li key={i} style={{margin: '1em 0'}}>
            <Link onClick={handleClick} to={x.link}>
              <h2>{x.text}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default NavModal;
