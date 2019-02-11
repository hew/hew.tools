open BsReactNative;
open StyledFunctors.Primatives;

let component = ReasonReact.statelessComponent("Bold");

let make = (~f, ~center, ~style as styl=Style.style([]), children) => {
  ...component,
  render: _ => <T f center style=Style.combine(Styles.Font.fontBoldItalic, styl)> ...children </T>,
};
