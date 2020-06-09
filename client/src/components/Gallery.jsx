import React from 'react';

import Photo from './Photo';
import { Container, Wrapper, LittleHeader } from '../style/Gallery.style';

const pics = [
  {
    image: 'moooo',
    name: 'ke',
  },
  {
    image: 'uhggg',
    name: 'kge',
  },
];
class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <LittleHeader>Wellcome to Petraits Gallery</LittleHeader>

          {pics.map((pic) => <Photo pic={pic} key={pic.name} />)}
        </Container>
      </Wrapper>
    );
  }
}
export default Gallery;
