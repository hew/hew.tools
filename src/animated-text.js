import React, {useRef, useState, useEffect, useCallback} from 'react';
import {useTransition, animated} from 'react-spring';
import {Text, Box} from '@theme-ui/components';

export default ({text, callback}) => {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6'
    },
    enter: [
      {opacity: 1, height: 80, innerHeight: 80},
      // {transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f'},
      // {transform: 'perspective(600px) rotateX(0deg)'}
    ],
    leave: [{color: '#c23369'}, {innerHeight: 0}, {opacity: 0, height: 0}],
    update: {color: 'pink'}
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
    ref.current.push(setTimeout(() => (text.first ? set(text.first) : null), 1000));
    ref.current.push(setTimeout(() => (text.second ? set(text.second) : null ), 3000));
    ref.current.push(setTimeout(() => (text.third ? set(text.third) : null), 6000));
  }, []);

  useEffect(() => void reset(), []);

  return (
    <div>
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


