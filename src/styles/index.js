import palx from "palx";
import { flattenColors } from "./util";
import ms from "simple-modular-scale";
export flex from "./flex";

// COLORS
const blue = "#07c";
export const colors = flattenColors(palx(blue));
colors.white = "#fff";

// BREAKPOINTS
export const breaks = [40, 52, 64];
export const breakpoints = breaks.map(
  n => `@media(min-width:${n}em)`
);
export const isBreak = (b) => window.matchMedia(`(min-width: ${b}em)`).matches ? true : false;

// SPACE
export const space = [0, 8, 16, 32, 64];

// TYPE
export const typeScale = ms({
  base: 16,
  ratios: [3 / 2, 4 / 3],
  length: 6
}).reverse();
// export const typeScale = [
//   64, 48, 32, 24, 16, 14, 12
// ]

// Other
export const container = { 
  width: "100%", maxWidth: "88em"
};

export const radius = 4;


export default {
  colors,
  breakpoints,
  space,
  typeScale,
  radius,
  container
};
