import { h, Component } from "preact";
import { Box, Text } from "axs";
import { bind } from "decko";
import { Motion, spring } from "preact-motion";
import { colors } from "styles";
// import { data } from "./data.js";
import axios from 'axios';
import { square } from "../shapes";
import Animate from "../motion";
import CardList from "../card";

export default class OpenSource extends Component {
  componentDidMount () {
    axios('https://hewtools.herokuapp.com/').then(response => {
      const { data } = response;
      this.setState({ data })
    })
  }
  state = {
    animateCards: false,
    data: []
  };
  @bind
  handleRest() {
    this.setState({ animateCards: true });
  }
  render({}, { animateCards, data }, { axs }) {
    const { green4, violet4 } = axs.colors;
    const boldStyles = { borderBottom: `2px dotted ${violet4}` };
    return (
      <Box>
        <Animate type="x" start={2} end={-2}>
          <Box css={square} />
        </Animate>
        <Box py3>
          <Animate type="x" start={-10} end={0} rest={this.handleRest}>
            <Text
              is="h1"
              bold
              fontSize={[1, 0]}
              css={{ color: violet4 }}
            >
             projects
            </Text>
          </Animate>
          <Text is="h3" fontSize={[3, 2]} bold py2>
            and such
          </Text>
        </Box>
        {animateCards && <CardList data={data} />}
      </Box>
    );
  }
}
