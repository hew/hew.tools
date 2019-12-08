import React, {useRef, useState, useEffect, useCallback} from 'react';
import AnimatedText from './animated-text';
import Wrapper from './wrapper.js';
import Modal from './modal';
import ToggleContent from './toggle-content';

const text = {
  first: ['React', 'Web', 'Apps'],
  second: ['React', 'Native', 'Apps'],
  third: ['React', 'Native', 'Web']
};

export default ({navigate}) => {
  return (
    <Wrapper>
      <AnimatedText text={text} callback={() => console.log('this is the callback')} />
    </Wrapper>
  );
};
