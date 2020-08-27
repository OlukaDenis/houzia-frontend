import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import RootLayout from '../components/RootLayout';
import { allHouses } from '../redux/actions/houseAction';
import HouseListItem from '../components/HouseListItem';
import Loading from '../components/Loading';

const HomePage = props => {
  const {
    allHouses, data, token, loading,
  } = props;
  const { match: { path } } = props;

  useEffect(() => {
    if (token) {
      allHouses(token);
    }
  }, [token, allHouses]);

  const MainPage = () => (
    <div>
      {
            data.map(house => (
              <HouseListItem key={house.id} house={house} />
            ))
          }
    </div>
  );

  return (
    <RootLayout>
      { loading && <Loading />}
      { path === '/' && <MainPage />}
    </RootLayout>
  );
};

const mapDispatchToProps = dispatch => ({
  allHouses: token => dispatch(allHouses(token)),
});

const mapStateToProps = state => {
  console.log(state);
  return ({
    data: state.houseReducer.data,
    token: state.authReducer.token,
    loading: state.houseReducer.loading,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
