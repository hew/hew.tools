import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import Link from 'gatsby-link';
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

class NavModal extends React.Component {
  handleClick = (evt) => {
    evt.persist();
    toggleModal();
  };
  componentDidMount() {
    Modal.setAppElement(document.getElementById('___gatsby'));
  }
  render() {
    const {open = false, items} = this.props;
    return (
      <Modal isOpen={open} contentLabel="Modal" style={modalStyles}>
        <ul style={{padding: 0}}>
          {items.map(
            (x, i) =>
              x.external ? (
                <li key={i.toString()} style={{margin: '1em 0'}}>
                  <a href={x.link}>
                    <H2>{x.text}</H2>
                  </a>
                </li>
              ) : (
                <li key={i.toString()} style={{margin: '1em 0'}}>
                  <Link
                    activeClassName="--active"
                    to={x.link}
                    onClick={this.handleClick}>
                    <H2>{x.text}</H2>
                  </Link>
                </li>
              )
          )}
        </ul>
      </Modal>
    );
  }
}

export default NavModal;
