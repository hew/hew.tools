import React, {memo, useState} from 'react';
import {useSpring, a, animated} from 'react-spring';
import {useMeasure, usePrevious} from './helpers';
import Tree from './tree.js';
import * as Icons from './icons';

const Frame = ({children}) => (
  <div
    style={{
      position: 'relative',
      padding: '4px 0px 0px 0px',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      verticalAlign: 'middle',
      color: 'white',
      fill: 'white'
    }}>
    {children}
  </div>
);

const Title = ({children}) => (
  <div
    style={{
      verticalAlign: 'middle'
    }}>
    {children}
  </div>
);

const Content = ({children, style}) => (
  <animated.div
    style={{
      willChange: 'transform, opacity, height',
      marginLeft: '6px',
      padding: '0px 0px 0px 14px',
      borderLeft: '1px dashed rgba(255, 255, 255, 0.4)',
      overflow: 'hidden',
      ...style
    }}>
    {children}
  </animated.div>
);

const toggle = {
  width: '1em',
  height: '1em',
  marginRight: 10,
  cursor: 'pointer',
  verticalAlign: 'middle'
};

export default memo(({children, name, style, defaultOpen = false}) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [bind, {height: viewHeight}] = useMeasure();
  const {height, opacity, transform} = useSpring({
    from: {height: 0, opacity: 0, transform: 'translate3d(20px,0,0)'},
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      transform: `translate3d(${isOpen ? 0 : 20}px,0,0)`
    }
  });
  const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];
  return (
    <Frame>
      <div style={{display: "flex", alignItems: 'center'}}>
        <Icon style={{...toggle, opacity: children ? 1 : 0.3}} onClick={() => setOpen(!isOpen)} />
        <Title style={style}>{name}</Title>
      </div>
      <Content style={{opacity, height: isOpen && previous === isOpen ? 'auto' : height}}>
        <a.div style={{transform}} {...bind} children={children} />
      </Content>
    </Frame>
  );
});



export {Frame, Content, toggle, Title};
