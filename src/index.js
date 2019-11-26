/** @jsx jsx */

import ReactDOM from 'react-dom';
import ThemeProvider, {Reset} from './theme';
import {jsx, Layout, Styled as S} from 'theme-ui';

function App() {
  return (
    <ThemeProvider>
      <Layout sx={{p: 3}}>
        <Reset />
        <S.h1 sx={{color: 'primary', mb: 2}}>Matthew Jones</S.h1>
        <S.p sx={{mb: 4}}>Front end / mobile developer.</S.p>
        <S.h4>Links</S.h4>
        <S.p sx={{color: 'text'}}>
          <S.a sx={{color: 'text', borderBottom: '2px solid #d2d4d2'}} href="https://github.com/hew">
            github
          </S.a>
          &nbsp; / &nbsp;
          <S.a sx={{color: 'text', borderBottom: '2px solid #d2d4d2'}} href="https://twitter/tahini">
            twitter
          </S.a>
        </S.p>
      </Layout>
    </ThemeProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
