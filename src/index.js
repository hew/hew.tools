/** @jsx jsx */

import ReactDOM from 'react-dom';
import ThemeProvider, {Reset} from './theme';
import {jsx, Layout, Styled as S} from 'theme-ui';

function App() {
  return (
    <ThemeProvider>
      <Layout sx={{p: 3}}>
        <Reset />
        <S.h1 sx={{color: 'primary', mb: 3}}>Matthew Jones</S.h1>
        <S.p>
          I'm a fullstack, product type. Currently, CTO{' '}
          <S.a sx={{color: 'text', borderBottom: '2px solid #d2d4d2'}} href="https://playqup.com">
            @playqup
          </S.a>
          .
        </S.p>
      </Layout>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
