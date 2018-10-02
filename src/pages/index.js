import React from 'react';

const Home = () => (
  <Container>
    <Box>
      <H1 f={7} color={color.purple[0]}>
        matthew jones
      </H1>
      <h2 w={[1, 1 / 2]}>javascript and reasonml generalist</h2>
      <P mt={4} mb={5} w={[1, 2 / 3]}>
        cto @{' '}
        <a href="https://startupleague.io">startupleague.io</a>. hummus, basketball,
        and bad jokes, all the way down. hailing from Vancouver, Canada. If you want, check out some{' '}
        <a href="https://github.com/hew">open source</a>, or get in touch{' '}
        <a href="https://twitter.com/tahini">on twitter.</a>
      </P>
    </Box>
  </Container>
);

export default Home;
