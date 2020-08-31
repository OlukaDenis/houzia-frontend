import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import RootLayout from '../components/RootLayout';
import { allHouses } from '../redux/actions/houseAction';
import HouseListItem from '../components/HouseListItem';
import Loading from '../components/Loading';
import { houseShape } from '../helpers/propTypeShapes';

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
    <Row>
      {
        data.length === 0
        ? <p style={{ padding: 10, height: 400 }}><em>No houses added </em></p>
        : data.map(house => (
              <HouseListItem key={house.id} house={house} />
            ))
          }
    </Row>
  );

  return (
    <RootLayout>
      <Container style={{ paddingTop: 90 }}>
        { loading && <Loading />}
        { path === '/' && <MainPage />}
      </Container>
    </RootLayout>
  );
};

const mapDispatchToProps = dispatch => ({
  allHouses: token => dispatch(allHouses(token)),
});

const mapStateToProps = state => ({
  data: state.houseReducer.data,
  token: state.authReducer.token,
  loading: state.houseReducer.loading,
});

HomePage.propTypes = {
  data: PropTypes.arrayOf(houseShape).isRequired,
  token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  allHouses: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
