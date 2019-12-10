/** @jsx jsx */
import {jsx} from 'theme-ui';
import AnimatedText from './animated-text';
import Wrapper from './wrapper.js';

const text = {
  first: ['React', 'Native'],
  second: ['React', 'Native', 'Web']
  // third: ['React', 'Native', 'Web']
};

export default () => {
  return (
    <div sx={{p: 5}}>
      <AnimatedText text={text} callback={(route) => console.log('route', route)} />
    </div>
  );
};
