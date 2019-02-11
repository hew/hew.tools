[@bs.module "react-native-vector-icons/FontAwesome"]
external fontAwesome: ReasonReact.reactClass = "default";

let make = (~name: string, ~size: int, ~color: string) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=fontAwesome,
    ~props={"name": name, "size": size, "color": color},
  );
