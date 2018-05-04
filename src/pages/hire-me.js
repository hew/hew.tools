import React from 'react';

const underline = {textDecoration: `underline wavy ${color.purple[0]}`};

const HireMe = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>hire me</H1>
      <Box w={[1, 2 / 3]}>
        <h2>about me</h2>
        <P>
          i have been writing software for the past three years, mostly
          javascript: Node, React, React Native, and Reason/OCaml. most of my
          time currently is spent building{' '}
          <a href="http://startupleague.io">startupleague.io</a>, where I am one
          of the co-founders and CTO.
        </P>
        <P>
          I hack on <a href="https://github.com/hew">open source</a> and{' '}
          <a href="https://medium.com/@tahini">write</a> stuff in my spare time.
          I also do freelance, which is probably why you are here.
        </P>

        <h2>areas of specialty</h2>

        <P>
          {/* Core */}
          <Span fontWeight="bold" style={underline}>
            Core
          </Span>: my core skillset is UI development: fetching data, mapping
          that data to a list. Placing boxes within other boxes - sometimes
          centering them. State architecture stores. All that fun stuff.
          {/* / */}
        </P>

        <P>
          {/* Animation */}
          <Span fontWeight="bold">Animation</Span>: my agency experience often
          saw me working with web animations (and perfing them). This in-part
          lead to my{' '}
          <a href="https://github.com/hew/react-scroll-horizontal">
            horizontal scroll library
          </a>{' '}
          for react. I specialize in react animations, but I have experience
          with all the major libraies: GSAP, Velocity, etc.
          {/* / */}
        </P>

        <P>
          {/* Node */}
          <Span fontWeight="bold">Node</Span>: in my current role, I&apos;m
          building a node-based game server (don't worry; it's not that type of
          game). As far as libraries go, I&apos;m particularly proficient with
          the <a href="https://feathersjs.com/">feathers framework</a> as well
          as <a href="https://socket.io">socket.io</a>. Anything{' '}
          <a href="https://expressjs.com/">express-based</a>, really.
          {/* / */}
        </P>

        <P>
          {/* Salesforce */}
          <Span fontWeight="bold">Salesforce</Span>: while working for{' '}
          <a href="https://klue.com">klue</a>, I integrated with Salesforce to
          create a number of different user-facing features. This was mostly
          done using the Canvas API, but I am familiar with all of them. I also
          created{' '}
          <a href="https://github.com/hew/jsforce-connect">jsforce-connect</a> .
          {/* / */}
        </P>

        <P>
          {/* Style Systems */}
          <Span fontWeight="bold">Style Systems</Span>: I've been hacking and
          thinking on styling systems ever since I first started dabbling with
          CSS as a web marketer. I specialize in atomic-based systems with an
          emphasis on maintainability and performance.{' '}
          <a href="https://github.com/hew/_min">_min</a> is one such example.
          {/* / */}
        </P>

        <P>
          {/* React (Native) */}
          <Span fontWeight="bold">React (Native)</Span>: I have been writing
          react almost daily since I got into software development. I have a few{' '}
          <a href="https://github.com/hew?utf8=%E2%9C%93&tab=repositories&q=react&type=&language=">
            react-based
          </a>, open source libraries and more recently have been
          <a href="https://github.com/hew/reasonable-website">
            {' '}
            exploring using reason
          </a>{' '}
          to generate react code.{' '}
          <a href="http://startupleague.io">startupleague.io</a>'s core product
          front end is written in react-native, and uses <a href="https://expo.io/">expo</a> extensively.
          {/* / */}
        </P>

        <P>
          {/* Wordpress / Static Site */}
          <Span fontWeight="bold">Wordpress/Static CMS</Span>: We can build you
          a Wordpress website. it might be the case that a{' '}
          <a href="https://jamstack.org/">static CMS</a> site would be better
          (and cheaper). We can talk it over.
          {/* / */}
        </P>
      </Box>
      <Flex align='center'>
      <H2>
        <a href="/resume">My resume</a>
      </H2>
      <H4 ml={2}>(<a href="https://github.com/hew/fresh-resume-theme">theme</a>)</H4>
      </Flex>
      <H2 mb={4}>
        <a href="mailto:matt@hew.tools">Let&apos;s work together.</a>
      </H2>
    </Box>
  </Container>
);

export default HireMe;
