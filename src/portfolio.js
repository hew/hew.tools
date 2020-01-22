/** @jsx jsx */
import React from 'react'; // required for fragments
import {jsx, Styled as s, Flex, Box, Container} from 'theme-ui';
import AnimatedText from './animated-text';
import crossbreedScreenshot from '../assets/crossbreed-portrait-skinny.png';
import appleLogo from '../assets/apple-icon.png';
import rnLogo from '../assets/react-native-icon.png';
import bazaarScreenshot from '../assets/bazaar-portrait.png';
import qupScreenshot from '../assets/qup-screenshot.png';

const Link = ({children, ...props}) => (
  <a {...props} sx={{variant: 'text.link'}}>
    {children}
  </a>
);

const PortfolioItem = ({bg = 'primary', isRN = false, title, projectDesc, logo, link}) => {
  const moreAction = (_) => alert('More section is WIP. Coming soon!');

  return (
    <article sx={{variant: 'layout.square'}}>
      <div sx={{variant: 'layout.portfolio.article', bg}}>
        <div sx={{variant: 'layout.portfolio.image'}}>
          <img className="portfolio-image" src={logo} />
        </div>
        <div sx={{mt: [4, 0]}}>
          <s.h1 sx={{variant: 'text.portfolio.title'}}>{title}</s.h1>
          {/* Platform */}
          <Flex sx={{alignItems: 'center'}}>
            <s.h2 sx={{variant: 'text.portfolio.platform'}}>{isRN ? 'React Native' : 'iOS'}</s.h2>
            <div sx={{width: '30px', ml: 1}}>
              <img src={isRN ? rnLogo : appleLogo} />
            </div>
          </Flex>
          {/* Description */}
          <s.p sx={{maxWidth: '400px'}}>{projectDesc}</s.p>
          {/* Links */}
          <Flex sx={{alignItems: 'center'}}>
            <Box>
              <Link href={link}>Link</Link>
            </Box>
            {/*
              <Box sx={{px: 3}}>
              <Link href="#modal" onClick={moreAction}>
              More
              </Link>
              </Box>
            */}
          </Flex>
        </div>
      </div>
    </article>
  );
};

const text = {
  first: ['Portfolio'],
  second: ['My', 'Mobile', 'Portfolio']
};

export default () => {
  return (
    <>
      <s.div sx={{variant: 'layout.square'}}>
        <AnimatedText text={text} callback={(route) => console.log('route', route)} />
      </s.div>
      {/* temp hack */}
      <PortfolioItem
        title="Crossbreed"
        link="https://crossbreed.app"
        projectDesc="Crossbreed lets you search your favorite strains to discover their genetics, and more."
        logo={crossbreedScreenshot}
        bg="primary"
      />
      <PortfolioItem
        title="QUP"
        projectDesc="QUP is a real-time game for high school students to raise money for the activities they love."
        link="https://playqup.com"
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
    </>
  );
};
