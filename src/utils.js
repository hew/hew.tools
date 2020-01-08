import React, {useState} from 'react';

export const toggleContent = ({toggle, content}) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      {toggle(show)}
      {isShown && content(hide)}
    </>
  );
};

// const AnimatedRoutes = () => {
//   const location = useLocation();
//   const history = useHistory();
//   const transitions = useTransition(location, (location) => location.pathname, {
//     from: (previous) => {
//       return {
//         opacity: 0,
//         transform: `translate3d(${
//           previous.pathname === '/' || previous.pathname === '/home' ? '100%' : '-100%'
//         },0,0)`
//       };
//     },
//     enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
//     leave: (previous) => {
//       return {
//         opacity: 0,
//         transform: `translate3d(${
//           previous.pathname === '/' || previous.pathname === '/home' ? '-100%' : '100%'
//         },0,0)`
//       };
//     }
//   });
//   const baseAnimatedStyles = {
//     willChange: 'transform',
//     position: 'absolute',
//     overflow: 'hidden',
//     width: '100%',
//     height: '100%'
//   };
//   return transitions.map(({item: location, props, key}, idx) => (
//     <animated.div
//       key={key}
//       style={{
//         ...props,
//         ...baseAnimatedStyles,
//         zIndex: 1 + idx
//       }}>
//       <Switch>
//         <Route path="/home">
//           <Home navigate={(route) => history.push(route)} />
//         </Route>
//         <Route path="/about">
//           <About navigate={(route) => history.push(route)} />
//         </Route>
//         <Route path="/">
//           <s.h1>home</s.h1>
//         </Route>
//       </Switch>
//     </animated.div>
//   ));
// };
