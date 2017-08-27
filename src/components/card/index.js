import { h, Component } from 'preact';
import { Flex, Box } from 'axs';
import Animate from '../motion';
import Card from './card';
import { breakpoints, container } from 'styles';

const containerStyles = {
  display: 'block',
  [breakpoints[2]]: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    minWidth: 0
  }
};

export default class CardList extends Component {
  render() {
    const { data } = this.props;
    return (
      <Animate type='o' start={0} end={1}>
        <Flex mb3 css={containerStyles}>
          {data.map((r, i) => {
            return (
              <Box key={i} css={{ flex: '1 1 435px' }}>
                <Card
                  name={r.name}
                  desc={r.desc}
                  href={r.url}
                  stars={r.stars}
                  forks={r.forks}
                />
              </Box>
            );
          })}
        </Flex>
      </Animate>
    );
  }
}
