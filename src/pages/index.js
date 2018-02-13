import React from 'react';

const Home = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>matthew jones</H1>
      <h2>ui developer + designer</h2>
      <P w={[1, 1 / 2]}>
        ex-copywriter, marketer. passionate about (compiling to) javascript and the open web.
        into react, reasonml/ocaml, and hummus.
      </P>
      <p>
        <a href="https://twitter.com/tahini">get in touch</a>
        <br />
      </p>
    </Box>
  </Container>
);

export default Home;
