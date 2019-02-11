open BsReactNative;
open Utils;
open StyledFunctors.Primatives;

module S = {
  open Style;
  let opacity = style([width(Pct(100.)), height(Pct(100.))]);
  let buttonText =
    style([
      color(String(Styles.Palatte.white)),
      display(Flex),
      justifyContent(Center),
      alignItems(Center),
      textAlign(Center),
      height(Pct(100.)),
      width(Pct(100.)),
    ]);
  let button =
    style([
      backgroundColor(String(Styles.Palatte.black)),
      borderWidth(2.),
      /* borderColor(String(Styles.Palatte.black)), */
      borderRadius(6.),
      width(Pct(70.)),
      height(Pt(40.)),
    ]);

  let buttonTextSecondary =
    style([
      color(String(Styles.Palatte.black)),
      display(Flex),
      justifyContent(Center),
      alignItems(Center),
      textAlign(Center),
      height(Pct(100.)),
      width(Pct(100.)),
    ]);

  let buttonSecondary =
    style([
      /* backgroundColor(String(Styles.Palatte.black)), */
      borderWidth(2.),
      borderColor(String(Styles.Palatte.black)),
      borderRadius(6.),
      width(Pct(70.)),
      height(Pt(40.)),
    ]);
};

let component = ReasonReact.statelessComponent("Button");

let make = (_children, ~onPress, ~title) => {
  ...component,
  render: _self =>
    <Flex content=`center style=S.button>
      <TouchableOpacity onPress style=S.opacity>
        <Text style=S.buttonText> {title |> str} </Text>
      </TouchableOpacity>
    </Flex>,
};

module Secondary = {
  let component = ReasonReact.statelessComponent("ButtonSecondary");

  let make = (_children, ~onPress, ~title) => {
    ...component,
    render: _self =>
      <Flex content=`center style=S.buttonSecondary>
        <TouchableOpacity onPress style=S.opacity>
          <Text style=S.buttonTextSecondary> {title |> str} </Text>
        </TouchableOpacity>
      </Flex>,
  };
};
