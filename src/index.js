/** @jsx jsx */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {jsx, Layout, Container, Header, Main, Footer, Styled as s} from 'theme-ui';
import {Box, Text} from '@theme-ui/components';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import ThemeProvider from './theme';
import Head from './head'
import Home from './home';
import About from './about';
import Portfolio from './portfolio';

const Navigation = () => (
  <nav sx={{variant: 'layout.nav'}}>
    <s.ol>
      <s.li>
        <Box px={2}>
          <Text variant="link">
            <Link to="/home">Home</Link>
          </Text>
        </Box>
      </s.li>
      <s.li>
        <Box px={2}>
          <Text variant="link">
            <Link to="/about">About</Link>
          </Text>
        </Box>
      </s.li>
      <s.li>
        <Box px={2} mr={4}>
          <Text variant="link">
            <Link to="/portfolio">Portfolio</Link>
          </Text>
        </Box>
      </s.li>
    </s.ol>
  </nav>
);

const Routes = () => {
  return (
    <Switch>
      <Route path="/home">
        <Home navigate={(route) => history.push(route)} />
      </Route>
      <Route path="/about">
        <About navigate={(route) => history.push(route)} />
      </Route>
      <Route path="/portfolio">
        <Portfolio navigate={(route) => history.push(route)} />
      </Route>
      <Route path="/">
        <Home navigate={(route) => history.push(route)} />
      </Route>
    </Switch>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Head />
      <Layout>
          <Router>
            <Header>
              <Navigation />
            </Header>
            <Main>
                <Routes />
            </Main>
            <Footer>
              <s.a sx={{px: 4}} href="https://github.com/hew/hew.tools">
                Source
              </s.a>
            </Footer>
          </Router>
      </Layout>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
