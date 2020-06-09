/* eslint-disable react/prop-types */
import React from 'react';

import { Box } from '../style/Gallery.style';


class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { pic } = this.props;
    return (
      <Box>
        <img alt="orginal" src={pic.image} />
        <img alt="drawing" src={pic.image} />
      </Box>
    );
  }
}
export default Photo;
