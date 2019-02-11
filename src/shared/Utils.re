open BsReactNative;
open Js.Promise;

/*
   ---------------------------------
   -------  ReasonReact/JSX ---------
   ---------------------------------
 */
let str = ReasonReact.string;
let sty = ReactDOMRe.Style.make;
let storageKey = "qup:token2";

module NullComponent = {
  let component = ReasonReact.statelessComponent("nullComponent");
  let make = (~headerProps as _, _children) => {
    ...component,
    render: _self => ReasonReact.null,
  };
};

