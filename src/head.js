import React from 'react';
import { Helmet } from 'react-helmet'
import config from '../config';

const {meta} = config;

export default () => (
  <>
    <Helmet title={meta.title} meta={[...meta.general, ...meta.social]} link={[...meta.link]} />
  </>
);
