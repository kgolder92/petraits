/* eslint-disable react/prop-types */
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      petsName: '',
      photo: '',
      notes: '',
      validEmail: false,
      validForm: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });

    const {
      email,
      petsName,
      photo,
      notes,
    } = this.state;
    if (this.state.name.length >= 1 && email.length >= 1 && petsName.length >= 1) {
      this.setState({ validForm: true });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    const { email } = this.state;
    const validEmail = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    if (validEmail !== null) {
      this.setState({ validEmail: true });
      // if (name.length >= 1 && email.length >= 1 && petsName.length >= 1) {
      //   this.setState({ validForm: true });
      // }
    }
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="name" value={name} placeholder="Enter full name" onChange={this.handleChange} />

          <input name="petsName" value={petsName} placeholder="Whats your pets name?" onChange={this.handleChange} />

          <input name="email" type="email" value={email} placeholder="Enter your email" onChange={this.handleChange} />

          <input name="photo" value={photo} placeholder="upload photo" onChange={this.handleChange} />

          <input name="notes" value={notes} placeholder="Notes" onChange={this.handleChange} />

          <button type="submit" disabled={!validForm}>submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
