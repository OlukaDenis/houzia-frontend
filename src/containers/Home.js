import React, { useEffect } from 'react';
import RootLayout from '../components/RootLayout';
import { connect } from 'react-redux';
// import AddProject from '../containers/AddProject';
import { allHouses } from '../redux/actions/houseAction';
import HouseListItem from '../components/HouseListItem';

const HomePage = ({ allHouses, data, token }) => {

  useEffect(() => {
    if (token) {
      allHouses(token);
    }
  }, [allHouses]);

  return(
    <RootLayout>
      <div>
        <h3>You are welcome!</h3>
          { 
            data.map( house => (
              <HouseListItem key={house.id} house={house} />
            ))
          }
    </div>
    </RootLayout>
  )
};

const mapDispatchToProps = dispatch => ({
  allHouses: token => dispatch(allHouses(token)),
});

const mapStateToProps = state => {
    console.log(state);
    return ({
    data: state.houseReducer.data,
    token: state.authReducer.token,
  })
};


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);