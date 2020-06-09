/* eslint-disable react/prop-types */
import React from 'react';

import {
  Container,
  FormWrapper,
  InputFields,
  SearchButton,
  ImagePreview,
} from '../style/Form.style';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orderid: '',
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
    const { value } = target;
    this.setState({ orderid: value });
  }

  handleFileChange({ target }) {
    console.log(target.files[0]);
    this.setState({ photo: URL.createObjectURL(target.files[0]), validForm: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitCompletedPhoto } = this.props;

    submitCompletedPhoto(this.state);
  }

  render() {
    const {
      notes,
      validForm,
      photo,
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

              <InputFields name="completedimage" type="file" onChange={this.handleFileChange} />
              <ImagePreview src={photo} />

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
