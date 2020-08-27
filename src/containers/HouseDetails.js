import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import RootLayout from '../components/RootLayout';
import { fetchHouseDetails, addHouseToFavorite, removeHouseFromFavorite } from '../redux/actions/houseAction';
import Loading from '../components/Loading';
import FavoriteButton from '../components/FavoriteButton';

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

  // const addRemoveFavorite = () => {
  //   if (isFavorite) {
  //
  //   } else {
  //     addHouseToFavorite(token, favData);
  //   }

  //   window.location.reload(false);
  // };

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

const mapStateToProps = state => {
  console.log(state);
  return ({
    house: state.houseReducer.selectedHouse,
    loading: state.houseReducer.loading,
    token: state.authReducer.token,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);
