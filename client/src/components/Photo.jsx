/* eslint-disable react/prop-types */
import React from 'react';

import { Box } from '../style/Gallery.style';


class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { pic, gallery } = this.props;
    return (
      <div>
        <img alt="orginal" src="http://localhost:3000/uploads/FullSizeR_20161022_000850_Original.JPG" />
        <img alt="drawing" src={`http://localhost:3000/uploads/${gallery.photo}`} />
      </div>
    );
  }
}
export default Photo;
