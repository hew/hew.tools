import "css-wipe";
import { glamor } from "axs";
import { colors } from "./index";
import { buildFontStack } from "./util.js";
const { css } = glamor;
const s = css.global;

const hx = ["h1", "h2", "h3", "h4", "h5", "h6", "html"];
hx.map(x => s(x, { 
  fontFamily: buildFontStack(), 
  color: colors.black, 
  textTransform: 'lowercase',
  lineHeight: 1.3
}));

// Links, etc
s("a", {
  color: colors.black,
  textDecoration: "none"
});

s("body", {
  minHeight: "100vh",
  display: "flex",
  backgroundImage: `linear-gradient(120deg, #fff 0%, #eaecec 100%) !important`,
});

export const flicker = css.keyframes({
    '0%': { opacity: 0 },
    '12.5%': { opacity: .25 },
    '25%': { opacity: 0 },
    '37.5%': { opacity: 0 },
    '50%': { opacity: .75 },
    '62.5%': { opacity: 0 },
    '75%': { opacity: 1 },
    '87.5%': { opacity: .5 },
    'to': { opacity: 1 }
})
