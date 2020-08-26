import React, { useEffect } from 'react';
import RootLayout from '../components/RootLayout';
import { connect } from 'react-redux';
import { fetchHouseDetails } from '../redux/actions/houseAction';
import Loading from '../components/Loading';

const HouseDetails = (props) => {
  const { fetchHouseDetails, selectedHouse, token, loading } = props;
  const { match: { params } } = props;
  console.log('Params: ', params);
  const houseId = params.id;

  console.log(houseId);

  useEffect(() => {
    if (token && houseId) {
      fetchHouseDetails(houseId, token);
    }
  }, [token, fetchHouseDetails]);

  console.log('Token', token)
  console.log('HouseID', houseId)

  return (
    <RootLayout>
      <div>
        <div className="detailPicture">
          <img
            data-testid="image"
            src={selectedHouse.image}
            alt={selectedHouse.name}
          />
          <div className="img-overlay" />
        </div>
        <div>
          <p>
          <span>{selectedHouse.price}</span>
          <span>monthly</span>
          </p>
        </div>
      <h2>{selectedHouse.name}</h2>
      <p>{selectedHouse.description}</p>

      <button>Add to Favorite</button>
      </div>
    </RootLayout>
  )

};

const mapDispatchToProps = dispatch => ({
  fetchHouseDetails: (id, token) => dispatch(fetchHouseDetails(id, token)),
});

const mapStateToProps = state => {
    console.log(state);
    return ({
    selectedHouse: state.houseReducer.selectedHouse,
    token: state.authReducer.token,
    loading: state.houseReducer.loading,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(HouseDetails);