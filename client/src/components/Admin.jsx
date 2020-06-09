/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
  FormWrapper,
  InputFields,
  SearchButton,
  ImagePreview,
  UploadButton,
  UploadIcon,
} from '../style/Form.style';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderid: '',
      photo: null,
      photoPreview: null,
      notes: '',
      validEmail: false,
      validForm: false,
    };
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({ orderid: value });
  }

  handleFileChange({ target }) {
    this.setState({ photoPreview: URL.createObjectURL(target.files[0]),  photo: target.files[0], validForm: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitCompletedPhoto } = this.props;

    submitCompletedPhoto(this.state);
  }


  // eslint-disable-next-line class-methods-use-this
  handleClick(e) {
    document.getElementById('hiddenFileInput').click();
  }

  render() {
    const {
      notes,
      validForm,
      photo,
      photoPreview,
    } = this.state;

    return (
      <div>
        Admin
        <Container>
          <FormWrapper>
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">

              {/* <InputFields name="orderId" type="email" value={email} placeholder="Enter order id" onChange={this.handleChange} /> */}
              <label>
                Select a current order id:
                <select value={this.state.orderid} onChange={this.handleChange}>
                  <option value="grapefruit">1</option>
                  <option value="lime">2</option>
                  <option value="coconut">3</option>
                  <option value="mango">4</option>
                </select>
              </label>

              <UploadButton onClick={this.handleClick}>
                Upload a file
                <UploadIcon />
              </UploadButton>
              <InputFields type="file" id="hiddenFileInput" name="completedimage" style={{ display: 'none' }} onChange={this.handleFileChange} />
              <ImagePreview src={photoPreview} style={{ borderRadius: '5px' }} />

              <InputFields name="notes" value={notes} placeholder="Notes" onChange={this.handleChange} style={{ height: '10vh' }} />

              <SearchButton type="submit" disabled={!validForm}>submit</SearchButton>
            </form>
          </FormWrapper>
        </Container>
      </div>
    );
  }
}

export default Admin;
