import React, { Component } from 'react';

const fill = {
  width: '100px',
  height: '100px',
  perspective: '550px',
  position: 'absolute',
  backfaceVisibility: 'inherit'
};

const base = {
  outline: '1px solid black',
  height: '100px',
  width: '100px',
  perspective: '1000px'
};

class Card extends Component {
  state = {isOpen: false};
  handleClick = (evt) => {
    console.log('yeep');
    this.setState((state) => ({isOpen: !state.isOpen}));
  };
  render() {
    // const check = (_open) => _open ? spring(180) : spring(0);

    const defaultStyle = {
      t: 0
    };
    const tween = {
      t: this.state.isOpen ? spring(330) : spring(0)
    };
    return (
      <Motion defaultStyle={defaultStyle} style={tween}>
        {({t}) => (
          <div
            style={{
              transform: `rotate3d(1, 1, 1, ${t}deg)`,
              transformStyle: 'preserve-3d',
              ...base
            }}
            onClick={this.handleClick}>
            <div
              style={{
                ...fill,
                backgroundColor: 'rgba(90,90,90,.7)',
                transform: `translateZ(50px)`
              }}
            />
            <div
              style={{...fill, 
                backgroundColor: 'rgba(0,210,0,.7)',
                transform: `rotateY(180deg) translateZ(50px)`}}
            />
            <div
              style={{...fill, 
                    backgroundColor: 'rgba(210,0,0,.7)',
                transform: `rotateY(90deg) translateZ(50px)`}}
            />
            <div
              style={{...fill, 
                 backgroundColor: 'rgba(0,0,210,.7)',
                transform: `rotateY(-90deg) translateZ(50px)`}}
            />
            <div
              style={{...fill, 
                 backgroundColor: 'rgba(210,210,0,.7)',
                transform: `rotateX(90deg) translateZ(50px)`}}
            />
            <div
              style={{...fill, 
                 backgroundColor: 'rgba(210,0,210,.7)',
                transform: `rotateX(-90deg) translateZ(50px)`}}
            />
          </div>
        )}
      </Motion>
    );
  }
}

