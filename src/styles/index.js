import React from 'react';
import { Row, Flex, Box, Container } from './layout'
import { max_width, sm_screen, md_screen, lg_screen } from './sizes'
import { Text } from './type'
import color from './color'
import './global'

/*
 * RE Globals: 
 * I actually think this is an OK use case for globals, given that the context here
 * is a static website, probably just sitting in isolation. __But if that is not the case,
 * you can simply delete this file and then import all these values indidivually__.
 */

global.Row = Row
global.Flex = Flex
global.Box = Box
global.Container = Container

global.max_width = max_width
global.sm_screen = sm_screen
global.md_screen = md_screen
global.lg_screen = lg_screen

global.color = color

global.H1 = ({children, ...props}) => <Text {...props} is='h1'>{children}</Text> 
global.H2 = ({children, ...props}) => <Text {...props} is='h2'>{children}</Text> 
global.H3 = ({children, ...props}) => <Text {...props} is='h3'>{children}</Text> 
global.H4 = ({children, ...props}) => <Text {...props} is='h4'>{children}</Text> 
global.Span = ({children, ...props}) => <Text {...props} is='span'>{children}</Text> 
global.P = ({children, ...props}) => <Text {...props} is='p'>{children}</Text> 
