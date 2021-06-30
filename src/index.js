/** @jsx jsx */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import ThemeProvider from './theme';
import Home from './home';
import Portfolio from './portfolio';
import githubLogo from '../assets/github.svg';
import twitterLogo from '../assets/twitter.svg';
import { jsx, Layout, Header, Main, Footer, Styled as s } from 'theme-ui';
import { Box } from '@theme-ui/components';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route path="/portfolio">
      <Portfolio navigate={route => window.history.push(route)} />
    </Route>
    <Route path="/">
      <Home navigate={route => window.history.push(route)} />
    </Route>
  </Switch>
);

const Navigation = () => (
  <nav sx={{ variant: 'layout.nav' }}>
    <s.ol>
      <s.li>
        <Box mr={4}>
          <span sx={{ variant: 'text.link' }}>
            <Link to="/">Home</Link>
          </span>
        </Box>
      </s.li>
      <s.li>
        <Box mr={4}>
          <span sx={{ variant: 'text.link' }}>
            <Link to="/portfolio">Projects</Link>
          </span>
        </Box>
      </s.li>
    </s.ol>
  </nav>
);

const Social = () => (
  <nav sx={{ variant: 'layout.nav' }}>
    <s.ol>
      <s.li>
        <Box mr={4}>
          <a href="https://twitter.com/tahini" aria-label="Twitter">
            <img src={twitterLogo} sx={{ variant: 'icon' }} alt="Twitter Logo" />
          </a>
        </Box>
      </s.li>
      <s.li>
        <Box mr={4}>
          <a href="https://github.com/hew" aria-label="Github">
            <img src={githubLogo} sx={{ variant: 'icon' }} alt="Github Logo" />
          </a>
        </Box>
      </s.li>
    </s.ol>
  </nav>
);

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Router>
          <Header>
            <Navigation />
          </Header>
          <Main>
            <Routes />
          </Main>
          <Footer>
            <Social />
          </Footer>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
