import React from 'react';

const underline = {textDecoration: `underline wavy ${color.purple[0]}`};

const NoPortFolio = () => (
  <Container>
    <Box>
      <H1 color={color.purple[0]}>no folio</H1>
      <Box w={[1, 2 / 3]}>
        <H2>at this time, I do <Span style={underline}>not</Span> have a portfolio.</H2>
        <P>
          I might in the future, but I don't right now.
        </P>
        <H4>
          check out my{' '}
          <a href="https://github.com/hew">Github</a>, if you want.
        </H4>
      </Box>
    </Box>
  </Container>
);

export default NoPortFolio;
