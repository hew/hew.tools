/** @jsx jsx */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {jsx, Layout, Styled as s} from 'theme-ui';
import {Box, Text} from '@theme-ui/components';
import {BrowserRouter as Router, Switch, Route, useLocation, useHistory} from 'react-router-dom';
import ThemeProvider from './theme';
import Home from './home';
import About from './about';
import Wavy from './wavy';
import {useTransition, animated} from 'react-spring';

import {Ol, Li, Section, Main, Header, Nav, Footer, Link} from './elements';

const Navigation = () => (
  <Nav>
    <Ol>
      <Li>
        <Box>
          <Text variant="link">
            <Link a="/home">Home</Link>
          </Text>
        </Box>
      </Li>
      <Li>
        <Box mr={4}>
          <Text variant="link">
            <Link a="/about">About</Link>
          </Text>
        </Box>
      </Li>
    </Ol>
  </Nav>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  const history = useHistory();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: (previous) => {
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
    height: '100%'
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
          <s.h1>home</s.h1>
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
          <Header>
            {/* <Navigation />*/}
          </Header>
          <Main>
            <Section>
              <Home />
            </Section>
            <Section>
              <Wavy />
              <div sx={{maxWidth: 500, textAlign: 'center'}}>
                <s.h1>About Me</s.h1>
                <s.p sx={{mb: 5}}>
                  I'm a software developer from Vancouver, Canada. I've been building for the web/mobile for the
                  past four years. I'm big into Javascript, Reason, and Rust. Outside of work, I love to watch
                  b-ball + news, and hang out with my dog, Winston.
                </s.p>
              </div>
            </Section>
            {/*
              <Section>
              <AnimatedRoutes />
              </Section>
            */}
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
