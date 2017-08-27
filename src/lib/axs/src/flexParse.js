const _config = require('./config')

module.exports = (props = {}, config = _config) => {
  const next = {}
  const breaks = [ null, ...config.breakpoints ]
  const styles = breaks.map(b => ({}))

  // const parsed = shorthands(props)
  //
  // for (let key in parsed) {
  //   const val = parsed[key]
  //   if (!AXS_REG.test(key)) {
  //     next[key] = val
  //     continue
  //   }
  //
  //   if(AXS_FLEX_REG.test(key)) {
  //     console.log('beep beep')
  //     // next[key] = _flex(val)
  //   }
  //     
  //   const sx = parsers[key.charAt(0)]
  //
  //   getVal(sx(config))(val).forEach((v, i) => {
  //     styles[i][key] = v
  //   })
  // }

  next.css = styles.reduce((a, b, i) => Object.keys(b).length
    ? Object.assign(a, breaks[i] ? ({ [breaks[i]]: b }) : b)
    : a,
    (props.css || {}))

  if (!Object.keys(next.css).length) delete next.css

  return next
}
//
// const AXS_REG = /^(flex)/
// const SH_REG = /^[wmpfz][trblxy]?-?[0-9]?$/
// const shorthands = props => {
//   const next = {}
//   for (let key in props) {
//     const val = props[key]
//     if (!SH_REG.test(key)) {
//       next[key] = val
//       continue
//     }
//
//     const type = key.charAt(0)
//     const prop = properties[type]
//     const d = key.charAt(1)
//     const dirs = directions[d] || [ '' ]
//     const _flex = flex[d]
//     const n = val === true ? bval(key) : val
//
//     dirs.forEach(dir => {
//       next[prop + dir] = n
//     })
//
//     // _flex.forEach(f => {
//     //   next[prop + _flex]
//     // })
//
//   }
//   return next
// }
//
// const properties = {
//   w: 'width',
//   m: 'margin',
//   p: 'padding',
//   f: 'fontSize',
//   z: 'flex'
// }
//
// const directions = {
//   t: [ 'Top' ],
//   r: [ 'Right' ],
//   b: [ 'Bottom' ],
//   l: [ 'Left' ],
//   x: [ 'Left', 'Right' ],
//   y: [ 'Top', 'Bottom' ]
// }
//
// const flex = {
//   f: [ 'column' ]
// }
//
// const getVal = sx => val => Array.isArray(val)
//   ? val.map(v => v === null ? null : sx(v))
//   : [ sx(val) ]
//
// const num = n => typeof n === 'number' && !isNaN(n)
// const wx = config => n => !num(n) ? n : n > 1 ? n : (n * 100) + '%'
// const fx = config => val => config.typeScale[val] || val
// const bx = config => val => console.log('_____hello')
// const mpx = config => val => {
//   if (!num(val)) return val
//   const neg = val < 0
//   const i = Math.abs(val)
//   return (config.space[i] || i) * (neg ? -1 : 1)
// }
//
// const parsers = {
//   w: wx,
//   f: fx,
//   m: mpx,
//   p: mpx,
//   z: bx
// }
//
// const bval = key => parseInt(key.replace(/^[mpf][trblxy]?/, ''))
