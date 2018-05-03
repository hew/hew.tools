import React from 'react';

const Home = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>hire me</H1>
      <Box w={[1, 2 / 3]}>
        <h2>about me</h2>
        <P>
          i have been programming for close to 3 years, mostly
          in: Node, React, React Native, and Reason/OCaml. i love solving
          product-related problems, and most of my time currently is spent
          building <a href="http://startupleague.io">startupleague.io</a>, where
          I am the co-founder and CTO.
        </P>
        <P>
          in my personal time, i play basketball, walk my dog, and hack on{' '}
          <a href="https://github.com/hew">open source</a>.
        </P>

        <h2>areas of specialty</h2>
        <P>
          {/* Animation */}
          <Span fontWeight="bold">Animation</Span>: my agency experience often
          saw me working with web animations (and perfing them). This in-part
          lead to my
          {' '} <a href="https://github.com/hew/react-scroll-horizontal">
            horizontal scroll library
          </a> for react.
          {/* / */}
        </P>

        <P>
          {/* Salesforce */}
          <Span fontWeight="bold">Salesforce</Span>: while working for{' '}
          <a href="https://klue.com">klue</a>, I integrated with Salesforce 
          to create a number of different react-based, user-facing features. 
          I also created
          {' '}
          <a href="https://github.com/hew/jsforce-connect">
            jsforce-connect
          </a>{' '}
          during this time.
          {/* / */}
        </P>

        <P>
          {/* React (Native) */}
          <Span fontWeight="bold">React (Native)</Span>: I love React, and have
          been writing it basically since I got into software development. I
          have more than a few
          {' '} <a href="https://github.com/hew?utf8=%E2%9C%93&tab=repositories&q=react&type=&language=">
            react-based
          </a>, open source libraries and more recently have been
          <a href="https://github.com/hew/reasonable-website">{' '}
            exploring using reason
          </a>{' '}
          to generate react code.
          {/* / */}
        </P>

      </Box>
      <H2 mt={3}><a href="mailto:matt@hew.tools">Let&apos;s work together.</a></H2>
    </Box>
  </Container>
);

export default Home;
