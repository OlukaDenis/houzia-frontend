import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Container, Row, Col, Media,
} from 'react-bootstrap';
import RootLayout from '../components/RootLayout';
import { fetchHouseDetails } from '../redux/actions/houseAction';
import Loading from '../components/Loading';
import FavoriteButton from '../components/FavoriteButton';
import { formatCurrency } from '../helpers/appUtils';
import { houseShape, userShape } from '../helpers/propTypeShapes';

const priceStyle = {
  display: 'flex',
  flexDirection: 'column',
  color: '#fff',
  fontSize: '1.2rem',
  fontWeight: '900',
};

const HouseDetails = props => {
  const {
    fetchHouseDetails,
    house,
    token,
    loading,
    user,
  } = props;

  const { match: { params } } = props;
  const houseId = params.id;
  const favData = { house_id: houseId };

  useEffect(() => {
    if (token && houseId) {
      fetchHouseDetails(houseId, token);
    }
  }, [houseId, token, fetchHouseDetails]);

  const House = () => (
    <Row className="justify-content-md-center">
      <Col md={8} sm={10} lg={8}>

        <div className="house-item">
          <h1 className="text-center p-3">{house.name}</h1>
          <div className="detailPicture">
            <div
              style={{ backgroundImage: `url(${house.image})`, width: '100%', height: 500 }}
              className="house-detail-image"
              data-testid="image"
            />
            <div className="img-overlay" />

            <div className="house-meta">
              <div className="h-meta">
                <Media>
                  <img
                    width={40}
                    height={40}
                    style={{ borderRadius: 50 }}
                    className="mr-3"
                    src={user.image}
                    alt={user.username}
                  />
                  <Media.Body>
                    <h5 style={{ fontSize: 14, color: 'white' }}>{user.username}</h5>
                    <p style={{ fontSize: 10, color: '#ccc' }}>
                      {user.email}
                    </p>
                  </Media.Body>
                </Media>
                <p className="text-center" style={priceStyle}>
                  { house.price && <span>{formatCurrency(house.price)}</span> }
                  <span style={{ fontSize: 14 }}>monthly</span>
                </p>
              </div>

            </div>

          </div>
          <h5 style={{ color: '#444', fontWeight: '700', padding: '20px 0' }}>About this house</h5>
          <p style={{ color: '#555' }}>{house.description}</p>

          <FavoriteButton body={favData} />

        </div>
      </Col>
    </Row>
  );

  return (
    <RootLayout>
      <Container style={{ paddingTop: 70, marginBottom: 100 }}>
        { loading
          ? <Loading />
          : <House />}
      </Container>
    </RootLayout>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchHouseDetails: (id, token) => dispatch(fetchHouseDetails(id, token)),
});

const mapStateToProps = state => ({
  house: state.houseReducer.selectedHouse,
  loading: state.houseReducer.loading,
  token: state.authReducer.token,
  user: state.authReducer.userProfile,
});

HouseDetails.propTypes = {
  house: houseShape.isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  fetchHouseDetails: PropTypes.func.isRequired,
  user: userShape.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
