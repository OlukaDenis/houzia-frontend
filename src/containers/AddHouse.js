import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import request from 'superagent';
import PropTypes from 'prop-types';
import { addNewHouse } from '../redux/actions/houseAction';
import Loading from '../components/Loading';
import RootLayout from '../components/RootLayout';
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
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="House Name"
          required
        />
        <br />
        <input
          onChange={e => setDescription(e.target.value)}
          type="text"
          name="description"
          placeholder="Description"
          required
        />
        <br />
        <input
          onChange={e => setPrice(e.target.value)}
          type="number"
          name="price"
          placeholder="Price"
          required
        />
        <br />
        <input type="file" onChange={handleImageChange} />
        <br />
        <input type="submit" value="Upload" />
      </form>
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
