/** @jsx jsx */
import {jsx} from 'theme-ui';
import {useCallback, useEffect, useRef} from 'react';
import ReactDOM from 'react-dom';
import {useSpring, animated as a, interpolate} from 'react-spring';
import {theme} from './theme';
// import {debounce} from './helpers';

export default () => {
  const [{y, s}, set] = useSpring(() => ({y: window.scrollY, s: 1.0}));

  useEffect(() => {
    const handleScroll = () => set({y: window.scrollY / 3, s: window.scrollY / 2});
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', debounce(handleScroll));
  }, []); // If you remove this, things go 🍌🍌🍌

  const interp = y.interpolate((o) => `${300 - o}px`);
  const interpScale = s.interpolate((o) => `scale(${o <= 190.0 ? 1 + o / 500 : 1.0 + 190.0 / 500})`);
  return (
    <a.div style={{transform: interpScale, padding: '5em 0'}}>
      <a.svg style={{width: 100}} viewBox="5 0 100 80">
        <g>
          <a.path
            id="wave"
            fill="none"
            stroke={theme.colors.muted}
            strokeWidth="5"
            strokeLinecap="round"
            d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"></a.path>
          <a.path
            id="wave"
            fill="none"
            stroke={theme.colors.primary}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDashoffset={interp}
            strokeDasharray="300px"
            d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"></a.path>
        </g>
      </a.svg>
    </a.div>
  );
};
