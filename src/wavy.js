/** @jsx jsx */
import {jsx} from 'theme-ui';
import {useCallback, useEffect, useState, useRef} from 'react';
import {useSpring, animated as a, interpolate} from 'react-spring';
import {theme} from './theme';

const handleWindowResize = () => {
  const [height, setHeight] = useState(window.innerHeight);

  const resize = () => setHeight(window.innerHeight);

  useEffect(() => {
    
    window.addEventListener('resize', resize);
   
    return () => window.removeEventListener('resize', resize);
  }); 

  return height;
}

export default () => {
  const [{y, s}, set] = useSpring(() => ({y: window.scrollY, s: 1.0}));
  const windowHeight = handleWindowResize();

  useEffect(() => {
    const handleScroll = () => set({y: window.scrollY / 3, s: window.scrollY / 2});
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  const interp = y.interpolate((o) => `${(windowHeight - 2 * (o + windowHeight / 100))}px`);
  const interpScale = s.interpolate((o) => `scale(${o <= 190.0 ? 1 + o / 500 : 1.0 + 190.50 / 500})`);
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
            strokeDasharray={windowHeight}
            d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"></a.path>
        </g>
      </a.svg>
    </a.div>
  );
};
