open BsReactNative;

let avatar =
  <Image
    style=Styles.Media.avatar
    source={`Required(Packager.require("../assets/matt-explosion-bw-small.png"))}
  />;

let jsLogo =
  <Image
    style=Styles.Media.jsLogo
    source={`Required(Packager.require("../assets/js-explode.png"))}
  />;

let reasonLogo =
  <Image
    style=Styles.Media.reasonLogo
    source={`Required(Packager.require("../assets/reason-explode.png"))}
  />;

/*   <Image source={`URI(Image.imageURISource(~uri="", ()))} />; */
