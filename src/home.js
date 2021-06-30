/** @jsx jsx */
import React from 'react'; // required for fragments
import { jsx, Container, Styled as s } from 'theme-ui';
import AnimatedText from './animated-text';

const text = {
  first: ['React', 'Native'],
  second: ['React', 'Native', 'Web', 'IOS'],
};

export default () => {
  return (
    <>
      <s.div sx={{ variant: 'layout.square' }}>
        <AnimatedText text={text} />
      </s.div>
      <article sx={{ variant: 'layout.square' }}>
        <div sx={{ variant: 'layout.portfolio.article', bg: 'gray' }}>
          <div sx={{ width: '100%', py: 5 }}>
            <Container>
              <s.h2 sx={{ variant: 'text.about' }}>My name is Matthew Jones</s.h2>
              <s.h2 sx={{ variant: 'text.about' }}>I'm a web & mobile developer</s.h2>
              <s.h2 sx={{ variant: 'text.about', mt: 4 }}>
                Currently: full-stack @ {' '}
                <a sx={{ variant: 'text.portfolio.textlink' }} href="https://cash.live">
                  cash.live
                </a>
              </s.h2>
              <s.h2 sx={{ variant: 'text.about' }}>
                Previously: co-founder @{' '}
                <a sx={{ variant: 'text.textlink' }} href="https://getsoftserve.com">
                  getsoftserve.com
                </a>
              </s.h2>
              .
            </Container>
          </div>
        </div>
      </article>
    </>
  );
};
