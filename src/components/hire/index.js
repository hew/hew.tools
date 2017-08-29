import { h, Component } from "preact";
import { Link } from "preact-router";
import { Box, Text, Flex } from "axs";
import { square } from "../shapes";
import { bind } from "decko";
import Animate from "../motion";
import { flicker } from 'styles/global';

export default class Hire extends Component {
  render(_, __, { axs }) {
    const { green4, violet4 } = axs.colors;
    const linkStyles = {
      color: green4,
      cursor: "pointer",
      borderBottom: `2px dotted ${green4}`
    };
    return (
      <Box width={1}>
        <Animate type="x" start={2} end={-2}>
          <Box css={square} />
        </Animate>
        <Box py3 w={[1, 1, 5 / 6]}>
          <Animate type="x" start={-10} end={0}>
            <Text
              is="h1"
              bold
              py2
              fontSize={[1, 0]}
              css={{ color: violet4, maxWidth: "1400px" }}
            >
             let's build internets
            </Text>
          </Animate>
          <Text is="h3" fontSize={[3, 2]} bold py2>
            occassionally I have time to pursue freelance projects.&nbsp;
            <a href="mailto:matt@hew.tools">
              <Text is="span" css={linkStyles}>holla</Text>
            </a>.
          </Text>
          <Text is="h3" f4 py2>
            <Text is="span" css={{fontWeight: 'bold'}}>stuff I do:</Text>
            <br />
            salesforce javascript<br />
            react stuff<br />
            react native<br />
            anything javascript
          </Text>
        </Box>
      </Box>
    );
  }
}
