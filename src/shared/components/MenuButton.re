open BsReactNative; 
open StyledFunctors.Primatives;
open Utils;

let component = ReasonReact.statelessComponent(__MODULE__);

let make = (~onClick, _children) => {
  ...component,
  render: _ =>
    <Box>
      <Flex content=`right>
        <Flex p={`p(6.0)}>
          <TouchableOpacity
            onPress={() => onClick()}>
            /* <Icons name="menu" size=40 color=Styles.Palatte.black /> */
            <T>("menu" |> str)</T>
          </TouchableOpacity>
        </Flex>
      </Flex>
    </Box>
}
