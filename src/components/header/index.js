import { h, Component } from 'preact'
import Nav from '../nav'

const Header = ({links}) =>
  <Nav links={links} logo={true} />

export default Header
