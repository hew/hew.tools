[@bs.module "react-native-animatable"]
external view: ReasonReact.reactClass = "View";

  let make =
      (
        ~animation: string,
        ~delay: option(int)=?,
        ~duration: option(int)=?
      ) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=view,
      ~props=
        Js.Nullable.{
          "animation": animation,
          "delay": fromOption(delay),
          "duration": fromOption(duration)
        },
    );

