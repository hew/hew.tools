/** @jsx jsx */
import {jsx, Styled as s, Container} from 'theme-ui';
import {useRef, useState, useEffect, useCallback} from 'react';
import {useTransition, animated} from 'react-spring';
import {deep} from '@theme-ui/presets';
import {useWindowSize} from './hooks';
import Wavy from './wavy';

/*
* TODO: 
*
* This component works, but it's a bit of a shit show currently. Clean this up.
*/

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
  cursor: 'pointer'
};

const animationTransitions = ({isMobile, items}) =>
  useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: deep.colors.background
    },
    enter: [
      {
        opacity: 1,
        height: isMobile ? 40 : 80,
        innerHeight: isMobile ? 40 : 80,
        lineHeight: isMobile ? 40 : 80,
        color: deep.colors.primary
      }
    ],
    // leave: [{color: '#282828a8'}, {innerHeight: 0}, {opacity: 0, height: 0}],
    update: [{color: deep.colors.secondary}]
  });

const AnimatedTextMobile = ({text, isMobile}) => {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = animationTransitions({isMobile, items});

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
    }
  }, []);

  return (
    <div sx={{variant: 'layout.square'}}>
      <div sx={{variant: 'layout.fill'}}>
        <Container sx={{mb: 6}}>
          {transitions.map(({item, props: {innerHeight, ...rest}, key}) => (
            <animated.div key={key} style={{...itemStyles, ...rest}}>
              <animated.div style={{overflow: 'hidden', height: innerHeight}}>
                <s.h1 sx={{variant: 'text.hero.title'}}>{item}</s.h1>
              </animated.div>
            </animated.div>
          ))}
        </Container>
      </div>
    </div>
  );
};

const AnimatedText = ({text, isMobile}) => {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = animationTransitions({isMobile, items});

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
    }
  }, []);

  return (
    <div sx={{variant: 'layout.square'}}>
      <div sx={{variant: 'layout.fill'}}>
        <Container sx={{mb: 6}}>
          {transitions.map(({item, props: {innerHeight, ...rest}, key}) => (
            <animated.div key={key} style={{...itemStyles, ...rest}}>
              <animated.div style={{overflow: 'hidden', height: innerHeight}}>
                <s.h1 sx={{variant: 'text.hero.title'}}>{item}</s.h1>
              </animated.div>
            </animated.div>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default ({text}) => {
  const {width, isMobile} = useWindowSize();
  const [renderMobile, setRenderMobile] = useState(undefined);

  useEffect(() => {
    if (isMobile && !renderMobile) {
      setRenderMobile(true);
    } else if (!isMobile && renderMobile) {
      setRenderMobile(false);
    }
  }, []);

  useEffect(() => {
    if (isMobile && !renderMobile) {
      setRenderMobile(true);
    } else if (!isMobile && !renderMobile) {
      setRenderMobile(false);
    } else if (!isMobile && renderMobile) {
      setRenderMobile(false);
    }
  }, [isMobile]);

  if (renderMobile === undefined) {
    console.log(width, isMobile);
    return <Wavy />;
  }

  return renderMobile ? (
    <AnimatedTextMobile text={text} isMobile={isMobile} />
  ) : (
    <AnimatedText text={text} isMobile={isMobile} />
  );
};
