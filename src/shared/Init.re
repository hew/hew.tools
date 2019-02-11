open BsReactNative;

[@bs.deriving abstract]
type customTextProps = {
  underlineColorAndroid: string,
  style: BsReactNative.Style.t,
};

[@bs.module "react-native-global-props"]
external setCustomText: customTextProps => unit = "";

[@bs.deriving abstract]
type customTextInputProps = {underlineColorAndroid: string};

[@bs.module "react-native-global-props"]
external setCustomTextInput: customTextInputProps => unit = "";

let make = () => {
  setCustomText(
    customTextProps(
      ~underlineColorAndroid="#00000000",
      ~style=Style.style([Style.fontFamily("Secular One")]),
    ),
  );

  setCustomTextInput(
    customTextInputProps(~underlineColorAndroid="#00000000"),
  );
};
