import React, { useEffect, useState } from 'react';
import RootLayout from '../components/RootLayout';
import { connect } from 'react-redux';
import { fetchHouseDetails, addHouseToFavorite, removeHouseFromFavorite } from '../redux/actions/houseAction';
import Loading from '../components/Loading';

const HouseDetails = (props) => {
  let buttonText = ''; 

  const { 
    fetchHouseDetails,
    house, 
    isFavorite, 
    token, 
    loading, 
    favorite, 
    removeHouseFromFavorite, 
    addHouseToFavorite 
  } = props;

  const { match: { params } } = props;
  const houseId = params.id;
  
  isFavorite ? buttonText = 'Remove from Favorite' : buttonText = 'Add to favorite';
  const addRemoveFavorite = () => {
    const favData = { house_id: houseId }
    if (isFavorite) {
      removeHouseFromFavorite(token, favData, favorite.id );
    } else {
      addHouseToFavorite(token, favData);
    }
    
    window.location.reload(false);
  };

  useEffect(() => {
    if (token && houseId) {
      fetchHouseDetails(houseId, token);
    }
  }, [token, fetchHouseDetails]);

  const House = () => {
    return (
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

      <button onClick={addRemoveFavorite}>{buttonText}</button>
    
      </div>
    )
  };

  return (
    <RootLayout>
      { loading ? <Loading /> : <House />}
    </RootLayout>
  )

};

const mapDispatchToProps = dispatch => ({
  fetchHouseDetails: (id, token) => dispatch(fetchHouseDetails(id, token)),
  addHouseToFavorite: (token, house_id) => dispatch(addHouseToFavorite(token, house_id)),
  removeHouseFromFavorite: (favoriteId, token, houseId) => dispatch(removeHouseFromFavorite(favoriteId, token, houseId)),
});

const mapStateToProps = state => {
    console.log(state);
    return ({
    house: state.houseReducer.selectedHouse,
    isFavorite: state.houseReducer.isFavorite,
    favorite: state.houseReducer.favorite,
    token: state.authReducer.token,
    loading: state.houseReducer.loading,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);