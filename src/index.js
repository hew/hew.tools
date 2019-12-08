/** @jsx jsx */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {jsx, Layout, Header} from 'theme-ui';
import {Box, Flex, Text} from '@theme-ui/components';
import {BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory} from 'react-router-dom';
import ThemeProvider from './theme';
import Home from './home';
import About from './about';
import Example from './example';
import {useTransition, animated} from 'react-spring';

import {Ol, Li, Section, Main, Nav, Footer} from './elements';

const AnimatedRoutes = () => {
  const location = useLocation();
  const history = useHistory();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: (previous) => {
      console.log(previous);
      return {
        opacity: 0,
        transform: `translate3d(${
          previous.pathname === '/' || previous.pathname === '/home' ? '100%' : '-100%'
        },0,0)`
      };
    },
    enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
    leave: (previous) => {
      return {
        opacity: 0,
        transform: `translate3d(${
          previous.pathname === '/' || previous.pathname === '/home' ? '-100%' : '100%'
        },0,0)`
      };
    }
  });
  const baseAnimatedStyles = {
    willChange: 'transform',
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
    top: '50px',
    bottom: '50px',
  };
  return transitions.map(({item: location, props, key}, idx) => (
    <animated.div
      key={key}
      style={{
        ...props,
        ...baseAnimatedStyles,
        zIndex: 1 + idx
      }}>
      <Switch>
        <Route path="/home">
          <Home navigate={(route) => history.push(route)} />
        </Route>
        <Route path="/about">
          <About navigate={(route) => history.push(route)} />
        </Route>
        <Route path="/">
          <Home navigate={(route) => history.push(route)} />
        </Route>
      </Switch>
    </animated.div>
  ));
};

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Router>
          <Header px={2}>
            <Nav>
              <Ol>
                <Li>
                  <Box px={3} py={2}>
                    <Text variant="link">
                      <Link to="/about">About</Link>
                    </Text>
                  </Box>
                </Li>
                <Li>
                  <Box px={3} py={2}>
                    <Text variant="link">
                      <Link to="/home">Home</Link>
                    </Text>
                  </Box>
                </Li>
              </Ol>
            </Nav>
          </Header>
          <main sx={{variant: 'layout.main'}}>
            <Section>
              <AnimatedRoutes />
            </Section>
          </main>
          <Footer>beep</Footer>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
