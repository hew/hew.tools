open BsReactNavigation;

open Routes;

module Stack =
  SwitchNavigatorWeb.Create({
    open SwitchNavigatorWeb;

    type route = Routes.route;

    let initialRoute = Cover;

    let getScreen = (route, navigation) =>
      switch (route) {
      | Cover => (<Cover navigation />, screenOptions(~title="Cover", ()))
      | Story => (<Story navigation />, screenOptions(~title="Story", ()))
      | Abilities => (<Abilities navigation />, screenOptions(~title="Abilities", ()))
      | Conclusion => (<Conclusion navigation />, screenOptions(~title="Conclusion", ()))
      };
  });


let app = Stack.render;
