import { breakpoints } from 'styles'

export const square = {
  width: "333px",
  height: "333px",
  border: "2px dotted black",
  diplay: "block",
  position: "absolute",
  filter: "blur(2px)",
  opacity: 0.6,
  left: "1em",
  pointerEvents: 'none',
  borderColor: "#969595",
  [breakpoints[0]]: {
    width: "444px",
    height: "444px",
  },
  [breakpoints[1]]: {
    width: "555px",
    height: "555px",
  },
  [breakpoints[2]]: {
    width: "666px",
    height: "666px",
  }
};

