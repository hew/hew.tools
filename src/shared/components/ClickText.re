open BsReactNative;
open StyledFunctors.Primatives;
open Utils;

let component = ReasonReact.statelessComponent("ClickText");

let make = (~onPress, ~title, ~color="white", _children) => {
  ...component,
  render: _self =>
    <TouchableOpacity onPress={_evt => onPress()}>
      <T color> {title |> str} </T>
    </TouchableOpacity>,
};
