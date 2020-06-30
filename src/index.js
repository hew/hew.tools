/** @jsx jsx */
import 'babel-polyfill'
import ReactDOM from 'react-dom'
import {jsx, Layout, Header, Main, Footer, Styled as s} from 'theme-ui'
import {Box, Text} from '@theme-ui/components'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import ThemeProvider from './theme'
import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import githubLogo from '../assets/github.svg';
import twitterLogo from '../assets/twitter.svg';

const Navigation = () => (
  <nav sx={{variant: 'layout.nav'}}>
    <s.ol>
      <s.li>
        <Box px={2}>
          <span sx={{variant: 'text.link'}}>
            <Link to="/home">Home</Link>
          </span>
        </Box>
      </s.li>
      <s.li>
        <Box px={2}>
          <span sx={{variant: 'text.link'}}>
            <Link to="/about">About</Link>
          </span>
        </Box>
      </s.li>
      <s.li>
        <Box px={2} mr={4}>
          <span sx={{variant: 'text.link'}}>
            <Link to="/portfolio">Projects</Link>
          </span>
        </Box>
      </s.li>
    </s.ol>
  </nav>
);

const Routes = () => (
  <Switch>
    <Route path="/home">
      <Home navigate={route => window.history.push(route)} />
    </Route>
    <Route path="/about">
      <About navigate={route => window.history.push(route)} />
    </Route>
    <Route path="/portfolio">
      <Portfolio navigate={route => window.history.push(route)} />
    </Route>
    <Route path="/">
      <Home navigate={route => window.history.push(route)} />
    </Route>
  </Switch>
)

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
            <span sx={{mr: 3}}>
              <a href="https://twitter.com/tahini">
                <img src={twitterLogo} sx={{variant: 'icon'}} />
              </a>
            </span>
            <span sx={{mr: 4}}>
              <a href="https://github.com/hew">
                <img src={githubLogo} sx={{variant: 'icon'}} />
              </a>
            </span>
          </Footer>
        </Router>
      </Layout>
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
