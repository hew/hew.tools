import React from 'react';

const Home = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>matthew jones</H1>
      <h2>product engineer</h2>
      <P w={[1, 1 / 2]}>
        CTO @ <a href="https://protohack.com">protohack</a> & <a href="https://startupleague.io">startup league</a>.
      </P>
      <p>
        <a href="https://twitter.com/tahini">get in touch</a>
        <br />
      </p>
    </Box>
  </Container>
);

export default Home;
