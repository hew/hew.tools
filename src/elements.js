/** @jsx jsx */
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import {jsx, Styled} from 'theme-ui';
import {Link as RouterLink} from 'react-router-dom';

/* MDX */
export const H1 = Styled.h1;
export const H2 = Styled.h2;
export const H3 = Styled.h3;
export const H4 = Styled.h4;

export const P = Styled.p;
export const Li = Styled.li;
export const Ol = Styled.ol;

/* Layout/Variant */
export const Main = ({children}) => <main sx={{variant: 'layout.main'}}>{children}</main>;
export const Section = ({children}) => <section sx={{variant: 'layout.section'}}>{children}</section>;
export const Header = ({children}) => <header sx={{variant: 'layout.header'}}>{children}</header>;
export const Nav = ({children}) => <nav sx={{variant: 'layout.nav'}}>{children}</nav>;
export const Footer = ({children}) => <footer sx={{variant: 'layout.footer'}}>{children}</footer>;
export const Link = ({a, children}) => (
  <RouterLink style={{padding: '2em 1em', display: 'inline-block'}} to={a}>
    {children}
  </RouterLink>
);

/* 
 
  MDX elements that can be rendered outside of markdown
 
  p 
  a
  h1
  h2
  h3
  h4
  h5
  h6
  img
  pre
  code
  ol
  ul
  li
  blockquote
  hr
  em 
  table
  tr
  th
  td
  strong
  delete
  b
  i
  div
  root
*/
