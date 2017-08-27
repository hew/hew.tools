import { h, Component } from "preact";
import { Router, Match } from "preact-router";
import { Flex, Box } from "axs";
import { container } from "styles";
import "../styles/global";

import Header from "./header";
import Home from "./home";
import About from "./about";
import Writing from "./writing";
import Footer from "./footer";
import OpenSource from "./open-source";
import Hire from "./hire";

const Site = ({ ...props }) =>
  <Flex w={1} css={{ flexDirection: "column", flex: 1 }}>
    {props.children}
  </Flex>;

const Content = ({ ...props }) =>
  <Flex px={[3, 4]}  css={{ flex: 1, ...container  }}>
    {props.children}
  </Flex>;

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      home: false
    };
  }
  handleRoute = e => {
    this.currentUrl = e.url;
    this.currentUrl === "/"
      ? this.setState({ home: true })
      : this.setState({ home: false });
  };
  render(_, { home }, { links, style }) {
    return (
      <Site>
        <Header links={links.headerLinks} />
        <Content>
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <About path="/about" />
            <OpenSource path="/os" />
            <Writing path="/writing" />
            <Hire path="/hire" />
          </Router>
        </Content>
        {!home && <Footer right={true} links={links.footerLinks} />}
      </Site>
    );
  }
}
