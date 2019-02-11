open BsReactNative;
open Style;

[@bs.module "react-native-responsive-fontsize"]
external rf: float => float = "default";

module Palatte = {
  let purple = "rgba(120, 49, 162, 1.0)";
  let white = "white";
  let black = "black";
};

module Color = {
  /* color */
  let purple = style([color(String(Palatte.purple))]);
  let white = style([color(String(Palatte.white))]);
  /* bg */
  let purpleBg = style([backgroundColor(String(Palatte.purple))]);
  let blackBg = style([backgroundColor(String(Palatte.black))]);
};

module Font = {
  let textCenter = style([textAlign(Center)]);
  let serif = style([fontFamily("WitmanDisplayBold")]);
  let fontWeightNormal = style([fontWeight(`Normal)]);
  let fontWeightBold = style([fontWeight(`Bold)]);
  let fontItalic = style([fontStyle(Italic)]);
  let fontBoldItalic = style([fontWeight(`_900), fontStyle(Italic)]);

  let opacity50 = style([opacity(Float(50.))]);
  let opacity30 = style([opacity(Float(30.))]);
};


module Media = {
  let avatar = style([width(Pt(250.)), height(Pt(175.))]);
  let jsLogo = style([width(Pt(150.)), height(Pt(115.))]);
  let reasonLogo = style([width(Pt(150.)), height(Pt(115.))]);
}

/* Form Elements  */
/* let input = */
/*   style([ */
/*     backgroundColor(String(Palatte.purpleDarkNew)), */
/*     borderWidth(2.), */
/*     borderColor(String(Palatte.purpleDarkNew)), */
/*     borderRadius(4.), */
/*     paddingHorizontal(Pt(12.)), */
/*     paddingVertical(Pt(6.)), */
/*     minHeight(Pt(36.)), */
/*   ]); */

