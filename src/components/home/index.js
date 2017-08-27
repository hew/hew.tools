import { h, Component } from "preact";
import { bind } from "decko";
import { Box, Flex } from "axs";
import { breaks } from "styles";
import Animate from "../motion";
import throttle from "lodash.throttle";

import Tree from "../euclid";

export default class Home extends Component {
  state = {
    depth: 1,
    layout: "mobile",
    show: false
  };
  componentDidMount() {
    window.addEventListener("resize", throttle(this.setLayout, 3));
    this.setLayout();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", throttle(this.setLayout, 3));
  }
  @bind
  setLayout() {
    if (window.matchMedia(`(min-width: ${breaks[0]}em)`).matches) {
      this.setState({
        layout: "small",
        depth: 1
      });
    }
    if (window.matchMedia(`(min-width: ${breaks[1]}em)`).matches) {
      this.setState({
        layout: "medium",
        depth: 2
      });
    }
    if (window.matchMedia(`(min-width: ${breaks[2]}em)`).matches) {
      this.setState({
        layout: "large",
        depth: 3
      });
    }
  }
  render({}, { show, depth }) {
    return (
      <Animate start={0} end={1}>
        <Box px3>
          <Tree depth={depth} color={2} pos={"base"} />
        </Box>
      </Animate>
    );
  }
}
