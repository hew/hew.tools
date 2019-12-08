/** @jsx jsx */
import {jsx} from 'theme-ui';
import React, {memo, useState} from 'react';
import {useSpring, a} from 'react-spring';
import {useMeasure, usePrevious} from './helpers';
import Tree from './tree.js';
import * as Icons from './icons';

export default () => (
  <>
    <Tree name="main" defaultOpen>
      <Tree name="hello" />
      <Tree name="subtree with children">
        <Tree name="hello" />
        <Tree name="sub-subtree with children">
          <Tree name="child 1" style={{color: '#37ceff'}} />
          <Tree name="child 2" style={{color: '#37ceff'}} />
          <Tree name="child 3" style={{color: '#37ceff'}} />
          <Tree name="custom content">
            <div style={{position: 'relative', width: '100%', height: 200, padding: 10}}>
              <div style={{width: '100%', height: '100%', background: 'black', borderRadius: 5}} />
            </div>
          </Tree>
        </Tree>
        <Tree name="hello" />
      </Tree>
      <Tree name="world" />
    </Tree>
  </>
);
