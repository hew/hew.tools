export const transformX = (x) => { return { willChange: `transform`, transform: `translateX(${x}em)` } }
export const transformY = (y) => { return { willChange: `transform`, transform: `translateX(${y}em)` } }
export const transformXO = (x) => { return { willChange: `transform opacity`, transform: `translateX(${x}em)`, opacity: o } }
export const transformYO = (y) => { return { willChange: `transform opacity`, transform: `translateX(${y}em)`, opacity: o } }
export const opacity = (o) => { return { willChange: `opacity`, opacity: o } }


export default {
  x: transformX,
  y: transformY,
  o: opacity,
  xo: transformXO,
  yo: transformYO,
}
