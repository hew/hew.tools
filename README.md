# hew.tools

My personal website: [https://hew.tools](https://hew.tools).

## Technologies:

* Gatsby.js
* React (Preact Compat)
* Styled Components
* Styled System
* Built with [Paprika](https://github.com/hew/paprika)
* Optimized to Deploy to Netlify

## Using Styled System

Almost all of the site is a mixture of `<Box>` and `<Flex>` elements. Note the arrays for responsive properties.

```js
  // Row, 50% Columns
  <Flex wrap justify="center">
    <Box width={[1, 1/2]}>
      <P>
        Chickpeas.
      </P>
    </Box>
    <Box width={[1, 1/2]}>
      <P>
        Tahini.
      </P>
    </Box>
  </Flex>
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hew/hew.tools)
