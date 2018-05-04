import React from 'react';

const underline = {textDecoration: 'underline wavy rgb(46, 204, 64)'};

const NoPortFolio = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>no portfolio</H1>
      <Box w={[1, 2 / 3]}>
        <H2>at this time, I do not have a portfolio.</H2>
        <P>
          I might in the future, but I don't right now.
        </P>
        <H4>
          if you have not seen it yet, check out my{' '}
          <a href="https://github.com/hew">Github</a>.
        </H4>
      </Box>
    </Box>
  </Container>
);

export default NoPortFolio;
