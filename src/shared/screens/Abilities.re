open Utils;
open StyledFunctors.Primatives;
open State;

let component = ReasonReact.statelessComponent("Abilities");

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
          <Box m={`mt(16.)} />
          <Animatable animation="tada"> Media.jsLogo </Animatable>
          <T m={`mt(8.)} f={`size(1.5)} center=true>
            {"Amplify * Feathers * Node * React * React Native * State Charts * Serverless * UI" |> str}
          </T>
          <Box m={`mt(16.)} />
          <Animatable animation="tada" delay=200>
            Media.reasonLogo
          </Animatable>
          <T m={`mt(8.)} f={`size(1.5)} center=true>
            {"Design Systems * Interop * Reason React * Reason Native * UI" |> str}
          </T>
          <Box m={`mt(18.0)} />
          <Btn
            onPress={_evt => navigation.navigate(Conclusion)}
            title="Conclusion"
          />
        </Flex>
      </Flex>;
  },
};
