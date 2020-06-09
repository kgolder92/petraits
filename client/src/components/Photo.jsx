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
        <img src={pic.image} />
        <img src={pic.image} />
      </Box>
    );
  }
}
export default Photo;
