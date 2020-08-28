import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import request from 'superagent';
import PropTypes from 'prop-types';
import { addNewHouse } from '../redux/actions/houseAction';
import Loading from '../components/Loading';
import RootLayout from '../components/RootLayout';
import { Form, Container, Row, Col } from 'react-bootstrap';
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../helpers/appConfig';

const AddHouse = ({ loading, token, addNewHouse }) => {
  const [picture, setPicture] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [toHome, setToHome] = useState(false);

  const handleImageChange = e => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', picture);

    upload.end((err, response) => {
      if (err) {
        return <p>{err}</p>;
      }

      if (response.body.secure_url !== '') {
        if (loading) { return (<Loading />); }
        const image = response.body.secure_url;
        const houseData = {
          name, description, image, price,
        };
        addNewHouse(houseData, token);
        setToHome(true);
      }
      return null;
    });
  };

  if (toHome === true) {
    return <Redirect to="/" />;
  }

  return (
    <RootLayout>
      <Container style={{ paddingTop: 70, marginBottom: 100 }} >
        <Row className="justify-content-md-center">
          <Col lg="auto" md="auto" >
            <h1 style={{marginBottom: 20}} className="auth-title text-center">Add a new house</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  placeholder="House for rent" 
                  className="form-input"
                  onChange={e => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control 
                  as="textarea" 
                  rows="3" 
                  placeholder="Description" 
                  style={{borderRadius: 20}}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
            </Form>

            <Form.Group>
              <Form.Control 
                type="number" 
                placeholder="Price" 
                className="form-input"
                onChange={e => setPrice(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Control 
                className="image-chooser" 
                type="file" 
                onChange={handleImageChange}
              />
            </Form.Group>

            <div className="text-center">
                <button 
                  variant="primary" 
                  className="h-btn h-btn-filled btn text-center" 
                  type="submit"
                  style={{width: '70%'}}
                >
                  Add HOuse
                </button>
              </div>
          
          </Col>
        </Row>
      </Container>
    </RootLayout>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewHouse: (house, token) => dispatch(addNewHouse(house, token)),
});

const mapStateToProps = state => ({
  token: state.authReducer.token,
});

AddHouse.propTypes = {
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  addNewHouse: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddHouse);
