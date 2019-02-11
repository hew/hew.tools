open BsReactNative;
open StyledFunctors.Primatives;
open State;
open Utils;

let component = ReasonReact.statelessComponent(__MODULE__);

let make = (_children, ~navigation: Routes.navigation) => {
  ...component,
  render: _ => {
    let handle = route => {
      ModalStore.updateState(Some(false));
      navigation.navigate(route);
    };
    <Flex grow=true>
      <Box>
        <Flex content=`right>
          <Box p={`p(6.)}>
            <TouchableOpacity
              onPress={_evt => ModalStore.updateState(Some(false))}>
              /* <Icons name="cross" size=30 color=Palatte.darkBlue /> */
               <T> {"Close" |> str} </T> </TouchableOpacity>
          </Box>
        </Flex>
      </Box>
      <Flex m={`mt(4.)} grow=true content=`centerX>
        <Animatable animation="zoomIn" duration=400>
          <TouchableOpacity onPress={_evt => handle(Cover)}>
            <T p={`py(6.0)} f={`size(3.0)}> {"Cover" |> str} </T>
          </TouchableOpacity>
        </Animatable>
        <Animatable animation="zoomIn" delay=100 duration=300>
          <TouchableOpacity onPress={_evt => handle(Story)}>
            <T p={`py(6.0)} f={`size(3.0)}> {"Story" |> str} </T>
          </TouchableOpacity>
        </Animatable>
        <Animatable animation="zoomIn" delay=200 duration=300>
          <TouchableOpacity onPress={_ => handle(Abilities)}>
            <T p={`py(6.0)} f={`size(3.0)}> {"Abilities" |> str} </T>
          </TouchableOpacity>
        </Animatable>
        <Animatable animation="zoomIn" delay=300 duration=300>
          <TouchableOpacity onPress={_ => handle(Conclusion)}>
            <T p={`py(6.0)} f={`size(3.0)}> {"Conclusion" |> str} </T>
          </TouchableOpacity>
        </Animatable>
      </Flex>
    </Flex>;
  },
};
