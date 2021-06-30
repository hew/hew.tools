/** @jsx jsx */
import { Fragment } from 'react'; // required for fragments
import { jsx, Styled as s, Flex, Box } from 'theme-ui';
import AnimatedText from './animated-text';
import crossbreedScreenshot from '../assets/crossbreed-portrait-skinny.png';
import appleLogo from '../assets/apple-icon.png';
import rnLogo from '../assets/react-native-icon.png';
import bazaarScreenshot from '../assets/bazaar-portrait.png';
import qupScreenshot from '../assets/qup-screenshot.png';

const text = {
  first: ['Mobile'],
  second: ['My', 'Mobile', 'Projects'],
};

const PortfolioItem = ({ bg = 'primary', isRN = false, title, projectDesc, logo, link }) => (
  <article sx={{ variant: 'layout.square' }}>
    <div sx={{ variant: 'layout.portfolio.article', bg }}>
      <div sx={{ variant: 'layout.portfolio.image' }}>
        <img src={logo} />
      </div>
      <div sx={{ mt: [4, 0] }}>
        <s.h1 sx={{ variant: 'text.portfolio.title' }}>{title}</s.h1>
        {/* Platform */}
        <Flex sx={{ alignItems: 'center' }}>
          <s.h2 sx={{ variant: 'text.portfolio.platform' }}>{isRN ? 'React Native' : 'iOS'}</s.h2>
          <div sx={{ width: '30px', ml: 1 }}>
            <img src={isRN ? rnLogo : appleLogo} />
          </div>
        </Flex>
        {/* Description */}
        <s.p sx={{ maxWidth: '400px' }}>{projectDesc}</s.p>
        {/* Links */}
        <Flex sx={{ alignItems: 'center' }}>
          <Box>
            <a sx={{ variant: 'text.link', color: 'highlight' }} href={link}>
              Link
            </a>
          </Box>
        </Flex>
      </div>
    </div>
  </article>
);

const Portfolio = () => (
  <Fragment>
    <header sx={{ variant: 'layout.square' }}>
      <AnimatedText text={text} />
    </header>
    <PortfolioItem
      title="Crossbreed"
      link="https://crossbreed.app"
      projectDesc="Crossbreed lets you search your favorite cannabis strains to discover their genetics, and more."
      logo={crossbreedScreenshot}
      bg="primary"
    />
    <PortfolioItem
      title="QUP"
      projectDesc="QUP is a real-time game for high school students to raise money for the activities they love."
      link="https://getsoftserve.com"
      logo={qupScreenshot}
      bg="gray"
      isRN={true}
    />
    <PortfolioItem
      title="Bazaar"
      projectDesc="Bazaar is a React Native (Web) boilerplate to start working with AWS quickly and easily."
      link="https://github.com/hew/Bazaar"
      logo={bazaarScreenshot}
      bg="secondary"
      isRN={true}
    />
  </Fragment>
);

export default Portfolio;
