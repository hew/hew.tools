import React, {Component} from 'react';
import jax from 'jax.js';
import Card from '../components/card';
import styled from 'styled-components';

export default class OpenSource extends Component {
  componentDidMount() {
    jax('https://hewtools.herokuapp.com')
      .then(data => {
        const json = JSON.parse(data);
        this.setState({data: json});
      })
      .catch(status => {
        console.error(`[Jax] Failed request: ${status}`);
      });
  }
  state = {
    animateCards: false,
    data: [],
  };
  handleRest() {
    this.setState({animateCards: true});
  }
  render() {
    const {data = []} = this.state;
    return (
      <Container>
        <Box w={1}>
          {data.map((r, i) => {
            return (
              <Card
                key={i}
                name={r.name}
                desc={r.desc}
                href={r.url}
                stars={r.stars}
                forks={r.forks}
              />
            );
          })}
        </Box>
      </Container>
    );
  }
}
