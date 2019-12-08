/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Box} from '@theme-ui/components';
import {useTimeout} from 'react-use';

export const Delay = ({ms = 1200, children}) => {
  const [isReady] = useTimeout(ms);

  return isReady() ? children : null;
};

export default ({children, border = true}) => {
  return (
    <div
      sx={{
        p: 4,
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Box sx={{overflow: 'hidden', width: '100%', height: '100%', border: border ? '2px solid hsl(10, 80%, 50%)' : 'none'}}>
        <Delay>{children}</Delay>
      </Box>
    </div>
  );
};
