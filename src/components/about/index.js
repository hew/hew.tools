import { h, Component } from "preact";
import { Link } from "preact-router";
import { Box, Text, Flex } from "axs";
import { square } from "../shapes";
import { bind } from "decko";
import Animate from "../motion";
import { flicker } from 'styles/global';

export default class About extends Component {
  render(_, __, { axs }) {
    const { green4, violet4 } = axs.colors;
    const linkStyles = {
      cursor: "pointer",
      borderBottom: `2px dotted ${green4}`
    };
    return (
      <Box width={1}>
        <Animate type="x" start={2} end={-2}>
          <Box css={square} />
        </Animate>
        <Box py3 w={[1, 1, 2/3.3]}>
          <Animate type="x" start={-10} end={0}>
            <Text
              is="h1"
              bold
              py2
              fontSize={[1, 0]}
              css={{ color: violet4, maxWidth: "1400px" }}
            >
              <Text is="span" css={{animation: `${flicker} 0.5s`}}>matt</Text>hew jones
            </Text>
          </Animate>
          <Text is="h3" fontSize={[3, 2]} bold py2>
            ui developer + designer
          </Text>
          <Text is="h3" f4 py2>
            ex-copywriter, marketer. passionate about javascript and the open web. 
            mostly into react and functional stuff. always passionate about hummus.
          </Text>
          <Text is="h3" f4 py2>
            i work at
            <a href="https://klue.com">
              &nbsp;<Text is="span" bold css={linkStyles}>
                 klue
              </Text>
              </a>.
          </Text>
        </Box>
      </Box>
    );
  }
}
