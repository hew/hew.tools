import Preact, { h, Component } from "preact";
import scrollAware from 'react-scrollaware';

function ScrolledMinimal(props) {
  return Preact.createElement(scrollAware(class ScrolledMinimal extends Component {
    onScroll(event) {
      console.log('scrolled: ', event);
    }

    render() {
      return <span style={{fontSize: 0}} />;
    }
   }),
   { ...props, handleScroll: 'onScroll' }
  );
}

export default ScrolledMinimal;
