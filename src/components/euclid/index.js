import { h, Component } from 'preact'
import { Box } from 'axs'
import throttle from 'lodash.throttle'
import styleTree from './util.js'
import { colors } from 'styles'
import { bind } from 'decko'
import { Motion, spring, presets } from 'preact-motion'

class Tree extends Component {
  constructor(props) {
    super(props);
    this.state = { anim: 99 }
    this.styles = styleTree(props.color)[props.pos]();
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ anim: (this.generateRandom()) })
    }, 330)
    this.automateMove()
  }
  @bind
  automateMove() {
    setInterval(() => {
      this.setState({ anim: (this.generateRandom()) })
    }, 3300)
  }
  generateRandom() {
    const i = Math.floor(Math.random() * 90 + 10);
    return i;
  }
  render({color, depth, pos}, {anim}) {
    let branch;
    if (this.props.depth > 0) {
      branch = (
        <div>
          <Tree 
            depth={depth - 1} 
            color={color + 1} 
            pos={'left'} 
          />
          <Tree 
            depth={depth - 1} 
            color={color + 1} 
            pos={'right'} 
          />
        </div>
      );
    }
    return (
      <Box 
        css={{
          backgroundColor: 
          `hsla(
            ${anim - color * 80}, 
            100%, 
            ${anim + color}%, 
            0.4
          )`
        }}
        style={{ ...this.styles }}>
        {branch}
      </Box>
    );
  }
}

export default Tree;

