const axs = require('./axs')

const style = {
  display: 'flex'
}

const Flex = axs(style)('div')

// Flex.center = axs({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center'
// })('div')
//
// Flex.align = axs({
//   display: 'flex',
//   alignItems: 'center'
// })('div')
//
// Flex.justify = axs({
//   display: 'flex',
//   justifyContent: 'center'
// })('div')
//
// Flex.wrap = axs({
//   display: 'flex',
//   flexWrap: 'wrap'
// })('div')
//
// Flex.column = axs({
//   display: 'flex',
//   flexDirection: 'column'
// })('div')
//
// Flex.centerWrap = axs({
//   display: 'flex',
//   alignItems: 'center',
//   flexWrap: 'wrap'
// })('div')
//
// Flex.fill = axs({
//   display: 'flex',
//   flexGrow: '1'
// })('div')
//
// Flex.fillColumn = axs({
//   display: 'flex',
//   flexDirection: 'column',
//   flexGrow: '1'
// })('div')
//
// Flex.mobile = axs({
//   display: 'flex',
//   flexDirection: 'column',
//   "@media screen and (min-width:40em)": {
//     flexDirection: 'row'
//   }
// })('div')

module.exports = Flex
