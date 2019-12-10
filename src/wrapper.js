/** @jsx jsx */
import {jsx} from 'theme-ui';
import { useCallback  } from 'react';
import {useTimeout} from 'react-use';
import {useSpring, animated as a, interpolate} from 'react-spring';

export const Delay = ({ms = 1200, children}) => {
  const [isReady] = useTimeout(ms);

  return isReady() ? children : null;
};

export default ({children, border = true}) => {
  const [{st, xy}, set] = useSpring(() => ({st: 0, xy: [0, 0]}));
  const interpBg = xy.interpolate(
    (x, y) => `perspective(400px)`
  );
	const onMove = useCallback(({ clientX: x, clientY: y  }) => set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2]  }), [])
  console.log('moving', xy);
  console.log('interp', interpBg);
        <div style={{ transform: interpBg }} />
  return (
    <div
			onMouseMove={onMove}
      sx={{
        p: 4,
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <div
        sx={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          border: border ? '2px solid #282828a8' : 'none',
          p: 4,
        }}>
        <Delay>{children}</Delay>
      </div>
    </div>
  );
};
