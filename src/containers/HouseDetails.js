import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RootLayout from '../components/RootLayout';
import { fetchHouseDetails } from '../redux/actions/houseAction';
import Loading from '../components/Loading';
import FavoriteButton from '../components/FavoriteButton';
import { houseShape } from '../helpers/propTypeShapes';

const HouseDetails = props => {
  const {
    fetchHouseDetails,
    house,
    token,
    loading,
  } = props;

  const { match: { params } } = props;
  const houseId = params.id;
  const favData = { house_id: houseId };

  useEffect(() => {
    if (token && houseId) {
      fetchHouseDetails(houseId, token);
    }
  }, [token, fetchHouseDetails]);

  const House = () => (
    <div>
      <div className="detailPicture">
        <img
          data-testid="image"
          src={house.image}
          alt={house.name}
        />
        <div className="img-overlay" />
      </div>
      <div>
        <p>
          <span>{house.price}</span>
          <span>monthly</span>
        </p>
      </div>
      <h2>{house.name}</h2>
      <p>{house.description}</p>

      <FavoriteButton body={favData} />

    </div>
  );

  return (
    <RootLayout>
      { loading ? <Loading /> : <House />}
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
});

HouseDetails.propTypes = {
  house: PropTypes.objectOf(houseShape).isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  fetchHouseDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
