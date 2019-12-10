/** @jsx jsx */
import {jsx} from 'theme-ui';
import AnimatedText from './animated-text';
import Wrapper from './wrapper.js';
import Modal from './modal';
import ToggleContent from './toggle-content';

const text = {
  first: ['Matthew', 'Jones'],
  second: ['Matthew', 'Jones', 'Software', 'Developer']
};

export default ({navigate}) => {
  return (
    <div sx={{p: 5, width: "100%"}}>
      <AnimatedText text={text} callback={() => console.log('this is the callback')} />
    </div>
  );
};
