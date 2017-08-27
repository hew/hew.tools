import { h, Component } from "preact";
import { Box, Flex, Text, Color, Border, Heading } from "axs";
import { Forks, Stars } from "../svg";
import { bind } from "decko";
import { spring, Motion, presets } from "preact-motion";

const stiff = presets;
const styles = {
  height: "100px",
  flexDirection: "column"
};

export default class Card extends Component {
  render({ name, desc, href, stars, forks }, _, { axs }) {
    return (
      <a href={href}>
        <Box mr4 mb3>
          <div style={styles}>
            <Text is="h5" bold fontSize={[5, 4]} width={1} py1>
              {this.props.name}
            </Text>
            <Text is="h5" fontSize={5}>
              {this.props.desc}
            </Text>
            <Flex py2>
              <Flex mr1>
                <Box mr1>
                  <Stars fill={axs.colors.gray4} />
                </Box>
                <span>
                  {this.props.stars}
                </span>
              </Flex>
              <Flex ml1>
                <Box mr1 css={{ transform: "translateY(2px)" }}>
                  <Forks fill={axs.colors.gray4} />
                </Box>
                <span>
                  {this.props.forks}
                </span>
              </Flex>
            </Flex>
          </div>
        </Box>
      </a>
    );
  }
}
