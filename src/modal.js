import ReactDOM from 'react-dom';
import {Text, Box} from '@theme-ui/components';


export default ({ children }) => (
  ReactDOM.createPortal(
    <Box>
      {children}
    </Box>,
    document.getElementById('root')
  )
);
