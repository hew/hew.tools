
const breakpoints = [
  40,
  52,
  64
].map(n => `@media screen and (min-width:${n}em)`)

const space = [
  0, 8, 16, 32, 64
]

const typeScale = [
  64, 48, 32, 24, 16, 14, 12
]

const flex = {
  mobile: ['column', 'row'],
}

const radius = 4

module.exports = {
  breakpoints,
  space,
  typeScale,
  radius,
  flex
}

//
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
