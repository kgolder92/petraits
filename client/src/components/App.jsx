/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Form from './Form';
import Gallery from './Gallery';
import Admin from './Admin';

import {
  Container,
  Header,
  Logo,
  LineBreak,
  Menu,
  Word,
} from '../style/App.style';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gallery: [],
    };

    this.submitForm = this.submitForm.bind(this);
    this.getPhotos = this.getPhotos.bind(this);
    this.submitCompletedPhoto = this.submitCompletedPhoto.bind(this);
  }

  componentDidMount() {
    this.getPhotos();
  }

  getPhotos() {
    axios.get('/petraits')
      .then(({ data }) => {
        this.setState({ gallery: data });
      })
      .catch((err) => console.log(err));
  }

  submitForm(info) {
    console.log('helo');
    axios.post('/orders', info)
      .then(() => this.getPhotos)
      .catch((err) => console.log(err));
  }

  submitCompletedPhoto(info) {
    console.log('helo');
    axios.post('/completedOrders', info)
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
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Word>Upload </Word>
              </Link>
              <Link to="/gallery" style={{ textDecoration: 'none' }}>
                <Word> Gallery </Word>
              </Link>
              <Link to="/admin" style={{ textDecoration: 'none' }}>
                <Word> Admin </Word>
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
              <Gallery gallery={this.state.gallery} />
            </Route>
            <Route path="/admin">
              <Admin submitCompletedPhoto={this.submitCompletedPhoto} />
            </Route>
          </Switch>

        </Container>
      </Router>
    );
  }
}

export default App;
