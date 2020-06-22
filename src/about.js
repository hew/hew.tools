/** @jsx jsx */
import React from 'react'; // required for fragments
import { jsx, Styled as s } from 'theme-ui';
import AnimatedText from './animated-text';

const text = {
  first: ['React', 'Native'],
  second: ['React', 'Native', 'Web', 'IOS'],
};

export default () => {
  return (
    <>
      <s.div sx={{ variant: 'layout.square' }}>
        <AnimatedText text={text} callback={route => console.log('route', route)} />
      </s.div>
      <article sx={{ variant: 'layout.square' }}>
        <div sx={{ variant: 'layout.portfolio.article', bg: 'gray' }}>
          <div sx={{ px: 4, py: 5, maxWidth: 725, textAlign: 'center' }}>
            <s.h2
              sx={{
                variant: 'text.portfolio.platform',
                color: 'secondary',
                fontFamily: 'Ubuntu',
                fontWeight: '800',
                fontSize: ['1.5em', '2.75em'],
              }}
            >
              I'm a web & mobile developer. Currently working at the Snapchat-accelerated{' '}
              <a sx={{ borderBottom: '2px solid white' }} href="https://cash.live">
                cash.live
              </a>
              . Previously, I co-founded and helped to build{' '}
              <a sx={{ borderBottom: '2px solid white' }} href="https://getsoftserve.com">
                getsoftserve.com
              </a>
              .
            </s.h2>
          </div>
        </div>
      </article>
    </>
  );
};
