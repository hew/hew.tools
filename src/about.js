import React, {useRef, useState, useEffect, useCallback} from 'react';
import AnimatedText from './animated-text';
import Wrapper from './wrapper.js';

const text = {
  first: ['Web'],
  second: ['React', 'Web'],
  third: ['React', 'Native', 'Web']
};

export default () => {
  return (
    <Wrapper>
      <AnimatedText text={text} />
    </Wrapper>
  );
};
