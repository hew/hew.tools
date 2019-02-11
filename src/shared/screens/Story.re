open Utils;
open StyledFunctors.Primatives;
open State;

let copy = "He's a generalist mad scientist on a mission: type-safe, cross-platform UI code.";
let copy2 = "An ex-copywriter, his programming started one fateful night when he ate an unassuming jar of radioactive hummus.";

let component = ReasonReact.statelessComponent("Story");

let make = (~navigation: Routes.navigation, _children) => {
  ...component,
  render: (_) => {
    let%Epitath showModal = children =>
      <ModalStore.Consumer render=children />;

    showModal ?
      <Menu navigation /> :
      <Flex grow=true>
        <MenuButton
          onClick={() => ModalStore.updateState(Some(true))}
        />
        <Flex content=`centerX p={`px(8.)} grow=true>
        <Animatable animation="tada">
          <Box p={`py(8.0)}> Media.avatar </Box>
        </Animatable>
          <T p={`py(4.)} f={`size(1.7)} center=true> {copy |> str} </T>
          <T p={`py(4.)} f={`size(1.7)} center=true> {copy2 |> str} </T>
          <Box m={`mt(8.0)} />
          <Btn onPress={_evt => navigation.navigate(Abilities)} title="See Abilities" />
        </Flex>
      </Flex>;
  },
};
