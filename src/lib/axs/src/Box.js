const axs = require('./axs')
const Box = axs()('div')

Box.container = axs({
  maxWidth: '84em',
  margin: '0 auto',
  width: '100%'
})('div')

module.exports = Box
