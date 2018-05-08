import React, {Component} from 'react';
import NavModal from '../components/nav-modal';
import Link from 'gatsby-link';
import Icon from 'react-geomicons';
import '../styles';

// Wire it up to the modal
import {connect} from 'react-redux';
import {openNavModal, closeNavModal} from '../state/nav-modal-state';

class Nav extends Component {
  toggleNavModal = e => {
    e.preventDefault();

    if (this.props.modal.navModal.show) {
      this.props.closeNavModal();
    } else {
      this.props.openNavModal();
    }
  };

  toggleFormModal = e => {
    e.preventDefault();
    this.props.openFormModal();
  };

  render() {
    const {items = [], modal} = this.props;
    const {formModal, navModal} = modal;
    const buttonStyles = {
      borderBottom: 'none',
      padding: '16px 0',
      cursor: 'pointer',
      display: 'inline-block'
    };

    return (
      <Flex>
        <Container>
          <Flex py={3} align="center">
            <Box mt={2}>
              <Link to="/" style={buttonStyles}>
                <H4>{"/"}</H4>
              </Link>
            </Box>
            <Row is="ul" display={['none', 'flex']} ml="auto">
              {items.map((x, i) => !x.external ? (
                <li key={i.toString()}>
                  <Link
                    activeClassName="--active"
                    to={x.link}
                    style={buttonStyles}>
                    <H4 px={1}>{x.text}</H4>
                  </Link>
                </li>
              ) : (
                <li key={i.toString()}>
                  <a href={x.link}>
                    <H4 px={1}>{x.text}</H4>
                  </a>
                </li> )
             )}
            </Row>
            <Flex display={['flex', 'none']} align="center" ml="auto">
              <a
                style={{
                  position: 'relative',
                  zIndex: '9',
                  ...buttonStyles,
                }}
                onClick={this.toggleNavModal}>
                <Icon name="chevronDown" />
              </a>
            </Flex>
            <NavModal items={items} open={navModal.show} />
          </Flex>
        </Container>
      </Flex>
    );
  }
}

export default connect(
  store => ({modal: {navModal: store.navModal, formModal: store.formModal}}),
  dispatch => ({
    openNavModal: i => dispatch(openNavModal(i)),
    closeNavModal: i => dispatch(closeNavModal(i)),
  }),
)(Nav);
