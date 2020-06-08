/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
  FormWrapper,
  InputFields,
  SearchButton,
} from '../style/Form.style';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      petsName: '',
      photo: {},
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
    } = this.state;

    // const validPhoto = photo.match(/\.(jpg|jpeg|png|tiff)$/);
    if (this.state.name.length >= 1 && email.length >= 1
      && petsName.length >= 1) {
      this.setState({
        validForm: true,
      });
    }
  }

  handleFileChange({ target }) {
    // console.log('hanlde change fired');
    // console.dir(target.files);
    this.setState({ photo: target.files[0], validForm: true });
    console.log('after', typeof this.state.photo  );

  }

  handleSubmit(e) {
    e.preventDefault();

    const { submitForm } = this.props;
    // const { photo } = this.state;
    // const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    // const validPhoto = photo.match(/\.(jpg|jpeg|png|tiff)$/);
    // console.log('before', validPhoto);

    // if (validPhoto !== null) {
    //   this.setState({ photo: `${this.fileInput.current.files[0].name}`, });
    // }
    submitForm(this.state);
  }

  render() {
    const {
      name,
      email,
      petsName,
      photo,
      notes,
      validForm,
    } = this.state;
    // console.log(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))
    // console.log(validEmail)
    return (
      <Container>
        <FormWrapper>
          <form onSubmit={this.handleSubmit}>
            <InputFields name="name" value={name} placeholder="Enter full name" onChange={this.handleChange} />

            <InputFields name="petsName" value={petsName} placeholder="Whats your pets name?" onChange={this.handleChange} />

            <InputFields name="email" type="email" value={email} placeholder="Enter your email" onChange={this.handleChange} />

            <InputFields type="file" onChange={this.handleFileChange} />
            {/* <UploadPhoto getState={this.getState} /> */}

            <InputFields name="notes" value={notes} placeholder="Notes" onChange={this.handleChange} />

            <SearchButton type="submit" disabled={!validForm}>submit</SearchButton>
          </form>
        </FormWrapper>
      </Container>
    );
  }
}

export default Form;
