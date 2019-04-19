# hew.tools

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

> Just messing around with universal components n' stuff.


## Status: WIP

This is done enough for public consumption, but still somewhat a work-in-progress. Notably: 

  * **Functionality**. The web-based router bindings - which I hacked together by forking [bs-react-navigation](https://github.com/callstackincubator/bs-react-navigation), are not complete.
  * **Performance**. The animation library I'm using isn't optimized for web-based consumption.

## Abstract / Motivations

 * 100% Written in reasonml
 * 100% React Native (Web)

The idea here is type safety and universality.

With the UI, using react-native-web, and (something like) styled-functors (I'm still not sold on that API).

With the routing, react-navigation is at a point with their web-based router where you can have a unified API in Reason land, and adjust the bindings to target the underlying router, depending on the platform.

## FAQs

#### Why React Native Web over Dom?

This was somewhat extracted from some work stuff, where we go with Web, because of it's stability.

#### Why Not Use Revery?

Again, mostly for work reasons. This was an opportunity for me to think over some ideas.

## Getting Started

This project was bootstrapped with Create React App, which gives you its development [scripts](https://github.com/facebook/create-react-app).

--- 

LICENSE MIT
