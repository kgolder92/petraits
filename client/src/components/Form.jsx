/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
  FormWrapper,
  InputFields,
  SearchButton,
  ImagePreview,
  LeftContainer,
  UploadButton,
  UploadIcon,
} from '../style/Form.style';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      petsName: '',
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
    const { name, value } = target;
    this.setState({ [name]: value });

    const {
      email,
      petsName,
      fullName,
    } = this.state;

    if (fullName.length >= 1 && email.length >= 4
      && petsName.length >= 1) {
      this.setState({
        validForm: true,
      });
    }
  }

  handleFileChange({ target }) {
    console.log(target.files[0]);
    this.setState({ photoPreview: URL.createObjectURL(target.files[0]), photo: target.files[0], validForm: true });
  }

  handleClick(e) {
    document.getElementById('hiddenFileInput').click();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitForm } = this.props;

    submitForm(this.state);
  }

  render() {
    const {
      fullName,
      email,
      petsName,
      notes,
      validForm,
      photo,
      photoPreview,
    } = this.state;

    return (
      <div style={{ display: 'flex' }}>
        <LeftContainer>
          <h3>How it works</h3>
          <p />
          Upload a png, jpg, jpeg, or tiff of your pet
          <p />
          Leave any comments / notes
          <p />
          Send it off to become a petrait!
        </LeftContainer>
        <Container>
          <FormWrapper>
            <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
              <InputFields name="fullName" value={fullName} placeholder="Enter your name" onChange={this.handleChange} />

              <InputFields name="petsName" value={petsName} placeholder="What's your pets name?" onChange={this.handleChange} />

              <InputFields name="email" type="email" value={email} placeholder="Enter your email" onChange={this.handleChange} />

              <UploadButton onClick={this.handleClick}>
                Upload a file
                <UploadIcon />
              </UploadButton>
              <InputFields type="file" id="hiddenFileInput" name="image" style={{ display: 'none' }} onChange={this.handleFileChange} />
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

export default Form;
