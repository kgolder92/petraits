/* eslint-disable react/prop-types */
import React from 'react';

import Photo from './Photo';

import {
  Container,
  Wrapper,
  LittleHeader,
  Picture,
  Order,
} from '../style/Gallery.style';

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
    const { gallery } = this.props;
    console.log('gallery', gallery);
    return (
      <Wrapper>
        <Container>
          <LittleHeader>Wellcome to Petraits Gallery</LittleHeader>

          {/* {pics.map((pic) => <Photo pic={pic} key={pic.name} gallery={gallery}/>)} */}
          <Order>
            <Picture alt="orginal" src="http://localhost:3000/uploads/FullSizeR_20161022_000850_Original.JPG" />
            <div>Waffles</div>
            <Picture alt="drawing" src="http://localhost:3000/uploads/3785467F-1174-4B30-916A-95A3D283E0C1.JPG" />
          </Order>

          <Order>
            <Picture alt="orginal" src="http://localhost:3000/uploads/IMG_0093.JPG" />
            <div>Apollo</div>
            <Picture alt="drawing" src="http://localhost:3000/uploads/IMG_0016.JPG" />
          </Order>

          <Order>
            <Picture alt="orginal" src="http://localhost:3000/uploads/IMG_0505.JPEG" />
            <div>Rambo</div>
            <Picture alt="drawing" src="http://localhost:3000/uploads/IMG_0505.PNG" />
          </Order>
        </Container>
      </Wrapper>
    );
  }
}
export default Gallery;
