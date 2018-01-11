import React from 'react';

const Home = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>matthew jones</H1>
      <h2>developer + designer</h2>
      <P w={[1, 1 / 2]}>
        ex-copywriter, marketer. passionate about javascript and the open web.
        into react, functional stuff, and hummus.
      </P>
      <p>
        <a href="https://twitter.com/tahini">get in touch</a>
        <br />
      </p>
    </Box>
  </Container>
);

export default Home;
