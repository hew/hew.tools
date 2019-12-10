import React from 'react';
import {useCallback} from 'react';
import {useTimeout} from 'react-use';
import {useSpring, animated as a, interpolate} from 'react-spring';

export default ({children, border = true}) => {
  const [{st, xy}, set] = useSpring(() => ({st: 0, xy: [0, 0]}));
  const interpBg = xy.interpolate((x, y) => `perspective(400px)`);
  const onMove = useCallback(
    ({clientX: x, clientY: y}) => set({xy: [x - window.innerWidth / 2, y - window.innerHeight / 2]}),
    []
  );
  console.log('moving', xy);
  console.log('interp', interpBg);
  return <div onMouseMove={onMove} style={{height: '300px', width: '400px', backgroundColor: 'red', transform: interpBg}} />;
};
