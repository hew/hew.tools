open BsReactNavigation;

type route =
    | Cover
    | Story
    | Abilities
    | Conclusion;

type navigation = SwitchNavigatorWeb.navigation(route);
