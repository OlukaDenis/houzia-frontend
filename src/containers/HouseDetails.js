import React, { useEffect } from 'react';
import RootLayout from '../components/RootLayout';
import { connect } from 'react-redux';
import { fetchHouseDetails } from '../redux/actions/houseAction';
import Loading from '../components/Loading';

const HouseDetails = (props) => {
  const { fetchHouseDetails, house, isFavorite, token, loading } = props;
  const { match: { params } } = props;
  const houseId = params.id;

  let buttonText = '';
  isFavorite ? buttonText = 'Remove from Favorites' : buttonText = 'Add to Favorites';


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
      
      <button>{buttonText}</button>
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
});

const mapStateToProps = state => {
    console.log(state);
    return ({
    house: state.houseReducer.selectedHouse,
    isFavorite: state.houseReducer.isMyFavorite,
    token: state.authReducer.token,
    loading: state.houseReducer.loading,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);