/** @jsx jsx */
import {jsx} from 'theme-ui';
import {useRef, useState, useEffect, useCallback} from 'react';
import {useTransition, animated} from 'react-spring';
import {Text, Box} from '@theme-ui/components';
import {deep} from '@theme-ui/presets';

export default ({text, callback}) => {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: deep.colors.background
    },
    enter: [
      {opacity: 1, height: 80, innerHeight: 80, color: deep.colors.primary},
    ],
    leave: [{color: "#282828a8"}, {innerHeight: 0}, {opacity: 0, height: 0}],
    update: [{color: deep.colors.secondary}]
  });

  const onExit = useCallback(key => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    setTimeout(() => callback(key), 1300);
  }, []);

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => (text.first ? set(text.first) : null), 750));
    ref.current.push(setTimeout(() => (text.second ? set(text.second) : null ), 1800));
    ref.current.push(setTimeout(() => (text.third ? set(text.third) : null), 2400));
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div sx={{minWidth: 350, width: "100%"}}>
      {transitions.map(({item, props: {innerHeight, ...rest}, key}) => (
        <animated.div  key={key} style={{...itemStyles, ...rest}} onClick={_ => onExit(item)}>
          <animated.div style={{overflow: 'hidden', height: innerHeight}}>{item}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};

const itemStyles = {
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  color: 'white',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '5em',
  fontWeight: '800',
  textTransform: 'uppercase',
  willChange: 'transform, opacity, height',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  lineHeight: '80px'
};


