open Utils;
open StyledFunctors.Primatives;
open State;
open BsReactNative;

let component = ReasonReact.statelessComponent("Contact");

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
            {"Coming Soon..." |> str}
          </T>
          <T m={`mt(8.)} f={`size(4.5)} center=true>
            {"YOUR PROJECT HERE" |> str}
          </T>
          <Box p={`py(8.)}> <Icons name="bolt" size=30 color="gray" /> </Box>
          <Btn
            onPress={
              _evt =>
                Js.Promise.(
                  Linking.openURL("https://www.notion.so/hew/Hire-Matthew-Jones-bf740054244d445093c3405ac4020ff5")
                  |> then_(_ => Js.log("opened link to freelance page") |> resolve)
                  |> ignore
                )
            }
            title="Freelance"
          />
          <Box m={`mt(4.)} />
          <Btn.Secondary
            onPress={
              _evt =>
                Js.Promise.(
                  Linking.openURL("https://github.com/hew/hew.tools")
                  |> then_(_ => Js.log("opened link to Github") |> resolve)
                  |> ignore
                )
            }
            title="View Source"
          />
          <T m={`mt(20.)} center=true>
            <T f={`size(1.0)}> {"Overengineered " |> str} </T>
            <T f={`size(0.8)}> {"and " |> str} </T>
            <T f={`size(1.0)}> {"Javascript & Reasonml " |> str} </T>
            <T f={`size(0.8)}> {"present " |> str} </T>
          </T>
          <T center=true>
            <T m={`mt(20.)} f={`size(1.0)}> {"Personal Site: 3" |> str} </T>
          </T>
          <T center=true>
            <T m={`mt(20.)} f={`size(0.8)}>
              {"In Association with " |> str}
            </T>
            <T m={`mt(20.)} f={`size(1.0)}>
              {"React Native Pictures " |> str}
            </T>
          </T>
          <T center=true>
            <T m={`mt(20.)} f={`size(0.8)}> {"a " |> str} </T>
            <T m={`mt(20.)} f={`size(1.0)}>
              {"Open Source Tech  " |> str}
            </T>
            <T m={`mt(20.)} f={`size(0.8)}> {"Production " |> str} </T>
          </T>
          <T center=true>
            <T f={`size(0.8)}> {"Starring " |> str} </T>
            <T f={`size(1.0)}> {"Matthew Jones  " |> str} </T>
            <T f={`size(0.8)}> {"and Introducing " |> str} </T>
            <T f={`size(1.0)}> {"'The Client' " |> str} </T>
          </T>
        </Flex>
      </Flex>;
  },
};
