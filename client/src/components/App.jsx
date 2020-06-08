/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';

import Form from './Form';
import { Container, Header, Logo } from '../style/App.style';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: '',
    };

    this.submitForm = this.submitForm.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    axios.get('/gallery')
      .then(({ data }) => this.setState({ gallery: data }))
      .catch((err) => console.log(err));
  }

  submitForm(info) {
    console.log('helo');
    axios.post('/gallery', info)
      .then(() => this.getPhotos)
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container>
        <Header>
          <Logo alt="logo" src="logo.png" />
          <h1>Petraits</h1>
        </Header>
          <h2>Animal Art For Pet Lovers</h2>
          how it works
        <Form submitForm={this.submitForm} />
      </Container>
    );
  }
}

export default App;
