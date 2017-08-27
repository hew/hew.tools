import { h, Component } from "preact";
import { Text, Flex } from 'axs';
import { bind } from 'decko'
import { Link } from 'preact-router';

const height = h => ({ height: h ? "auto" : 0 });
const flex = { flexDirection: "row" };

const linkStyles = {
  display: "flex",
  cursor: "pointer",
  height: "100%",
  whitespace: "no-wrap",
  "@media screen and (min-width:40em)": {
    justifyContent: "center"
  }
};

const navItems = {
  overflow: "hidden",
  flexDirection: "column",
  "@media(min-width: 40em)": { flexDirection: "row" }
};

export default class Items extends Component {
  render({ links = [], toggle, right }) {
    return (
      <Flex css={navItems} style={right ? flex : height(toggle)}>
        {links.map(x =>
          <Text is="div" bold center py2 px2 css={linkStyles}>
            {x.ext 
              ? <a onClick={() => window.location = `${x.link}`}>{x.text}</a>
              : <Link href={`${x.link}`}>{x.text}</Link>
             }
          </Text> 
        )}
      </Flex>
    )
  }
}
