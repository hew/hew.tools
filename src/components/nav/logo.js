import { h, Component } from "preact";
import { Link } from "preact-router";
import { Box, Flex, Text, Color, Border } from "axs";
import { bind } from "decko";
import { center } from "styles/flex";
import { isBreak, breaks } from "styles";

const logoStyles = {
  height: "20px",
  width: "20px",
  backgroundColor: "black"
};

const logoContainerStyles = {
  width: "47px",
  height: "47px",
  cursor: "pointer",
  ...center,
  flexGrow: 0
};

export default class Logo extends Component {
  @bind
  handleClick() {
    this.props.click();
  }
  render() {
    return (
      <Flex mr={1} css={logoContainerStyles} onClick={this.handleClick}>
        <div style={logoStyles} />
      </Flex>
    );
  }
}
