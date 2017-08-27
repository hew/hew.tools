import { h, Component } from "preact";
import { Flex } from "axs";
import { bind } from 'decko';
import Items from './items';
import Logo from './logo';
import { isBreak, breaks } from 'styles'

const isRight = right => ({ justifyContent: right ? "flex-end" : null });

export default class Nav extends Component {
  constructor() {
    super();
    this.state = {
      toggle: isBreak(breaks[0])
    };
  };
  @bind
  handleClick() { 
    this.setState({ toggle: !this.state.toggle }) 
  }
  render({ links = [], logo, right }, { toggle }) {
    return (
      <Flex py3 width={1}>
        <Flex px={[2,3]} width={1} css={isRight(right)}>
          { logo && <Logo click={this.handleClick}/> }
          <Items links={links} toggle={toggle} right={right} />
        </Flex>
      </Flex>
    );
  }
}


