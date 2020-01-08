/** @jsx jsx */
import React from 'react'; // required for fragments
import {jsx, Styled as s, Container} from 'theme-ui';
import AnimatedText from './animated-text';
// import Wavy from './wavy';

const text = {
  first: ['React', 'Native'],
  second: ['React', 'Native', 'Web', 'IOS']
};

export default () => {
  return (
    <>
      <s.div sx={{variant: 'layout.square'}}>
        <AnimatedText text={text} callback={(route) => console.log('route', route)} />
      </s.div>
      <s.div sx={{variant: 'layout.square'}}>
        <s.div sx={{variant: 'layout.fill'}}>
          <div sx={{px: 4, maxWidth: 500, textAlign: 'center'}}>
            <s.h3 sx={{color: 'primary', fontFamily: 'text'}}>
              I'm a software developer from Vancouver, Canada. I've been building for the web/mobile
              for the past four years.
            </s.h3>
          </div>
        </s.div>
      </s.div>
    </>
  );
};
