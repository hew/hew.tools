/** @jsx jsx */
import React from 'react'; // required for fragments
import {jsx, Styled as s} from 'theme-ui';
import AnimatedText from './animated-text';

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
              I'm a software developer from Vancouver, Canada. I work with React Native and Swift to create amazing mobile experiences.
            </s.h3>
          </div>
        </s.div>
      </s.div>
    </>
  );
};
