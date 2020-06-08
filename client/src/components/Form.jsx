/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
  FormWrapper,
  InputFields,
  SearchButton,
  ImagePreview,
} from '../style/Form.style';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      email: '',
      petsName: '',
      photo: null,
      notes: '',
      validEmail: false,
      validForm: false,
    };
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
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
    console.log(target.files[0])
    this.setState({ photo: URL.createObjectURL(target.files[0]), validForm: true });
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
    } = this.state;

    return (
      <Container>
        <FormWrapper>
          <form onSubmit={this.handleSubmit}>
            <InputFields name="fullName" value={fullName} placeholder="Enter full name" onChange={this.handleChange} />

            <InputFields name="petsName" value={petsName} placeholder="Whats your pets name?" onChange={this.handleChange} />

            <InputFields name="email" type="email" value={email} placeholder="Enter your email" onChange={this.handleChange} />

            <InputFields type="file" onChange={this.handleFileChange} />
            <ImagePreview src={photo} />
            <InputFields name="notes" value={notes} placeholder="Notes" onChange={this.handleChange} style={{ height: "10vh" }} />

            <SearchButton type="submit" disabled={!validForm}>submit</SearchButton>
          </form>
        </FormWrapper>
      </Container>
    );
  }
}

export default Form;
