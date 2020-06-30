/** @jsx jsx */
import React from 'react'; // required for fragments
import {jsx, Styled as s} from 'theme-ui';
import AnimatedText from './animated-text';

const text = {
  first: ['Matthew'],
  second: ['Matthew', 'Jones']
};

export default ({navigate}) => {
  return (
    <>
      <s.div sx={{variant: 'layout.square'}}>
        <AnimatedText text={text} callback={() => console.log('this is the callback')} />
      </s.div>
    </>
  );
};
