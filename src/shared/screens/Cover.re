open Utils;
open StyledFunctors.Primatives;
open State;

let component = ReasonReact.statelessComponent("Home");

let make = (~navigation: Routes.navigation, _children) => {
  ...component,
  render: _ => {
    let%Epitath showModal = children =>
      <ModalStore.Consumer render=children />;

    showModal ?
      <Menu navigation /> :
      <Flex grow=true>
        <MenuButton onClick={() => ModalStore.updateState(Some(true))} />
        <Flex content=`centerX p={`px(8.)} grow=true>
          <T m={`mt(20.)} f={`size(1.7)} center=true>
            {"Presented By:" |> str}
          </T>
          <T f={`size(1.7)} center=true> {"Javascript & Reason" |> str} </T>
          <Box p={`py(8.)}> <Icons name="bolt" size=30 color="gray" /> </Box>
          <Bold f={`size(4.8)} center=true> {"Matthew Jones" |> str} </Bold>
          <T p={`py(8.)} f={`size(1.4)} center=true> {"in" |> str} </T>
          <Bold f={`size(3.)} center=true> {"Personal Site: 4" |> str} </Bold>
          <T p={`py(3.)} center=true color="gray">
            {"(This time it's personal)" |> str}
          </T>
          <Box p={`py(8.)} />
          <Btn
            onPress={_evt => navigation.navigate(Story)}
            title="Read More"
          />
        </Flex>
      </Flex>;
  },
};
