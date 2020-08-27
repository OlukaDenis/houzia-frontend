import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addHouseToFavorite, removeHouseFromFavorite } from '../redux/actions/houseAction';

const FavoriteButton = props => {
  const [liked, setLiked] = useState(false);
  const {
    isFavorite,
    favorite,
    addHouseToFavorite,
    removeHouseFromFavorite,
    token,
    body,
  } = props;

  useEffect(() => {
    setLiked(isFavorite);
  });

  const handleClick = e => {
    if (liked) {
      removeHouseFromFavorite(token, body, favorite.id);
      console.log('In favorite');
    } else {
      addHouseToFavorite(token, body);
      console.log('Not favorite');
    }
    window.location.reload(false);
  };

  const text = liked ? 'Remove from Favorite' : 'Add to Favorite';

  return (
    <button onClick={handleClick}>{ text }</button>
  );
};

const mapDispatchToProps = dispatch => ({
  addHouseToFavorite: (token, body) => dispatch(addHouseToFavorite(token, body)),
  removeHouseFromFavorite: (favoriteId, token, body) => dispatch(removeHouseFromFavorite(favoriteId, token, body)),
});

const mapStateToProps = state => {
  console.log(state);
  return ({
    isFavorite: state.houseReducer.isFavorite,
    favorite: state.houseReducer.favorite,
    token: state.authReducer.token,
    loading: state.houseReducer.loading,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
