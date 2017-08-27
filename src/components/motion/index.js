import { h, Component } from 'preact'
import { Box, Flex, Text, Color, Border, Heading } from 'axs'
import { Forks, Stars } from '../svg'
import { colors } from 'styles'
import { bind } from 'decko'
import { spring, Motion, presets } from 'preact-motion'
import anim from './utils.js'

export default class Animate extends Component {
  render ({type = 'o', start, end, rest}, {}) {
    const defaultStyle = { s: start }
    const style = { s: spring(end) }
    const _type = anim[type]
    return (
      <Motion
        defaultStyle={defaultStyle}
        style={style}
        onRest={rest}
      >
        {x =>
          <div style={_type(x.s)}>
            {this.props.children}
          </div>
        }
      </Motion>
    )
  }
}
