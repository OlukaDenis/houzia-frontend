import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { favoriteShape } from '../helpers/propTypeShapes';
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
    loading,
  } = props;

  useEffect(() => {
    setLiked(isFavorite);
  }, [isFavorite]);

  const handleClick = () => {
    if (liked) {
      removeHouseFromFavorite(token, body, favorite.id);
    } else {
      addHouseToFavorite(token, body);
    }
    window.location.reload(false);
  };

  const text = liked ? 'Remove from Favorite' : 'Add to Favorite';

  return (
    <>
      { loading && <p>Updating favorites</p>}
      { !loading && <button type="button" className="h-btn btn bt-md h-btn-filled" onClick={handleClick}>{ text }</button>}
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addHouseToFavorite: (token, body) => dispatch(addHouseToFavorite(token, body)),
  removeHouseFromFavorite: (favoriteId, token, body) => {
    dispatch(removeHouseFromFavorite(favoriteId, token, body));
  },
});

const mapStateToProps = state => ({
  isFavorite: state.houseReducer.isFavorite,
  favorite: state.houseReducer.favorite,
  token: state.authReducer.token,
  loading: state.houseReducer.loading,
});

FavoriteButton.defaultProps = {
  favorite: {},
};

FavoriteButton.propTypes = {
  token: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  addHouseToFavorite: PropTypes.func.isRequired,
  removeHouseFromFavorite: PropTypes.func.isRequired,
  favorite: favoriteShape,
  body: PropTypes.shape({
    house_id: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton);
