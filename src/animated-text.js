/** @jsx jsx */
import { jsx, Styled as s, Container } from 'theme-ui';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated } from 'react-spring';
import { deep } from '@theme-ui/presets';

/*
 * TODO:
 *
 * This component works, but it's a bit of a shit show currently. Clean this up.
 */

const itemStyles = {
  fontFamily: 'Passion One',
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
};

const animationTransitions = ({ items }) =>
  useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: deep.colors.background,
    },
    enter: [
      {
        opacity: 1,
        height: 80,
        innerHeight: 80,
        lineHeight: 80,
        color: deep.colors.primary,
      },
    ],
    // leave: [{color: '#282828a8'}, {innerHeight: 0}, {opacity: 0, height: 0}],
    update: [{ color: deep.colors.secondary }],
  });

export default ({ text }) => {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = animationTransitions({ items });

  const play = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => (text.first ? set(text.first) : null), 750));
    ref.current.push(setTimeout(() => (text.second ? set(text.second) : null), 1800));
    ref.current.push(setTimeout(() => (text.third ? set(text.third) : null), 2400));
  }, []);

  useEffect(() => {
    play();

    return () => {
      ref.current.map(clearTimeout);
    };
  }, []);

  return (
    <div sx={{ variant: 'layout.square' }}>
      <div sx={{ variant: 'layout.fill' }}>
        <Container sx={{ py: 5 }}>
          {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
            <animated.div key={key} style={{ ...itemStyles, ...rest }}>
              <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
                <s.h1 sx={{ variant: 'text.hero.title' }}>{item}</s.h1>
              </animated.div>
            </animated.div>
          ))}
        </Container>
      </div>
    </div>
  );
};
