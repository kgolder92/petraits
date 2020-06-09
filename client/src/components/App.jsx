/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';

import Form from './Form';
import Gallery from './Gallery';
import { Container, Header, Logo, LineBreak, Menu, Word } from '../style/App.style';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
    };

    this.submitForm = this.submitForm.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    axios.get('/petraits')
      .then(({ data }) => this.setState({ gallery: data }))
      .catch((err) => console.log(err));
  }

  submitForm(info) {
    console.log('helo');
    axios.post('/petraits', info)
      .then(() => this.getPhotos)
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Router>
        <Container>
          <Header>
            <Logo alt="logo" src="logo.png" />
            <h1>Petraits</h1>
            <Menu>
              <Link to="/">
                <Word>Upload </Word>
              </Link>
              <Link to="/gallery">
                <Word> Gallery </Word>
              </Link>
            </Menu>
          </Header>
          <h2>Animal Art For Pet Lovers</h2>
          {/* how it works */}
          <LineBreak />


          <Switch>
            <Route exact path="/">
              <Form submitForm={this.submitForm} />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
          </Switch>

        </Container>
      </Router>
    );
  }
}

export default App;
